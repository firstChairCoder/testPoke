import { FC, ReactNode } from "react";
import { Pressable } from "react-native";
import { theme } from "../../themes";
import { SimpleContainer } from "./SimpleContainer";

type TypeProps = {
  children: ReactNode | ReactNode[] | undefined;
  style: {
    width?: number | string;
    height?: number | string;
  };
  onPress?: () => void;
  backgroundColor?: string;
  shadow?: boolean;
};

export const SimplePressable: FC<TypeProps> = ({
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
