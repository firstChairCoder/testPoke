import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PokemonImage } from "../../../components/atoms/PokemonImage";
import { SimplePressable } from "../../../components/atoms/SimplePressable";
import { Spacer } from "../../../components/atoms/Spacer";
import { Type } from "../../../components/atoms/Type";
import { fetchPokemon } from "../../../global/fetchPokemon";
import {
  capitalizeFirstLetter,
  formatNumberForList,
} from "../../../global/helper";
import { Pokemon, stringToType } from "../../../global/types";
import { theme } from "../../../themes";
import { textStyle } from "../../../themes/textStyles";

const styles = StyleSheet.create({
  simpleContainer: { width: "100%", height: 220 },
  innerContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingRight: 5,
    flexDirection: "row",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    top: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  imageStyle: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});

type FeaturedPokemonProps = {
  id: number;
  onPress?: () => void;
};

export const FeaturedPokemon: FC<FeaturedPokemonProps> = ({ id, onPress }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon(id, setPokemon);
  });

  return (
    <SimplePressable
      style={styles.simpleContainer}
      onPress={onPress}
      backgroundColor={theme.getBackgroundTypeColor(
        pokemon?.types[0].type.name
      )}
    >
      <View style={styles.innerContainer}>
        {pokemon && (
          <>
            <View>
              <Text style={{ ...textStyle.caption, color: "white" }}>
                Featured Pokemon
              </Text>
              <Spacer.Column numberOfSpaces={1} />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ ...textStyle.h1, opacity: 0.3 }}
                >{`#${formatNumberForList(id)} `}</Text>

                <Text
                  style={{ ...textStyle.h1, color: "white" }}
                >{`${capitalizeFirstLetter(pokemon.name)}`}</Text>
              </View>
              <Spacer.Column numberOfSpaces={1} />
              <View style={{ flexDirection: "row" }}>
                <Type
                  type={stringToType(pokemon?.types[0].type.name)}
                  small={true}
                />
                <Type
                  type={stringToType(pokemon?.types[1]?.type.name)}
                  small={true}
                />
              </View>
              <View
                style={{
                  alignItems: "flex-start",
                  width: 350,
                }}
              >
                <Text
                  style={{
                    fontSize: 120,
                    color: "white",
                    fontFamily: "Helvetica",
                    fontWeight: "bold",
                    opacity: 0.3,
                  }}
                >{`#${formatNumberForList(pokemon.id)}`}</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <PokemonImage style={styles.imageStyle} id={id} />
            </View>
          </>
        )}
      </View>
    </SimplePressable>
  );
};
