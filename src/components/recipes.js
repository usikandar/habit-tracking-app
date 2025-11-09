import { View, Text, Pressable, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipe({ categories, foods }) {
  const navigation = useNavigation();

  const renderItem = ({ recipe, index }) => (
    <ArticleCard recipe={recipe} index={index} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View testID="recipesDisplay">
        <FlatList
          data={foods}
          numColumns={2}
          keyExtractor={(item) => item.idFood}
          renderItem={({ item, index }) => (
            <ArticleCard recipe={item} index={index} navigation={navigation} />
          )}
        />

      </View>
    </View>
  );
}

const ArticleCard = ({ recipe, index, navigation }) => {
  console.log({ "ArticleItem": recipe });
  return (
    <View
      style={[styles.cardContainer, { paddingLeft: 20, paddingRight: 15 }]} testID="articleDisplay"
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        onPress={() => navigation.navigate("RecipeDetail", { recipe })}
      >
        {/* Recipe Image */}
        <Image source={{ uri: recipe.recipeImage }} style={styles.image} />

        {/* Recipe Info */}
        <View style={styles.cardContent}>
          <Text style={styles.titleText} numberOfLines={1}>
            {recipe.recipeName}
          </Text>
          <Text style={styles.descText} numberOfLines={2}>
            Delicious {recipe.recipeName} recipe — tap to learn how to make it!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4), // mx-4 equivalent
    marginTop: hp(2),
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginBottom: hp(1.5),
  },
  loading: {
    marginTop: hp(20),
  },
  cardContainer: {
    justifyContent: "center",
    marginBottom: hp(1.5),
    flex: 1, // Allows cards to grow and fill space evenly
  },
  articleImage: {
    width: "100%",

    borderRadius: 35,
    backgroundColor: "rgba(0, 0, 0, 0.05)", // bg-black/5
  },
  articleText: {
    fontSize: hp(1.5),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  articleDescription: {
    fontSize: hp(1.2),
    color: "#6B7280", // gray-500
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  row: {
    justifyContent: "space-between", // Align columns evenly
  },


  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    width: wp(44), // Responsive width (~2 cards per row)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: hp(15),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 8,
  },
  titleText: {
    fontSize: hp(1.8),
    fontWeight: "600",
    color: "#333",
  },
  descText: {
    fontSize: hp(1.5),
    color: "#666",
    marginTop: 2,
  },
});
