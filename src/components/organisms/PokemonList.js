import { FlatList } from "react-native";
import { Spacer } from "../atoms/Spacer";
import { PokemonPreview } from "../molecules/PokemonPreview";

export const PokemonList = ({
  pokemonIds,
  onPress,
  horizontal = false,
}) => {
  const renderItem = ({ item }) => {
    return (
      <>
        <PokemonPreview
          id={item}
          onPress={() => {
            if (onPress) {
              onPress(item);
            }
          }}
        />
      </>
    );
  };

  const renderItemSeparator = () => <Spacer.Column numberOfSpaces={1} />;

  const renderListFooter = () => <Spacer.Column numberOfSpaces={10} />;
  const renderListHeader = () => <Spacer.Column numberOfSpaces={10} />;

  const keyExtractor = (_, index) => `post-${index}`;

  return (
    <>
      {horizontal ? (
        <FlatList
          data={pokemonIds}
          renderItem={renderItem}
          numColumns={1}
          horizontal
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListFooterComponent={renderListFooter}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={renderListHeader}
        />
      ) : (
        <FlatList
          data={pokemonIds}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListFooterComponent={renderListFooter}
        />
      )}
    </>
  );
};
