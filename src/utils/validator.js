export default function validator({ type, props = {} }, path = type.name, inPage = false) {
    if (inPage && type.name == 'Page') {
        throw Error(`Nested Page is not allowed at: ${path}`)
    }

    // Array of children
    if (Array.isArray(props.children)) {
        return props.children.reduce((res, child, index) => (
            res && validator(child, `${path}[${index}]`, inPage || type.name === 'Page')
        ), true)
    }

    // Single child (an object)
    if (Object.isObject(props.children)) {
        return validator(props.children, `${path}[0]`, inPage || type.name === 'Page')
    }

    // No more children to process. A-OK
    return true
}