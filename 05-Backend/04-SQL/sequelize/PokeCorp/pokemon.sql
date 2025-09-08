USE poke_corp

CREATE TABLE pokemon_types (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    type VARCHAR(20) UNIQUE
);

CREATE TABLE towns (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE
);

CREATE TABLE trainers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE,
    town_id INT,
    Foreign Key (town_id) REFERENCES towns (id)
);

CREATE TABLE pokemons (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) UNIQUE,
    type_id INT,
    weight INT,
    height INT,
    Foreign Key (type_id) REFERENCES pokemon_types (id)
);

CREATE Table pokemons_trainers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    trainer_id INT,
    pokemon_id INT,
    Foreign Key (trainer_id) REFERENCES trainers (id),
    Foreign Key (pokemon_id) REFERENCES pokemons (id)
)