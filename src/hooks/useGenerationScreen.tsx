import { StyleSheet, Text, View } from "react-native";
import { PokemonImage } from "../components/atoms/PokemonImage";
import { SimplePressable } from "../components/atoms/SimplePressable";
import { Generation } from "../global/types";
import { textStyle } from "../themes/textStyles";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  simplePressable: {
    width: "100%",
    height: 100,
  },
  insideContainer: {
    padding: 10,
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});

type GenerationsScreenHookProps = {
  navigation: any;
};

type RenderItemProps = {
  item: Generation;
};

export const useGenerationsScreen = ({
  navigation,
}: GenerationsScreenHookProps) => {
  const getStarterPokemon = ({ item }: { item: Generation }) => {
    const starterPokemon: number[] = [];
    if (item.id === 5) {
      starterPokemon.push(item.firstPokemonId + 1);
      starterPokemon.push(item.firstPokemonId + 4);
      starterPokemon.push(item.firstPokemonId + 7);
    } else {
      starterPokemon.push(item.firstPokemonId);
      starterPokemon.push(item.firstPokemonId + 3);
      starterPokemon.push(item.firstPokemonId + 6);
    }

    return starterPokemon;
  };

  const generateList = ({ item }: RenderItemProps) => {
    const list = [];
    for (let i = item.firstPokemonId; i <= item.lastPokemonId; i++) {
      list.push(i);
    }
    return list;
  };

  const onPress = (arg: RenderItemProps) => () => {
    navigation.navigate("PokemonListScreen", generateList(arg));
  };

  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const starterPokemon = getStarterPokemon({ item });
    return (
      <View style={styles.container}>
        <SimplePressable
          onPress={onPress({ item })}
          style={styles.simplePressable}
        >
          <View style={styles.insideContainer}>
            <View>
              <Text style={textStyle.caption}>{`Generation ${item.id}`}</Text>
              <Text style={textStyle.h1}>{item.region}</Text>
            </View>
            <View style={styles.imageContainer}>
              <PokemonImage id={starterPokemon[0]} style={styles.image} />
              <PokemonImage id={starterPokemon[1]} style={styles.image} />
              <PokemonImage id={starterPokemon[2]} style={styles.image} />
            </View>
          </View>
        </SimplePressable>
      </View>
    );
  };

  return { renderItem };
};
