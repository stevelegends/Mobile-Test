import React from "react"

// modules
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// screens
import * as Screen from "app/screens"

// navigators
import {AppStackScreenProps} from "app/navigators/AppNavigator";
import {spacing} from "app/theme";

const BottomTab = createBottomTabNavigator();

interface Props extends AppStackScreenProps<"Tab"> {}

export const Tab = (_props: Props) => {
    return (
        <BottomTab.Navigator
            screenOptions={() => ({
                tabBarIcon: () => null,
                tabBarLabelStyle: {
                    fontSize: spacing.md
                }
            })}
        >
            <BottomTab.Screen options={{title: "Test 1"}} name="test1" component={Screen.Test1} />
            <BottomTab.Screen options={{title: "Test 2"}} name="test2" component={Screen.Test2} />
        </BottomTab.Navigator>
    )
}
