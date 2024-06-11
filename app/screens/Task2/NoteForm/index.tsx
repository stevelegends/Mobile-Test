import React, {forwardRef, useImperativeHandle, useState} from "react";

// modules
import {Dimensions, Keyboard, View} from "react-native";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

// components
import {Button, TextField} from "app/components";

// styles
import {styles} from "./styles";

// store
import {useAppDispatch} from "app/store/store";

// theme
import {style} from "app/theme";

// i18n
import {translate} from "app/i18n";
import {addNoteAction} from "app/store/notes/saga";

export interface NoteFormRef {
    open: () => void
}

interface Props {

}

const screenHeight = Dimensions.get("screen").height

export const NoteForm = forwardRef<NoteFormRef, Props>(function NoteForm(_props, _ref){
    const dispatch = useAppDispatch()

    const xValue = useSharedValue<0 | 1>(0)

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: interpolate(xValue.value, [0, 1] ,  [-screenHeight, 0])
            }]
        }
    }, [])

    const onOpen = () => {
        xValue.value = withTiming(1)
    }

    const onClose = () => {
        xValue.value = withTiming(0)
    }

    const onDismiss = () => {
        onClose()
        setTitle("")
        setDescription("")
        Keyboard.dismiss()
    }

    const handleCancelOnPress = () => {
        onDismiss()
    }

    const handleAddPress = () => {
        if (!title && title.trim() === "") {
            return alert(translate("alert.titleIsRequired"))
        }
        if (!description && description.trim() === "") {
            return alert(translate("alert.descriptionIsRequired"))
        }
        dispatch(addNoteAction({
            title,
            description,
        }))
        onDismiss()
    }

    useImperativeHandle(
        _ref,
        () => {
            return {
                open: onOpen
            }
        },
        [],
    )

    return (
        <Animated.View style={[styles.container, containerStyle]}>
            <TextField
                label="Enter new note"
                value={title}
                onChangeText={setTitle}
            />
            <TextField
                label="description"
                value={description}
                onChangeText={setDescription}
            />
            <View style={style.row}>
                <Button style={styles.button} preset="reversed" onPress={handleCancelOnPress} tx="common.cancel" />
                <View style={style.spaceSM} />
                <Button style={styles.button} onPress={handleAddPress} tx="common.add" />
            </View>
        </Animated.View>
    )
})

