import { StyleSheet } from 'react-native';
import { hp, wp } from '../../shared/responsive-dimension';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    marginTop: hp(20),
    marginHorizontal: wp(24),
  },
  nameText: {
    fontSize: hp(14),
    fontWeight: '500',
    color: Colors.LIGHT_GREY,
  },
  infoText: {
    color: Colors.APP_BLACK,
    fontSize: hp(18),
    fontWeight: '600',
  },
  formInputContainer: {
    marginTop: hp(15),
  },
});
