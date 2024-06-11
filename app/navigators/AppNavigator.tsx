import React from "react"

// modules
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native"
import { useColorScheme } from "react-native"

// screens
import { Tab } from 'app/navigators'

// utils
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

// config
import Config from "app/config"

// theme
import { colors } from "app/theme"

export type AppStackParamList = {
    Tab: undefined
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  return (
      <Stack.Navigator
          screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
          initialRouteName="Tab"
      >
        <Stack.Screen name="Tab" component={Tab} />
        {/** 🔥 Your screens go here */}
        {/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
      </Stack.Navigator>
  )
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = () => {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
      <NavigationContainer
          ref={navigationRef}
          theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <AppStack />
      </NavigationContainer>
  )
}
