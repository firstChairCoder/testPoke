import { Image } from "react-native";
import { formatNumber } from "../../global/helper";

export const PokemonImage = ({ id, style }) => {
  const BASE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  const EXTENSION = ".png";

  return (
    <Image
      source={{
        uri: BASE_URL + formatNumber(id) + EXTENSION,
      }}
      style={style}
    />
  );
};
