import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../shared/search-bar';
import { styles } from './style';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const {
    Food: { fetchFoodCategories },
  } = useDispatch();

  useEffect(() => {
    fetchFoodCategories();
  }, [fetchFoodCategories]);

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
    </SafeAreaView>
  );
};

export default Dashboard;
