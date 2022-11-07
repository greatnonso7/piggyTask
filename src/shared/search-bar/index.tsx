import React, { forwardRef } from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../styles/colors';
import { hp, wp } from '../responsive-dimension';

interface SearchBarProps extends RNTextInputProps {
  value?: string;
  onFocus?: () => void;
  containerStyle?: ViewStyle;
}

const SearchBar = forwardRef<RNTextInput, SearchBarProps>(
  ({ value, containerStyle, ...props }, ref) => {
    return (
      <View style={styles.mainInputContainer}>
        <RNTextInput
          style={[styles.textInput, containerStyle]}
          placeholder={'Search...'}
          focusable={true}
          value={value}
          placeholderTextColor={Colors.LIGHT_GREY}
          {...{ ref }}
          {...props}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  textInput: {
    height: hp(60),
    width: wp(327),
    borderWidth: hp(1.5),
    borderRadius: hp(12),
    borderColor: Colors.GREY_100,
    paddingLeft: hp(12),
    fontSize: hp(16),
    color: Colors.APP_BLACK,
  },
  mainInputContainer: {
    marginBottom: hp(30),
  },
  eyeIcon: {
    width: wp(30),
    height: hp(30),
  },
  lock: {
    position: 'absolute',
    right: wp(30),
    bottom: hp(15),
  },
});

export default SearchBar;
