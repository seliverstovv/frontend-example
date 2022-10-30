import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';
import List from 'components/List';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useLocalStorage from 'hooks/useLocalStorage';
import { usePokemons } from './usePokemons';
import { POKEMONS_PAGE_LIMIT as LIMIT } from 'utils/consts'
import { useState, useEffect } from 'react';

const Pokemons = () => {
    const [currentPage, setCurrentPage] = useLocalStorage<number>('currentPage', 1);
    const [memoPageCount, setMemoPageCount] = useState(0)
    const getOffset = currentPage === 1 ? 0 : (currentPage - 1) * LIMIT;
    const { pokemonsData, isLoadingPokemons, isErrorPokemons } = usePokemons(LIMIT, getOffset);


    useEffect(() => {
        if (pokemonsData?.count) {
            setMemoPageCount(pokemonsData.count)
        }
    }, [pokemonsData])

    const pagesCount = Math.floor(memoPageCount || 1 / LIMIT);
    const pokemonList = pokemonsData?.results.map((item) => item.name) || [];

    if (isErrorPokemons) {
        return <div>Ooops...</div>
    }

    return (
        <Container maxWidth="sm" sx={{ padding: 5 }}>
            <Paper sx={{ padding: 3 }}>
                <Typography variant="h3">
                Pokemons list:
                </Typography>
                <List list={pokemonList} isLoading={isLoadingPokemons} limit={LIMIT} />
                <Pagination
                    disabled={isLoadingPokemons}
                    count={pagesCount}
                    page={currentPage}
                    onChange={(e, page) => setCurrentPage(page)}
                    sx={{ml: 'auto', mr: 'auto', width: 'fit-content', mt: 2}}
                />
            </Paper>
        </Container>
    );
};

export default Pokemons