const logger = {
    log(...msg) {
        // console.log(...msg)
    },
    group(groupName) {
        console.group(groupName)
    },
    groupEnd(groupName) {
        console.groupEnd(groupName)
    },
}

export default logger
