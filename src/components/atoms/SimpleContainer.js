import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../themes";

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: { width: -5, height: 5 },
  },
  containerNoShadow: {
    borderRadius: 12,
  },
});

export const SimpleContainer = ({
  children,
  style,
  backgroundColor = theme.palette.white,
  shadow = true,
}) => (
  <>
    {shadow ? (
      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor,
          ...style,
        }}
      >
        {children}
      </View>
    ) : (
      <View
        style={{
          ...styles.containerNoShadow,
          backgroundColor: backgroundColor,
          ...style,
        }}
      >
        {children}
      </View>
    )}
  </>
);
