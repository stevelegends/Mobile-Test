import React, {useCallback, useEffect, useRef} from "react"

// modules
import {FlatList, ListRenderItem, Pressable, SafeAreaView, Text, View} from "react-native";

// styles
import {styles} from "./styles"

// navigators
import {TabScreenProps} from "app/navigators";

// components
import {NoteForm, NoteFormRef} from "./NoteForm";
import {NoteItemList} from "./NoteItemList";
import {HeaderStatus} from "./HeaderStatus";

// theme
import {style} from "app/theme";

// store
import {Note} from "app/store/notes/type";
import {useAppSelector} from "app/store/store";

export const Task2 = ({navigation}: TabScreenProps<"task2">) => {
    const notes = useAppSelector(state => state.notesReducer?.notes)

    const noteFormRef = useRef<NoteFormRef>(null);

    const renderItem: ListRenderItem<Note> = useCallback(({item}) => {
        return <NoteItemList item={item} />
    }, [])

    useEffect(() => {
        function handleOpenAddNoteOnPress() {
            noteFormRef.current?.open()
        }
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={style.buttonSize} onPress={handleOpenAddNoteOnPress}>
                    <Text>➕</Text>
                </Pressable>
            ),
            headerLeft: () => (
                <HeaderStatus />
            )
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item, index) => item._id || index.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={style.separatorGrey} />}
            />
            <NoteForm ref={noteFormRef} />
        </SafeAreaView >
    )
}

