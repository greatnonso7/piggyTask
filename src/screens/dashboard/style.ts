import { StyleSheet } from 'react-native';
import { hp, wp } from '../../shared/responsive-dimension';
import { Colors } from '../../styles/colors';
import { fontFamily } from '../../styles/typography';

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
  contentContainerStyle: {
    marginLeft: wp(24),
    paddingRight: wp(50),
  },
  categoryContainer: {
    height: hp(55),
    borderWidth: 1,
    paddingHorizontal: wp(10),
    marginRight: wp(10),
    borderColor: Colors.GREY_200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    paddingVertical: hp(10),
  },
  activeCategory: {
    backgroundColor: Colors.LIGHT_GREEN,
  },
  categoryIcon: {
    width: wp(24),
    height: hp(24),
  },
  categoryText: {
    fontFamily: fontFamily.DMSansMedium,
    paddingBottom: hp(5),
    fontSize: hp(12),
    color: Colors.APP_BLACK,
  },
  activeText: {
    color: Colors.WHITE,
  },
});
