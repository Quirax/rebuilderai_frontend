function lf2br(str) {
    let elems = str.split('\n').flatMap((token) => [token, <br />])
    elems.pop()
    return elems
}

export { lf2br }
