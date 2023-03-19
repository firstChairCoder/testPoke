import { FontAwesome } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Pokeball } from "../../../assets/svg";
import {
  capitalizeFirstLetter,
  formatNumberForList,
} from "../../global/helper";
import { stringToType } from "../../global/types";
import { usePokemonDetailsModal } from "../../hooks/usePokemonDetailsModal";
import { theme } from "../../themes";
import { textStyle } from "../../themes/textStyles";
import { PokemonImage } from "../atoms/PokemonImage";
import { Spacer } from "../atoms/Spacer";
import { Type } from "../atoms/Type";
import { Stats } from "../molecules/Stats";

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
    top: 55,
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    height: 300,
  },
  text: {
    fontSize: 130,
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    opacity: 0.3,
    left: 5,
  },
  pokemonNameText: {
    ...textStyle.title,
    color: "white",
    alignSelf: "center",
  },
  closeModalPressable: {
    padding: 20,
    position: "absolute",
  },
  pokemonImageContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  detailsContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  backgroundPokeball: {
    position: "absolute",
    height: "100%",
    justifyContent: "flex-end",
    top: 250,
    right: 200,
  },
  typesContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
});

export const PokemonDetailsModal = ({
  visible,
  pokemonId,
  setModalVisible,
}) => {
  const { pokemon, closeModal } = usePokemonDetailsModal({
    pokemonId,
    setModalVisible,
  });

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.getBackgroundTypeColor(
            pokemon?.types[0].type.namex
          ),
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`#${formatNumberForList(
            pokemon?.id
          )}`}</Text>
        </View>
        <Spacer.Column numberOfSpaces={3} />
        <Text style={styles.pokemonNameText}>
          {capitalizeFirstLetter(pokemon?.name)}
        </Text>
        <Pressable style={styles.closeModalPressable} onPress={closeModal}>
          <FontAwesome name={"close"} color={"white"} size={20} />
        </Pressable>
        <View style={styles.pokemonImageContainer}>
          <PokemonImage style={styles.pokemonImage} id={pokemonId} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <View style={styles.backgroundPokeball}>
              <Pokeball />
            </View>
            <View style={styles.typesContainer}>
              <Type type={(pokemon?.types[0]?.type.name)} />
              <Type type={(pokemon?.types[1]?.type.name)} />
            </View>
            <Spacer.Column numberOfSpaces={2} />
            <Stats
              hp={pokemon?.stats[0].base_stat}
              attack={pokemon?.stats[1].base_stat}
              defence={pokemon?.stats[2].base_stat}
              spAttack={pokemon?.stats[2].base_stat}
              spDefence={pokemon?.stats[4].base_stat}
              speed={pokemon?.stats[5].base_stat}
              color={theme.typePalette.get(
                capitalizeFirstLetter(
                  pokemon?.types[0].type.name
                )
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
