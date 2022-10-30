import useSWR from 'swr'

export type PokemonResponse = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        is_hidden: number;
        slot: number;
        ability: {
          name: string;
          url: string;
        }
    }[];
}

export const usePokemon = (id = '') => {
    const { data, error } = useSWR<PokemonResponse>(`/pokemon/${id}`);

    function prepareData(pokemon?: PokemonResponse) {
        if (!pokemon) {
            console.warn('Pokemon responese is empty')
            return {}
        }

        return {
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map(({ ability }) => ability.name)
        };
    }

    return {
        pokemonData: prepareData(data),
        isLoadingPokemon: !error && !data,
        isErrorPokemon: error
    }
}