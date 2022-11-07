import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../shared/search-bar';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Clock, ShoppingBag } from 'iconsax-react-native';
import { Colors } from '../../styles/colors';

interface CategoryProps {
  strCategory: string;
  strCategoryThumb: string;
}
interface MealProps {
  strMeal: string;
  strMealThumb: string;
}

const Dashboard = () => {
  const {
    Food: {
      fetchFoodCategories,
      getFoodItemWithCategory,
      setActiveCategory,
      addItemToCart,
    },
  } = useDispatch();

  const { categories, meals, activeCategory, cart } = useSelector(
    (state: RootState) => state.Food,
  );

  useEffect(() => {
    fetchFoodCategories();
    getFoodItemWithCategory(activeCategory);
  }, [activeCategory, fetchFoodCategories, getFoodItemWithCategory]);

  const [searchData, setSearchData] = useState(meals || '');

  const selectActiveCategory = async (category: CategoryProps) => {
    await setActiveCategory(category.strCategory);
    await getFoodItemWithCategory(category.strCategory);
  };

  const filterMeals = async (text: string) => {
    const filteredMeals = meals?.filter((meal: MealProps) =>
      meal?.strMeal?.includes(text),
    );
    setSearchData(filteredMeals);
  };

  useEffect(() => {
    setSearchData(meals);
  }, [meals]);

  const addToCart = async (meal: MealProps) => {
    await addItemToCart(meal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.nameText}>Hi, Chinonso</Text>
          <Text style={styles.infoText}>Hungry now? 🔥</Text>
        </View>

        <View style={styles.formInputContainer}>
          <SearchBar onChangeText={(text: string) => filterMeals(text)} />
        </View>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categories
            ?.map((category: CategoryProps, index) => {
              return (
                <TouchableOpacity
                  onPress={() => selectActiveCategory(category)}
                  style={[
                    styles.categoryContainer,
                    activeCategory === category.strCategory
                      ? styles.activeCategory
                      : null,
                  ]}
                  key={index}>
                  <Image
                    source={{ uri: category.strCategoryThumb }}
                    resizeMode="contain"
                    style={styles.categoryIcon}
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      activeCategory === category.strCategory
                        ? styles.activeText
                        : null,
                    ]}>
                    {category.strCategory}
                  </Text>
                </TouchableOpacity>
              );
            })
            ?.slice(0, 6)}
        </ScrollView>
      </View>

      <View style={styles.categoryItemContainer}>
        <Text style={styles.categoryItemHeaderText}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView
          contentContainerStyle={styles.mealItemContentContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {searchData
            ?.map?.((meal: MealProps, index) => {
              const found = cart.filter(
                (item: MealProps) => item.strMeal === meal.strMeal,
              );
              return (
                <TouchableOpacity key={index} style={styles.mealItemContainer}>
                  <Text style={styles.mealItemTitle}>
                    {meal?.strMeal?.length > 20
                      ? `${meal?.strMeal?.slice(0, 20)}...`
                      : meal?.strMeal}
                  </Text>
                  <Text style={styles.amountText}>
                    $<Text style={styles.normalText}>9.99</Text>
                  </Text>
                  <Image
                    source={{ uri: meal?.strMealThumb }}
                    resizeMode="contain"
                    style={styles.mealImage}
                  />
                  <View style={styles.mealItemFooterContainer}>
                    <View>
                      <Text style={styles.caloriesText}>🔥 44 calories</Text>
                      <View style={styles.timeContainer}>
                        <Clock size="16" color={Colors.GREY_500} />
                        <Text style={styles.timeText}>20 min</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => addToCart(meal)}
                      activeOpacity={0.6}
                      style={[
                        styles.addToCartContainer,
                        {
                          backgroundColor: found?.includes(meal)
                            ? Colors.LIGHT_GREEN
                            : Colors.WHITE,
                        },
                      ]}>
                      <ShoppingBag
                        size="20"
                        color={
                          found?.includes(meal)
                            ? Colors.WHITE
                            : Colors.APP_BLACK
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })
            ?.slice(0, 6)}
        </ScrollView>
      </View>
      <View style={styles.cartItemContainer}>
        <View style={styles.cartInfoContainer}>
          <Text style={styles.cartItemText}>Cart</Text>
          <Text style={styles.cartCountText}>{cart?.length} items</Text>
        </View>
        <View>{/* {cart?.map} */}</View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
