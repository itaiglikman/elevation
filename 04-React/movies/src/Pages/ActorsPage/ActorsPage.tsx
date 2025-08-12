import { Box, Container } from "@mantine/core";
import "./ActorsPage.css";
import { SearchBox } from "../../Components/ActorsArea/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";

// tmdb api key 1f267fdba923cdc43b1b419b2ec2b38e
const apiKey = '1f267fdba923cdc43b1b419b2ec2b38e';
// tmdb api token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjI2N2ZkYmE5MjNjZGM0M2IxYjQxOWIyZWMyYjM4ZSIsIm5iZiI6MTc1NDkwMTAzMS4xMjQsInN1YiI6IjY4OTlhYTI3OGQzZjk4NzI2NTI2ODE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0vHfjLbqCI9kj2V-HLWE4809y0TsuSZ8bpxMU_9S1qI

export function ActorsPage() {

    const [searchText, setSearchText] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [actors, setActors] = useState<any[]>([])

    useEffect(() => {

        async function getActors() {
            const url = `https://api.themoviedb.org/3/search/person?query=${searchText}&api_key=${apiKey}`;
            const result = await axios.get(url);
            const actorsResults = result.data.results;
            setSearchResults(actorsResults.sort((a: any, b: any) => b.popularity - a.popularity))
        }

        getActors()
    }, [searchText])


    function addActor(index: number) {
        setActors(actors.concat(searchResults[index]));
        setSearchText('');
    }

    return (
        <Container>
            <h1>Actors Page</h1>
            <SearchBox
                placeHolder="Search actors..."
                searchText={searchText}
                onSearchChange={(value) => setSearchText(value)}
                results={searchResults}
                onResultClicked={(index) => addActor(index)}
            />
            <Box >
                {actors.map((actor:any, i) => (
                    <Box key={i}>{actor.name}</Box>
                ))}
            </Box>
        </Container>
    );
}
