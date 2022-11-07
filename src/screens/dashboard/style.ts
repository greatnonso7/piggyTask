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
    fontFamily: fontFamily.DMSansMedium,
  },
  infoText: {
    color: Colors.APP_BLACK,
    fontSize: hp(18),
    fontWeight: '600',
    fontFamily: fontFamily.DMSansMedium,
  },
  formInputContainer: {
    marginTop: hp(15),
  },
  contentContainerStyle: {
    marginLeft: wp(24),
    paddingRight: wp(50),
  },
  categoryContainer: {
    height: hp(80),
    borderWidth: 1,
    paddingHorizontal: wp(15),
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
  categoryItemContainer: {
    marginTop: hp(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(24),
  },
  categoryItemHeaderText: {
    fontFamily: fontFamily.DMSansMedium,
    fontSize: hp(16),
    color: Colors.APP_BLACK,
  },
  seeAllText: {
    color: Colors.GREY_300,
    fontFamily: fontFamily.DMSansRegular,
    fontSize: hp(14),
  },
  mealItemContentContainerStyle: {
    marginTop: hp(20),
    marginLeft: wp(24),
    paddingRight: wp(50),
  },
  mealItemContainer: {
    width: wp(220),
    marginRight: wp(25),
    borderRadius: hp(12),
    paddingVertical: hp(15),
    paddingHorizontal: wp(10),
    backgroundColor: Colors.GREY_400,
  },
  mealItemTitle: {
    fontFamily: fontFamily.DMSansMedium,
    textAlign: 'center',
    paddingBottom: hp(4),
    color: Colors.APP_BLACK,
  },
  amountText: {
    fontFamily: fontFamily.DMSansMedium,
    textAlign: 'center',
    paddingBottom: hp(10),
    color: Colors.LIGHT_GREEN,
    fontWeight: '700',
  },
  normalText: {
    color: Colors.APP_BLACK,
  },
  mealImage: {
    width: wp(120),
    height: hp(120),
    borderRadius: 100,
    alignSelf: 'center',
  },
  caloriesText: {
    fontFamily: fontFamily.DMSansMedium,
    color: Colors.APP_BLACK,
    fontSize: hp(14),
  },
  timeContainer: {
    paddingTop: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: Colors.GREY_500,
    paddingLeft: wp(4),
    fontFamily: fontFamily.DMSansRegular,
    fontSize: hp(12),
  },
  addToCartContainer: {
    width: wp(40),
    height: hp(40),
    borderRadius: hp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  mealItemFooterContainer: {
    marginTop: hp(20),
    marginBottom: hp(10),
    paddingHorizontal: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartItemContainer: {
    position: 'absolute',
    bottom: hp(30),
    backgroundColor: Colors.LIGHT_GREEN,
    height: hp(80),
    paddingHorizontal: wp(20),
    paddingVertical: hp(15),
    alignSelf: 'center',
    width: wp(327),
    borderRadius: wp(20),
  },
  cartInfoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cartItemText: {
    color: Colors.WHITE,
    fontFamily: fontFamily.DMSansMedium,
    fontSize: hp(16),
  },
  cartCountText: {
    color: Colors.WHITE,
    fontFamily: fontFamily.DMSansMedium,
    fontSize: hp(14),
    paddingTop: hp(7),
  },
});
