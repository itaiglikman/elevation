import { Box, Paper, TextInput } from "@mantine/core";
import "./SearchBox.css";

interface SearchBoxProps {
    placeHolder: string;
    searchText: string;
    results: any[];
    // results: string[];
    onSearchChange: (value: string) => void;
    onResultClicked: (index: number) => void;
}

export function SearchBox({ placeHolder, searchText, results, onSearchChange, onResultClicked }: SearchBoxProps) {

    return (
        <Box pos={"relative"} className="SearchBox">
            <TextInput
                placeholder={placeHolder}
                value={searchText}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            {results && results.length > 0 &&
                <Paper
                    pos={"absolute"}
                    withBorder
                    shadow="sm"
                    w={'100%'}
                    className="results"
                >
                    {results.map((item: any, i) => (
                        <Box
                            key={i}
                            p='xs'
                            className="result-item"
                            onClick={() => onResultClicked(i)}
                        >{item.name}</Box>
                    ))}
                </Paper>
            }
        </Box >
    );
}
