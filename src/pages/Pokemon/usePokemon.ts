import useSWRImmutable from 'swr/immutable'

// Для экономии времени, типами покрыта только часть данных, которая используется в проекте
export type PokemonResponse = {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
          name: string;
          url: string;
        }
    }[];
}

export const usePokemon = (id = '') => {
    const { data, error } = useSWRImmutable<PokemonResponse>(`/pokemon/${id}`);

    function prepareData(pokemon?: PokemonResponse) {
        return {
            name: pokemon?.name,
            height: pokemon?.height,
            weight: pokemon?.weight,
            abilities: pokemon?.abilities.map(({ ability }) => ability.name)
        };
    }

    return {
        pokemonData: prepareData(data),
        isLoadingPokemon: !error && !data,
        isErrorPokemon: error
    }
}