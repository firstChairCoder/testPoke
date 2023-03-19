import { useState } from "react";
import { fetchPokemon } from "../global/fetchPokemon.js";

export const usePokemonDetailsModal = ({ pokemonId, setModalVisible }) => {
  const [pokemon, setPokemon] = useState();
  const closeModal = () => setModalVisible(false);

  fetchPokemon(pokemonId, setPokemon);

  return { pokemon, closeModal };
};
