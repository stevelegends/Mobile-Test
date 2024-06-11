import {useEffect} from "react";

import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';

// utils
import {netInfoRef} from "app/utils/netInfoRef";

export const useNetInfo = (onChange: (isConnected: boolean | null) => void) => {
    useEffect(() => {
        let unsubscribe: NetInfoSubscription | null = null
        let currentState: boolean | null = null
        unsubscribe = NetInfo.addEventListener(state => {
            if (currentState !== state.isConnected) {
                currentState = state.isConnected
                netInfoRef.current.isConnected = currentState
                onChange(currentState)
            }
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);
}