import { SWRConfig } from 'swr';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';
import { fetcher } from './utils/fetcher';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';

const theme = createTheme();

const router = createHashRouter([
    {
        path: '/',
        element: <Pokemons />,
        errorElement: <p>Ooops...</p>,
    },
    {
        path: '/:pokemonID',
        element: <Pokemon />,
        errorElement: <p>Ooops...</p>
    },
]);

export type RouterParams = {
    pokemonID: string
}

const App = () => {
    return (
        <SWRConfig value={{ fetcher: fetcher }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </SWRConfig>
    )
};

export default App;
