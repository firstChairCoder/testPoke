import { Dimensions as NativeDimensions } from "react-native";

const SCREEN_WIDTH = NativeDimensions.get("window").width;
const SCREEN_HEIGHT = NativeDimensions.get("window").height;
const BASE_UNIT = 4;

const typeColorsBackground = new Map([
  ["normal", "#B5B9C4"],
  ["fire", "#FFA756"],
  ["water", "#58ABF6"],
  ["electric", "#F2CB55"],
  ["grass", "#8BBE8A"],
  ["ice", "#91D8DF"],
  ["fighting", "#EB4971"],
  ["poison", "#9F6E97"],
  ["ground", "#F78551"],
  ["flying", "#83A2E3"],
  ["psychic", "#FF6568"],
  ["bug", "#8BD674"],
  ["rock", "#D4C294"],
  ["ghost", "#8571BE"],
  ["dragon", "#7383B9"],
  ["dark", "#6F6E78"],
  ["steel", "#4C91B2"],
  ["fairy", "#EBA8C3"],
]);

const typeColors = new Map([
  ["normal", "#9DA0AA"],
  ["fire", "#FD7D24"],
  ["water", "#4A90DA"],
  ["electric", "#EED535"],
  ["grass", "#62B957"],
  ["ice", "#61CEC0"],
  ["fighting", "#D04164"],
  ["poison", "#A552CC"],
  ["ground", "#DD7748"],
  ["flying", "#748FC9"],
  ["psychic", "#EA5D60"],
  ["bug", "#8CB230"],
  ["rock", "#BAAB82"],
  ["ghost", "#556AAE"],
  ["dragon", "#0F6AC0"],
  ["dark", "#58575F"],
  ["steel", "#417D9A"],
  ["fairy", "#ED6EC7"],
]);

const IconSizes = {
  SMALL: 24,
  MEDIUM: 32,
  LARGE: 64,
  XXL: 100,
}

const COLORS = {
  dark: "#FFFFFF",
  cadet: "#586f7c",
  ice: "#B8DBD9",
  ghost: "#f4f4f9",
  carbon: "#444444",
  darkCarbon: "#E8E8E8",
  white: "white",
  platinum: "#E5E4E2",
};

const getBackgroundTypeColor = (typeString) => {
  const type = typeString;
  return type ? typeColorsBackground.get(type) : theme.palette.white;
};

const getTypeColor = (typeString) => {
  const type = typeString;
  return type ? typeColors.get(type) : theme.palette.white;
};

class Theme {
  palette;
  typePalette;
  typePaletteBackground;
  dimensions;
  iconSize;
  getBackgroundTypeColor;
  getTypeColor;

  constructor() {
    this.palette = { ...COLORS };
    this.dimensions = { height: SCREEN_HEIGHT, width: SCREEN_WIDTH };
    this.iconSize = { ...IconSizes };
    this.typePaletteBackground = typeColorsBackground;
    this.typePalette = typeColors;
    this.getBackgroundTypeColor = getBackgroundTypeColor;
    this.getTypeColor = getTypeColor;
  }

  spacing(multiplier) {
    return BASE_UNIT * multiplier;
  }
}

export const theme = new Theme();
