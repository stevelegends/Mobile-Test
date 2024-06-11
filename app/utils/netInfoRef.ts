interface NetInfo {
    isConnected?: boolean | null
}

function createRef() {
    let current: NetInfo = {}

    const ref = {
        get current() {
            return current
        },
        set current(value) {
            current = value
        },
    }
    return ref
}

export const netInfoRef = createRef()
