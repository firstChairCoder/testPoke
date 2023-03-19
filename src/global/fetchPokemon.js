import axios from "axios";

export const fetchPokemon = async (id, setPokemon) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!setPokemon) return response.data;
    else setPokemon(response.data);
  } catch (error) {
    console.error(error);
  }
};
