import { FC } from "react";
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

type TypeProps = {
  type?: PokemonTypes;
  small?: boolean;
};

export const Type: FC<TypeProps> = ({ type, small = false }) => {
  if (!type) return <></>;
  const TypeIcon = () => {
    switch (type) {
      case PokemonTypes.BUG:
        return <BugUnselected />;
      case PokemonTypes.DARK:
        return <DarkUnselected />;
      case PokemonTypes.DRAGON:
        return <DragonUnselected />;
      case PokemonTypes.ELECTRIC:
        return <ElectricUnselected />;
      case PokemonTypes.FAIRY:
        return <FairyUnselected />;
      case PokemonTypes.FIGHTING:
        return <FightingUnselected />;
      case PokemonTypes.FIRE:
        return <FireUnselected />;
      case PokemonTypes.FLYING:
        return <FlyingUnselected />;
      case PokemonTypes.GHOST:
        return <GhostUnselected />;
      case PokemonTypes.GRASS:
        return <GrassUnselected />;
      case PokemonTypes.GROUND:
        return <GroundUnselected />;
      case PokemonTypes.ICE:
        return <IceUnselected />;
      case PokemonTypes.NORMAL:
        return <NormalUnselected />;
      case PokemonTypes.POISON:
        return <PoisonUnselected />;
      case PokemonTypes.PSYCHIC:
        return <PsychicUnselected />;
      case PokemonTypes.ROCK:
        return <RockUnselected />;
      case PokemonTypes.STEEL:
        return <SteelUnselected />;
      case PokemonTypes.WATER:
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
