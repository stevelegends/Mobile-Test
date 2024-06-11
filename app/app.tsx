/* eslint-disable import/first */
if (__DEV__) {
  // Load Reactotron in development only.
  // Note that you must be using metro's `inlineRequires` for this to work.
  // If you turn it off in metro.config.js, you'll have to manually import it.
  require("./devtools/ReactotronConfig.ts")
}

import "react-native-get-random-values"
import "./i18n"
import "./utils/ignoreWarnings"

// react
import React, {useEffect} from "react"

// modules
import { useFonts } from "expo-font"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Provider } from "react-redux";

// navigators
import { AppNavigator } from "./navigators"

// screens
import { ErrorBoundary } from "app/screens"

// theme
import {customFontsToLoad, style} from "./theme"

// store
import {store} from "app/store/store";

// config
import Config from "./config"

interface AppProps {
  hideSplashScreen: () => Promise<boolean>
}

/**
 * This is the root component of our app.
 * @param {AppProps} props - The props for the `App` component.
 * @returns {JSX.Element} The rendered `App` component.
 */
function App(props: AppProps) {
  const { hideSplashScreen } = props

  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad)

  useEffect(() => {
    setTimeout(hideSplashScreen, 500)
  }, []);

  if (!areFontsLoaded && !fontLoadError) {
    return null
  }

  return (
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ErrorBoundary catchErrors={Config.catchErrors}>
            <GestureHandlerRootView style={style.flex1}>
              <AppNavigator />
            </GestureHandlerRootView>
          </ErrorBoundary>
        </SafeAreaProvider>
      </Provider>
  )
}

export default App

