import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Pokemon } from "./types";

export const fetchPokemon = async (
  id: number,
  setPokemon?: Dispatch<SetStateAction<Pokemon | undefined>>
) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!setPokemon) return response.data;
    else setPokemon(response.data);
  } catch (error) {
    console.error(error);
  }
};
