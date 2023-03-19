import { Text, View } from "react-native";
import { textStyle } from "../../themes/textStyles";

const Settings = ({ navigation }: any) => {
  return (
    <View>
      <Text style={textStyle.h1}>You can change stuff here</Text>
    </View>
  );
};

export default Settings;
