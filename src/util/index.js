/**
 * An utility function to convert every `\n` within `str` into `<br />` node.
 */
export function lf2br(str) {
    let elems = str.split('\n').flatMap((token, idx) => [token, <br key={idx} />])
    elems.pop()
    return elems
}

/**
 * An utility function that returns value when window matches the corresponding media query
 * @param {{ string: string }} mediaValuePair An object which pairs key(media query) and value
 */
export function getValueAccordingToMedia(mediaValuePair) {
    for (let key in mediaValuePair) {
        console.log(key, window.matchMedia(key).matches)
        if (window.matchMedia(key).matches) return mediaValuePair[key]
    }
}
