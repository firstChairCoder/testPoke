import { View } from "react-native";
import { theme } from "../../themes";

const Row = ({ numberOfSpaces }) => (
  <View style={{ width: theme.spacing(numberOfSpaces) }} />
);
const Column = ({ numberOfSpaces }) => (
  <View style={{ height: theme.spacing(numberOfSpaces) }} />
);
const Flex = ({ flex, grow }) => (
  <View style={{ flex: flex ?? 1, flexGrow: grow ? 1 : undefined }} />
);

export const Spacer = {
  Flex,
  Row,
  Column,
};
