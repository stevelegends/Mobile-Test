import React from "react"

// modules
import {BottomTabScreenProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// screens
import * as Screen from "app/screens"

// navigators
import {AppStackScreenProps} from "app/navigators/AppNavigator";

// theme
import {spacing} from "app/theme";

export type TabParamList = {
    task1: undefined;
    task2: undefined;
};
export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<TabParamList, T>;

const BottomTab = createBottomTabNavigator<TabParamList>();

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
            <BottomTab.Screen options={{title: "Task 1"}} name="task1" component={Screen.Task1} />
            <BottomTab.Screen options={{title: "Task 2"}} name="task2" component={Screen.Task2} />
        </BottomTab.Navigator>
    )
}
