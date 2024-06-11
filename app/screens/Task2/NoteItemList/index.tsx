import React from "react";

// model
import {Pressable, Text, TextStyle, View} from "react-native";

// store
import {deleteNoteAction, updateCompleteNoteAction} from "app/store/notes/saga";
import {Note} from "app/store/notes/type";
import {useAppDispatch} from "app/store/store";

// styles
import {styles} from "./styles"

interface Props {
    item: Note
}

export const NoteItemList = ({item}: Props) => {
    const dispatch = useAppDispatch()
    const labelStyle: TextStyle = {textDecorationLine: item.isComplete ? "line-through" : "none"}
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => item._id && dispatch(updateCompleteNoteAction({_id: item._id}))}
            >
                <Text>{item.isComplete ? "✅" : "☑️"}</Text>
            </Pressable>
            <Pressable>
                <Text style={labelStyle} >{item.description}</Text>
            </Pressable>
            <Pressable
                onPress={() => item._id && dispatch(deleteNoteAction({_id: item._id}))}
            >
                <Text>{"🗑️"}</Text>
            </Pressable>
        </View>
    )
}

