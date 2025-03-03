// import { useAuth } from '@clerk/clerk-expo'
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [isOnboarfing, setIsOnboarding] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {}
  }, [])

  return <Redirect href="/(root)/welcome" />
};

export default Home;
