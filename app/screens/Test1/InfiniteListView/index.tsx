import React, {useCallback} from "react"

// modules
import {FlatList, ListRenderItem, View} from "react-native";

// components
import {ItemListView} from "../ItemListView";
import {FooterListView} from "../FooterListView";

// theme
import {style} from "app/theme";

// store
import {useAppDispatch, useAppSelector} from "app/store/store";
import {setLoadMoreInfiniteDataAction} from "app/store/infinite/saga";

export const InfiniteListView = () => {
    const dispatch = useAppDispatch()
    const infiniteData = useAppSelector(state => state.infiniteReducer?.infiniteData)
    const isDataReady = infiniteData?.length > 0

    const handleOnEndReached = useCallback(() => {
        if (isDataReady) {
            __DEV__ && console.log('handleOnEndReached')
            dispatch(setLoadMoreInfiniteDataAction())
        }
    }, [isDataReady]) as () => void

    const renderItemSeparatorComponent = useCallback(() => {
        return <View style={style.separatorGrey} />
    }, [])

    const renderListFooterComponent = useCallback(() => {
        return <FooterListView />
    }, [])

    const renderItem: ListRenderItem<number> = useCallback(({item}) => {
        return <ItemListView position={item} />
    }, [])

    return (
        <FlatList
            data={infiniteData}
            keyExtractor={item => item.toString()}
            initialNumToRender={50}
            windowSize={50}
            onEndReachedThreshold={10}
            onEndReached={handleOnEndReached}
            renderItem={renderItem}
            ItemSeparatorComponent={renderItemSeparatorComponent}
            ListFooterComponent={renderListFooterComponent}
        />
    )
}