import { Pressable } from "react-native";
import { theme } from "../../themes";
import { SimpleContainer } from "./SimpleContainer";

export const SimplePressable = ({
  children,
  style,
  onPress,
  backgroundColor = theme.palette.white,
  shadow = true,
}) => (
  <Pressable onPress={onPress} style={style}>
    <SimpleContainer
      style={{ width: "100%", height: "100%" }}
      backgroundColor={backgroundColor}
      shadow={shadow}
    >
      {children}
    </SimpleContainer>
  </Pressable>
);
