import React, {Fragment} from 'react';

// modules
import {View} from "react-native";

// theme
import {style} from "app/theme";

// components
import {Indicator} from "app/components/atom";
import {Text} from "app/components";

// store
import {useAppSelector} from "app/store/store";

export const FooterListView = () => {
    const isLoading = useAppSelector(state => state.infiniteReducer?.isLoadMore)
    return (
        <View style={style.listFooter}>
            {
                isLoading ? (
                    <Fragment>
                        <Indicator/>
                        <Text text=" " />
                        <Text tx="common.loading" />
                    </Fragment>
                ) : (
                    <Text tx="common.done"/>
                )
            }
        </View>
    )
}