import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Logo from '../../assets/svgs/Logo';
import LongButton from '../../shared/long-button';
import { Images } from '../../styles/images';
import { styles } from './style';

const Login = ({ navigation: { navigate } }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Logo />

        <Swiper
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.active} />}>
          <View style={styles.sliderContainer}>
            <Image
              source={Images.onboarding1}
              resizeMode="contain"
              style={styles.onboardingIcon}
            />
            <View style={styles.sliderTextContainer}>
              <Text style={styles.sliderText}>
                Build your savings with{'\n'}
                ease & discipline
              </Text>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              source={Images.onboarding2}
              resizeMode="contain"
              style={styles.onboardingIcon}
            />
            <View style={styles.sliderTextContainer}>
              <Text style={styles.sliderText}>
                Invest with ease in{'\n'}verified opportunities
              </Text>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              source={Images.onboarding3}
              resizeMode="contain"
              style={styles.onboardingIcon}
            />
            <View style={styles.sliderTextContainer}>
              <Text style={styles.sliderText}>
                Lock funds you don't{'\n'}want to touch
              </Text>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              source={Images.onboarding4}
              resizeMode="contain"
              style={styles.onboardingIcon}
            />
            <View style={styles.sliderTextContainer}>
              <Text style={styles.sliderText}>
                Setup multiple savings goals and reach them
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <LongButton
            title="Login"
            onPress={() => navigate('Dashboard')}
            isNotBottom
            buttonStyle={styles.loginButtonStyle}
          />
          <LongButton
            title="Register"
            isNotBottom
            backgroundColor="transparent"
            buttonStyle={styles.registerButtonStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
