import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { theme } from "../../themes";

const styles = StyleSheet.create({
  tabBarOptionSelected: {
    justifyContent: "center",
    alignItems: "center",
    top: 15,
    backgroundColor: "#444444",
    height: 30,
    width: 50,
    borderRadius: 100,
  },
  tabBarOptionNotSelected: {
    justifyContent: "center",
    alignItems: "center",
    top: 15,
    width: 50,
    height: 30,
    borderRadius: 100,
  },

  tabBarOptionSearch: {
    justifyContent: "center",
    top: 15,
    aspectRatio: 1,
    height: 60,
    alignItems: "center",
    backgroundColor: theme.palette.cadet,
    borderRadius: 100,
    zIndex: 10,
  },
});

export const TabOption = ({ focused, isSearch = false, icon }) => (
  <>
    {isSearch ? (
      <View style={styles.tabBarOptionSearch}>
        <FontAwesome name={icon} color="white" size={25} />
      </View>
    ) : (
      <View
        style={
          focused ? styles.tabBarOptionSelected : styles.tabBarOptionNotSelected
        }
      >
        <FontAwesome name={icon} color="white" size={25} />
      </View>
    )}
  </>
);
