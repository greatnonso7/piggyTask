import React from 'react';
import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../styles/colors';
import { hp, wp } from '../responsive-dimension';

interface LongButtonProps {
  loading?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  isNotBottom?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  titleColor?: string;
}

const LongButton = ({
  isNotBottom,
  onPress,
  disabled,
  loading,
  buttonStyle,
  title,
  titleColor,
  titleStyle,
  backgroundColor,
  containerStyle,
}: LongButtonProps) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonStyle,
          buttonStyle,
          {
            backgroundColor: backgroundColor || Colors.PRIMARY,
          },
        ]}>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.WHITE} />
        ) : (
          <Text
            style={[
              styles.title,
              titleStyle,
              {
                color: titleColor || Colors.WHITE,
              },
            ]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: hp(16),
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    height: hp(60),
    width: wp(338),
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default LongButton;
