import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  styledWhiteView: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export const Screen = ({
  name,
  onBackButtonPress,
  children,
  safeAreaRequired,
  bottomSafeArea = false,
  topSafeArea,
  backgroundColor = "white",
  whiteText,
}) => {
  const getSafeAreaViewEdges = () => {
    if (safeAreaRequired) {
      return ["top", "bottom", "left", "right"];
    } else if (bottomSafeArea) {
      return ["bottom", "left", "right"];
    } else if (topSafeArea) {
      return ["top", "left", "right"];
    }
    return ["left", "right"];
  };

  return (
    <SafeAreaView
      style={{ ...styles.styledWhiteView, backgroundColor }}
      testID="safeAreaView"
      edges={getSafeAreaViewEdges()}
    >
      {whiteText ? (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            alignSelf: "center",
            position: "absolute",
            top: 50,
          }}
        >
          {name}
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
            position: "absolute",
            top: 50,
          }}
        >
          {name}
        </Text>
      )}
      <View
        style={{
          width: "100%",
          height: 90,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{ width: "37%", justifyContent: "flex-end", top: -5 }}
          onPress={onBackButtonPress}
        >
          <FontAwesome name="chevron-left" color="black" size={25} />
        </Pressable>
        <View
          style={{
            width: "60%",
            justifyContent: "flex-end",
          }}
        ></View>
      </View>
      <View style={{ ...styles.styledWhiteView }}>{children}</View>
    </SafeAreaView>
  );
};
