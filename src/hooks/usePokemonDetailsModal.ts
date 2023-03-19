import { Dispatch, SetStateAction, useState } from "react";
import { fetchPokemon } from "../global/fetchPokemon";
import { Pokemon } from "../global/types";

type PokemonDetailsModalHookProps = {
  pokemonId: number;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const usePokemonDetailsModal = ({
  pokemonId,
  setModalVisible,
}: PokemonDetailsModalHookProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const closeModal = () => setModalVisible(false);

  fetchPokemon(pokemonId, setPokemon);

  return { pokemon, closeModal };
};
