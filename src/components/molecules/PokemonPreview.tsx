import { FC, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { default as pokemonList } from "../../../assets/json/pokemon.json";
import {
  capitalizeFirstLetter,
  formatNumberForList,
} from "../../global/helper";
import { theme } from "../../themes";
import { textStyle } from "../../themes/textStyles";
import { PokemonImage } from "../atoms/PokemonImage";
import { Spacer } from "../atoms/Spacer";

const styles = StyleSheet.create({
  pressableStyle: {
    backgroundColor: "white",
    borderRadius: 12,
    height: 120,
    shadowOpacity: 0.5,
    width: 170,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 7 },
    margin: 5,
    padding: 10,
  },
  numberStyle: {
    fontSize: 57,
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    opacity: 0.3,
    left: 5,
    width: 160,
  },
  imageStyle: { height: 80, width: 80, resizeMode: "contain" },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  numberContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    top: 60,
  },
});

type PokemonPreviewProps = {
  id: number;
  onPress?: () => void;
};

export const PokemonPreview: FC<PokemonPreviewProps> = ({ id, onPress }) => {
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    setPokemon(pokemonList[id - 1]);
  });

  return (
    <>
      {pokemon && (
        <>
          <Pressable
            style={{
              ...styles.pressableStyle,
              shadowColor: theme.getBackgroundTypeColor(pokemon.types[0]),
              backgroundColor: theme.getBackgroundTypeColor(pokemon.types[0]),
            }}
            onPress={onPress}
          >
            <View style={styles.numberContainer}>
              <Text style={styles.numberStyle}>{`#${formatNumberForList(
                pokemon.id
              )}`}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ ...textStyle.h1, color: theme.palette.white }}>
                {capitalizeFirstLetter(pokemon.name)}
              </Text>
              <Spacer.Column numberOfSpaces={1} />
              <View style={styles.imageContainer}>
                <PokemonImage style={styles.imageStyle} id={pokemon.id} />
              </View>
            </View>
          </Pressable>
        </>
      )}
    </>
  );
};
