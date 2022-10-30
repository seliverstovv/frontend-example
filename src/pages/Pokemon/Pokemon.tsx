import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { usePokemon } from './usePokemon';
import { RouterParams } from 'App';
import RouterLink from 'components/StyledRouterLink'

const Pokemon = () => {
    const { pokemonID } = useParams<RouterParams>();
    const { pokemonData, isLoadingPokemon, isErrorPokemon } = usePokemon(pokemonID);

    if (isErrorPokemon) {
        return <p>Ooops...</p>
    }

    if (isLoadingPokemon) {
        return (
            <Container maxWidth="sm" sx={{ padding: 5 }}>
                <Stack spacing={3}>
                    <Skeleton variant="rounded" width={90} height={47} />
                    <Skeleton variant="rounded" width={522} height={270} />
                </Stack>
            </Container>
        )
    }

    return (
        <Container maxWidth="sm" sx={{ padding: 5 }}>
            <RouterLink to='/'>
                <Button variant="outlined" startIcon={<span>{'<-'}</span>} sx={{ mb: 3 }}>
                    Back
                </Button>
            </RouterLink>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h4" color="text.primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                        Name: {pokemonData.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Height: {pokemonData.height} in
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body1" color="text.secondary">
                        Weight: {pokemonData.weight} lb
                    </Typography>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Abilities:
                    </Typography>
                    {pokemonData.abilities?.map((name, index) => (
                        <Typography key={name} variant="body2" gutterBottom>{index + 1}{') '}{name}</Typography>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}

export default Pokemon;