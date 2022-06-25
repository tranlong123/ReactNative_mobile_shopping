const logger = {
    log(...msg) {
        // console.log(...msg)
    },
    group(groupName) {
        console.group(groupName)
    },
    groupEnd() {
        console.groupEnd()
    },
}

export default logger
