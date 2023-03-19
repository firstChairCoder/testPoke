import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SimpleContainer } from "../../../components/atoms/SimpleContainer";
import { Spacer } from "../../../components/atoms/Spacer";
import { PokemonDetailsModal } from "../../../components/organisms/PokemonDetailsModal";
import { PokemonList } from "../../../components/organisms/PokemonList";
import { useSearchBar } from "../../../hooks/useSearchBar";
import { textStyle } from "../../../themes/textStyles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  textField: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
    ...textStyle.caption,
  },
});

export const SearchBar = () => {
  const {
    searchTerm,
    filteredPokemon,
    selectedPokemonId,
    onPokemonSelect,
    visibleModal,
    setVisibleModal,
    handleSearch,
    onXIconPress,
  } = useSearchBar();
  return (
    <View>
      <SimpleContainer style={styles.container}>
        <View style={styles.innerContainer}>
          <FontAwesome name={"search"} size={20} />
          <Spacer.Row numberOfSpaces={2} />
          <TextInput
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder="Search for a Pokemon"
            style={styles.textField}
          />
          {searchTerm.length > 0 && (
            <Pressable onPress={onXIconPress}>
              <FontAwesome name={"close"} size={20} />
            </Pressable>
          )}
        </View>
      </SimpleContainer>
      <Spacer.Column numberOfSpaces={2} />

      {searchTerm.length > 1 && (
        <PokemonList pokemonIds={filteredPokemon} onPress={onPokemonSelect} />
      )}
      {searchTerm.length > 1 && filteredPokemon.length === 0 && (
        <Text style={styles.text}>No pokemon found</Text>
      )}
      <PokemonDetailsModal
        visible={visibleModal}
        setModalVisible={setVisibleModal}
        pokemonId={selectedPokemonId}
      />
    </View>
  );
};
