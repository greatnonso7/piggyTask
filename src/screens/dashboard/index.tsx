import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../shared/search-bar';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CategoryProps {
  strCategory: string;
  strCategoryThumb: string;
}

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState<string>();
  const {
    Food: { fetchFoodCategories },
  } = useDispatch();

  useEffect(() => {
    fetchFoodCategories();
  }, [fetchFoodCategories]);

  const categories: never[] = useSelector(
    (state: RootState) => state.Food.categories,
  );

  console.log(categories);

  const selectActiveCategory = async (category: CategoryProps) => {
    setActiveCategory(category.strCategory);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.nameText}>Hi, Chinonso</Text>
          <Text style={styles.infoText}>Hungry now? 🔥</Text>
        </View>

        <View style={styles.formInputContainer}>
          <SearchBar />
        </View>
      </View>
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
    </SafeAreaView>
  );
};

export default Dashboard;
