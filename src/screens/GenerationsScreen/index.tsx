import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Pokeball } from "../../../assets/svg";
import { useGenerationsScreen } from "../../hooks/useGenerationScreen";
import { default as regions } from "../../../assets/json/regions.json";
import { Generation } from "../../global/types";
import { Screen } from "../../components/Screen";

export const styles = StyleSheet.create({
  backgroundPokeball: {
    position: "absolute",
    zIndex: -1,
    height: "100%",
    justifyContent: "flex-start",
    right: -100,
  },
  flatList: { width: "100%", height: "100%" },
});

type RenderItemProps = {
  item: Generation;
};

type GenerationScreenProps = {
  navigation: any;
};

export const GenerationsScreen: FC<GenerationScreenProps> = ({
  navigation,
}) => {
  const { renderItem } = useGenerationsScreen({ navigation });
  return (
    <Screen name={"Generations"} safeAreaRequired={false}>
      <View style={styles.flatList}>
        <FlatList data={regions} renderItem={renderItem} />
      </View>
      <View style={styles.backgroundPokeball}>
        <Pokeball />
      </View>
    </Screen>
  );
};
