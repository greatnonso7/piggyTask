import { ArrowLeft2, Heart } from 'iconsax-react-native';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { deviceWidth, hp, wp } from '../responsive-dimension';

interface HeaderProps {
  hasBackButton: boolean;
  onPressLeftIcon: () => void;
  hasRightIcon: boolean;
}

const Header = ({
  hasBackButton,
  onPressLeftIcon,
  hasRightIcon,
}: HeaderProps) => {
  const headerLeft = () => {
    if (hasBackButton) {
      return (
        <TouchableOpacity
          onPress={onPressLeftIcon}
          style={[styles.leftIconContainer]}>
          <ArrowLeft2 size="30" color={Colors.WHITE} />
        </TouchableOpacity>
      );
    }
  };
  const headerRight = () => {
    if (hasRightIcon) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.headerRightContainer}>
          <Heart size="30" color={Colors.WHITE} />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={[styles.headerContainer]}>
      <View style={[styles.navBar, { backgroundColor: Colors.LIGHT_GREEN }]}>
        {headerLeft()}
        {headerRight()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.LIGHT_GREEN,
    width: deviceWidth,
    paddingVertical: hp(15),
  },
  navBar: {
    width: '100%',
    backgroundColor: Colors.LIGHT_GREEN,
    height: hp(44),
    paddingVertical: hp(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(24),
  },
  leftIconContainer: {
    position: 'absolute',
    left: wp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightContainer: {
    position: 'absolute',
    right: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
