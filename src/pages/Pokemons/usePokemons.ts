import useSWR from 'swr'

type Pokemon = { name: string; url: string };

type PokemonsResponse = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
};

export const usePokemons = (limit: number, offset: number) => {
    const { data, error } = useSWR<PokemonsResponse>(`/pokemon?limit=${limit}&offset=${offset}`);

    return {
        pokemonsData: data,
        isLoadingPokemons: !error && !data,
        isErrorPokemons: error
    }
}