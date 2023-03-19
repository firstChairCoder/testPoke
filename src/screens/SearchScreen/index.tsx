import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Pokeball } from "../../../assets/svg";
import { SearchBar } from "./components/SearchBar";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 70,
    backgroundColor: "white",
  },
  background: {
    position: "absolute",
    zIndex: -1,
    height: "100%",
    justifyContent: "flex-end",
    right: -170,
  },
});

export const SearchScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <View style={styles.background}>
        <Pokeball />
      </View>
    </View>
  );
};
