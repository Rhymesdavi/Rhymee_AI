import React, { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { onBoardingData } from "@/configs/constants";
import { scale, verticalScale } from "react-native-size-matters";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import CustomButton from "./CustomButton";

const OnBoardingScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    SegoeUI: require("../assets/fonts/Segoe-UI.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoardingData.length - 1;
  const scrollViewRef = useRef<ScrollView>(null);
  const swiperRef = useRef<Swiper>(null);

  return (
    <LinearGradient
      colors={["#250152", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#021bff] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoardingData.map((item: onBoardingDataType, index: number) => (
          <View key={index} style={styles.slide}>
            {item.image}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        className="w-10/12 mt-10"
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(root)/home")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </LinearGradient>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(50)
  },
  title: {
    color: "#fff",
    fontSize: scale(24),
    fontWeight: "500",
    fontFamily: "SegoeUI",
    textAlign: "center",
  },
  subtitle: {
    width: scale(290),
    marginHorizontal: "auto",
    paddingTop: verticalScale(10),
    color: "#9A9999",
    fontSize: scale(14),
    fontWeight: "400",
    fontFamily: "SegoeUI",
    textAlign: "center",
  },
});
