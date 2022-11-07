import { Clock, Star1 } from 'iconsax-react-native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../../shared/header';
import LongButton from '../../shared/long-button';
import { Colors } from '../../styles/colors';
import { styles } from './style';

const SingleMeal = ({ navigation: { goBack }, route }: any) => {
  const meal = route.params?.meal;
  const [selectedMeal, setSelectedMeal] = useState('');
  const [count, setCount] = useState(1);

  return (
    <SafeAreaView style={styles.singleMealContainer}>
      <Header hasBackButton hasRightIcon onPressLeftIcon={() => goBack()} />
      <Image
        source={{ uri: meal?.strMealThumb }}
        style={[styles.mealImage, styles.absolute]}
        resizeMode="contain"
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.mealText}>{meal?.strMeal}</Text>
        <View style={styles.mealInfoTextContainer}>
          <View style={styles.pizzaTextContainer}>
            <Text>🍕</Text>
          </View>
          <Text style={styles.pizzaText}>Pizza Italino</Text>
        </View>
        <View style={styles.moreInfoContainer}>
          <View style={styles.timeContainer}>
            <Clock size="24" color={Colors.APP_BLACK} />
            <Text style={[styles.timeText, styles.timeColor]}>15 min</Text>
          </View>
          <Text style={styles.fullStop}>.</Text>
          <View style={styles.timeContainer}>
            <Star1 size="24" color={Colors.YELLOW_200} variant="Bold" />
            <Text style={[styles.timeColor, styles.paddingText]}>
              4.8{' '}
              <Text style={[styles.timeText, styles.timeColor]}>
                (2.2k review)
              </Text>
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            data={options}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={styles.itemContentContainerStyle}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedMeal(item.title)}
                  key={index}
                  style={[
                    styles.itemContainer,
                    selectedMeal === item.title && styles.activeBorder,
                  ]}>
                  <View
                    style={[
                      styles.inactive,
                      selectedMeal === item.title && styles.active,
                    ]}
                  />
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <View>
            <Text style={styles.itemInfoText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>

            <View style={styles.cartAmountContainer}>
              <Text style={styles.amountCountText}>
                Total: <Text style={styles.colorText}>$</Text>
                {(12.99 * count).toFixed(2)}
              </Text>
              <View style={styles.addCartContainer}>
                <TouchableOpacity
                  onPress={() => (count === 1 ? null : setCount(count - 1))}
                  activeOpacity={0.6}
                  style={styles.additionContainer}>
                  <Text style={styles.additionText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setCount(count + 1)}
                  style={styles.additionContainer}>
                  <Text style={styles.additionText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <LongButton backgroundColor={Colors.LIGHT_GREEN} title="Next" />
    </SafeAreaView>
  );
};

const options = [
  {
    id: 1,
    title: 'Small 8"',
    price: '$9.99',
  },
  {
    id: 2,
    title: 'Medium 12"',
    price: '$9.99',
  },
  {
    id: 3,
    title: 'Large 18"',
    price: '$9.99',
  },
];

export default SingleMeal;
