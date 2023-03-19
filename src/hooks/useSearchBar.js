import { useState } from "react";
import { default as allpokemon } from "../../assets/json/pokemon.json";

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const [visibleModal, setVisibleModal] = useState(false);

  const onPokemonSelect = (id) => {
    setSelectedPokemonId(id);
    setVisibleModal(true);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    setFilteredPokemon(
      allpokemon
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(text.toLowerCase())
        )
        .map((pokemon) => pokemon.id)
    );
  };

  const onXIconPress = () => {
    setSearchTerm("");
  };

  return {
    searchTerm,
    filteredPokemon,
    selectedPokemonId,
    visibleModal,
    setVisibleModal,
    handleSearch,
    onXIconPress,
    onPokemonSelect,
  };
};
