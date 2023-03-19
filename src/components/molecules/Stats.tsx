import { FC } from "react";
import { Text, View } from "react-native";
import { textStyle } from "../../themes/textStyles";
import { StatBar } from "../atoms/StatBar";

type StatsProps = {
  color?: string;
  hp?: number;
  attack?: number;
  defence?: number;
  spAttack?: number;
  spDefence?: number;
  speed?: number;
};

export const Stats: FC<StatsProps> = ({
  color,
  hp,
  attack,
  defence,
  spAttack,
  spDefence,
  speed,
}) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={textStyle.h1}>Stats</Text>
      <View style={{ marginBottom: 6 }}>
        <StatBar statName={"HP"} stat={hp} color={color}></StatBar>
        <StatBar statName={"Attack"} stat={attack} color={color}></StatBar>
        <StatBar statName={"Defence"} stat={defence} color={color}></StatBar>
        <StatBar
          statName={"Special Attack"}
          stat={spAttack}
          color={color}
        ></StatBar>
        <StatBar
          statName={"Special Defence"}
          stat={spDefence}
          color={color}
        ></StatBar>
        <StatBar statName={"Speed"} stat={speed} color={color}></StatBar>
      </View>
    </View>
  );
};
