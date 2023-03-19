import { useState } from "react";
import { View } from "react-native";
import { Pokeball } from "../../../assets/svg";
import { PokemonDetailsModal } from "../../components/organisms/PokemonDetailsModal";
import { PokemonList } from "../../components/organisms/PokemonList";
import { Screen } from "../../components/Screen";

export const PokemonListScreen = ({ route }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const [visibleModal, setVisibleModal] = useState(false);
  const list = route.params;
  const onPokemonSelect = (id) => {
    setSelectedPokemonId(id);
    setVisibleModal(true);
  };

  return (
    <Screen name={"Region"}>
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          height: "100%",
          justifyContent: "flex-start",
          right: -100,
        }}
      >
        <Pokeball />
      </View>
      <PokemonList pokemonIds={list} onPress={onPokemonSelect} />
      <PokemonDetailsModal
        visible={visibleModal}
        setModalVisible={setVisibleModal}
        pokemonId={selectedPokemonId}
      />
    </Screen>
  );
};
