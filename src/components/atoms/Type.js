import { StyleSheet, Text, View } from "react-native";
import {
  BugUnselected,
  DarkUnselected,
  DragonUnselected,
  ElectricUnselected,
  FairyUnselected,
  FightingUnselected,
  FireUnselected,
  FlyingUnselected,
  GhostUnselected,
  GrassUnselected,
  GroundUnselected,
  IceUnselected,
  NormalUnselected,
  PoisonUnselected,
  PsychicUnselected,
  RockUnselected,
  SteelUnselected,
  WaterUnselected,
} from "../../../assets/svg";
import { PokemonTypes } from "../../global/types";
import { theme } from "../../themes";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 18,
  },
  smallText: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 15,
  },
  typeBox: {
    marginRight: 4,
    borderRadius: 8,
    width: 125,
    height: 35,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  smallTypeBox: {
    marginRight: 4,
    borderRadius: 8,
    width: 70,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Type = ({ type, small = false }) => {
  if (!type) return <></>;
  const TypeIcon = () => {
    switch (type) {
      case "bug":
        return <BugUnselected />;
      case "dark":
        return <DarkUnselected />;
      case "dragon":
        return <DragonUnselected />;
      case "electric":
        return <ElectricUnselected />;
      case "fairy":
        return <FairyUnselected />;
      case "fighting":
        return <FightingUnselected />;
      case "fire":
        return <FireUnselected />;
      case "flying":
        return <FlyingUnselected />;
      case "ghost":
        return <GhostUnselected />;
      case "grass":
        return <GrassUnselected />;
      case "ground":
        return <GroundUnselected />;
      case "ice":
        return <IceUnselected />;
      case "normal":
        return <NormalUnselected />;
      case "poison":
        return <PoisonUnselected />;
      case "psychic":
        return <PsychicUnselected />;
      case "rock":
        return <RockUnselected />;
      case "steel":
        return <SteelUnselected />;
      case "water":
        return <WaterUnselected />;
    }
  };

  return (
    <>
      {small ? (
        <View
          style={{
            ...styles.smallTypeBox,
            backgroundColor: theme.typePalette.get(type),
          }}
        >
          <Text style={styles.smallText}>{type}</Text>
        </View>
      ) : (
        <View
          style={{
            ...styles.typeBox,
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: theme.typePalette.get(type),
          }}
        >
          <TypeIcon />
          <Text style={styles.text}>{type}</Text>
        </View>
      )}
    </>
  );
};
