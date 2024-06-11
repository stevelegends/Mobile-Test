import React from "react";

// components
import {Text} from "app/components";
import {useAppSelector} from "app/store/store";

export const HeaderStatus = () => {
    const isSyncing = useAppSelector(state => state.notesReducer?.isSyncing)
    return <Text>{isSyncing ? " Syncing..." : ""}</Text>
}