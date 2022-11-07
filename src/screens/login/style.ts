import { hp, wp } from './../../shared/responsive-dimension/index';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BLACK,
  },
  bodyContainer: {
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  sliderTextContainer: {
    marginTop: 40,
  },
  sliderText: {
    fontSize: hp(30),
    textAlign: 'center',
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  onboardingIcon: {
    width: wp(250),
    height: hp(300),
  },
  dot: {
    width: 18,
    height: 5,
    backgroundColor: Colors.GREY_PRIMARY,
    marginLeft: 10,
    bottom: 200,
    borderRadius: 5,
  },
  active: {
    height: 5,
    width: 18,
    bottom: 200,
    marginLeft: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  footerContainer: {
    position: 'absolute',
    bottom: hp(60),
    marginHorizontal: wp(24),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  loginButtonStyle: {
    width: wp(160),
  },
  registerButtonStyle: {
    width: wp(160),
    marginLeft: wp(10),
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
});
