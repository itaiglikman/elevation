import fs from 'fs';
import path from "path";
import { sequelize } from "./connection";
import { QueryTypes } from 'sequelize';

export type OwnedBy = {
    name: string;
    town: string;
};

export type PokemonJson = {
    id: number;
    name: string;
    type: string;
    weight: number;
    height: number;
    ownedBy: OwnedBy[];
};

export type Pokemon = {
    id: number;
    name: string;
    type: string;
    weight: number;
    height: number;
    ownedBy: string[];
};

export type Trainer = {
    name: string,
    town: string
}

function createData() {

    const data = fs.readFileSync(path.join(__dirname, 'pokemon.json'), 'utf-8')
    const pokemonsData = JSON.parse(data);

    const towns = new Set<string>();
    const types = new Set<string>();
    const trainersMap = new Map<string, Trainer>();
    const pokemons = new Set<Pokemon>();

    pokemonsData.forEach((item: PokemonJson) => {
        types.add(item.type);
        const pokemon: Pokemon = {
            id: item.id,
            name: item.name,
            height: item.height,
            weight: item.weight,
            type: item.type,
            ownedBy: []
        }

        for (const owner of item.ownedBy) {
            pokemon.ownedBy.push(owner.name);
            towns.add(owner.town);
            const key = `${owner.name}`;
            if (!trainersMap.has(key))
                trainersMap.set(key, { name: owner.name, town: owner.town });
        }

        pokemons.add({ ...pokemon });
    });

    return {
        towns, types, trainers: trainersMap, pokemons
    }

}

async function insertTowns(towns: Set<string>) {
    for (const town of towns) {
        const result = await sequelize.query(
            `INSERT INTO towns (name) VALUES(:town);`,
            { replacements: { town } }
        )
    }
}

async function insertTypes(types: Set<string>) {
    for (const t of types) {
        await sequelize.query(
            `INSERT INTO pokemon_types (type) VALUES (:t)`,
            { replacements: { t } }
        )
    }
}

async function insertPokemons(pokemons: Set<Pokemon>) {
    for (const p of pokemons) {
        const [result]: { id: number }[] = await sequelize.query(
            `SELECT id FROM pokemon_types WHERE type = :pType`,
            { replacements: { pType: p.type }, type: QueryTypes.SELECT }
        )

        const typeId = result.id;

        await sequelize.query(
            `INSERT INTO pokemons (name, type_id, weight, height) VALUES (:name,:type,:weight,:height )`,
            { replacements: { name: p.name, type: typeId, weight: p.weight, height: p.height } }
        )
    }
}

async function insetTrainers(trainers: Map<string, Trainer>) {
    for (const trainer of trainers) {

        const getTownIdSubquery = 'SELECT id FROM towns WHERE name=:town';
        const insertTrainerQuery = `INSERT INTO trainers (name, town_id) VALUES (:name,(${getTownIdSubquery}))`;

        await sequelize.query(
            insertTrainerQuery,
            { replacements: { name: trainer[1].name, town: trainer[1].town } }
        )
    }
}

async function insertTrainersPokemons(pokemons: Set<Pokemon>, trainers: Map<string, Trainer>) {
    for (const pokemon of pokemons) {
        for (const owner of pokemon.ownedBy) {
            const subQuery = `SELECT id FROM trainers WHERE name = :owner`;
            const query = `INSERT INTO pokemons_trainers (pokemon_id,trainer_id) VALUES (:pokemonId,(${subQuery}))`;

            await sequelize.query(
                query, { replacements: { pokemonId: pokemon.id, owner } }
            )
        }
    }
}

async function insertData(data: any) {
    await insertTowns(data.towns);
    await insertTypes(data.types);
    await insertPokemons(data.pokemons);
    await insetTrainers(data.trainers);
    await insertTrainersPokemons(data.pokemons, data.trainers)
}

async function main() {
    await testConnection();
    const data = createData();
    // await insertData(data);


}

main()

// Test database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to database:', error);
    }
}