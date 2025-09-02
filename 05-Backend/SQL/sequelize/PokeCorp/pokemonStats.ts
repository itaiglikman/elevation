import { Pokemon } from ".";
import { sequelize } from "./connection";
import { QueryTypes } from 'sequelize';

// ex2
async function getMostHeavy() {
    const query = `SELECT * FROM pokemons WHERE weight = (SELECT MAX(weight) FROM pokemons)`;
    const [pokemon] = await sequelize.query(
        query, { type: QueryTypes.SELECT }
    )
    console.log((pokemon as Pokemon).name);
    return (pokemon as Pokemon).name
}
// getMostHeavy();

// ex3
async function findByType(pokeType: string) {
    const query = `
        SELECT name FROM pokemons p
        JOIN pokemon_types pt ON p.type_id = pt.id
        WHERE p.type_id = p.id`;
    // const query = `
    //     SELECT name FROM pokemons 
    //     WHERE type_id = (
    //         SELECT id FROM pokemon_types WHERE type = :pokeType
    //     )`;
    const pokemons = await sequelize.query(
        query, { replacements: { pokeType }, type: QueryTypes.SELECT }
    );
    const names = (pokemons as { name: string }[]).map(pokemon => pokemon.name);
    console.log(names);
    return names;

}
// findByType('grass')

// ex4
async function findOwners(pokeName: string) {
    const query = `
    SELECT name FROM trainers 
    WHERE id IN (
        SELECT trainer_id FROM pokemons_trainers 
        WHERE pokemon_id = (
            SELECT id FROM pokemons 
            WHERE name = :pokeName
        )
    )`;

    const result = await sequelize.query(
        query, { replacements: { pokeName }, type: QueryTypes.SELECT }
    )

    const names = (result as { name: string }[]).map(pokemon => pokemon.name);
    console.log(names);
    return names;
}
// findOwners('mew')

// ex5
async function findRoster(trainerName: string) {
    const query = `
    SELECT name FROM pokemons 
    WHERE id IN (
        SELECT pokemon_id FROM pokemons_trainers 
        WHERE trainer_id = (
            SELECT id FROM trainers 
            WHERE name = :trainerName
        )
    )`;

    const result = await sequelize.query(
        query, { replacements: { trainerName }, type: QueryTypes.SELECT }
    )

    const names = (result as { name: string }[]).map(trainer => trainer.name);
    console.log(names);
    return names;
}
// findRoster('Loga')

async function getMostOwned() {
    const query = `
    SELECT p.name 
    FROM pokemons p 
    WHERE p.id IN (
      SELECT pokemon_id 
      FROM pokemons_trainers 
      GROUP BY pokemon_id 
      HAVING COUNT(*) = (
        SELECT MAX(owner_count) FROM (
            SELECT pokemon_id, COUNT(*) as owner_count 
            FROM pokemons_trainers
            GROUP BY pokemon_id
        ) as counts
      )
     )`
    const result = await sequelize.query(
        query, { type: QueryTypes.SELECT }
    );

    const names = (result as { name: string }[]).map(pokemon => pokemon.name);
    console.log(names);

}

getMostOwned()

