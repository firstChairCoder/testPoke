import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pokeball } from "../../../assets/svg";
import { SimplePressable } from "../../components/atoms/SimplePressable";
import { Spacer } from "../../components/atoms/Spacer";
import { PokemonDetailsModal } from "../../components/organisms/PokemonDetailsModal";
import { PokemonList } from "../../components/organisms/PokemonList";
import { textStyle } from "../../themes/textStyles";
import { FeaturedPokemon } from "./components/FeaturedPokemon";

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "48%",
  },
  tinyLogo: {
    width: 350,
    height: 60,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(1);
  const [featuredId, setFeaturedId] = useState(0);

  useMemo(() => {
    setFeaturedId(Math.floor(Math.random() * 1008));
  }, []);

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: 60,
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ ...textStyle.h1, textAlign: "left", width: "100%" }}>
          Welcome to your Pokedex!
        </Text>
        <Spacer.Column numberOfSpaces={4} />
        <FeaturedPokemon
          id={featuredId}
          onPress={() => {
            setId(featuredId);
            setModalVisible(true);
          }} 
        />
        <Spacer.Column numberOfSpaces={5} />

        <View style={{ flexDirection: "row" }}>
          <SimplePressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("GenerationsScreen", { screen: "Settings" })
            }
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={textStyle.h2}>Generations</Text>
            </View>
          </SimplePressable>
          <Spacer.Flex />
          <SimplePressable style={styles.button}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={textStyle.h2}>Favourites</Text>
            </View>
          </SimplePressable>
        </View>
        <View>
          <Spacer.Column numberOfSpaces={6} />
          <Text style={textStyle.h1}>Favourites</Text>
          <Spacer.Column numberOfSpaces={1} />
        </View>
      </View>
      <PokemonList
        horizontal
        pokemonIds={[814, 920, 1000]}
        onPress={(id) => {
          setModalVisible(true);
          setId(id);
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          height: "100%",
          justifyContent: "flex-end",
          right: -170,
        }}
      >
        <Pokeball />
      </View>
      <PokemonDetailsModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        pokemonId={id}
      />
    </View>
  );
};

export default HomeScreen;
