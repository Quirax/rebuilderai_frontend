export const GLYPH_TYPE = Object.freeze({
    ArrowUp: 'arrow-up',
    ArrowDown: 'arrow-down',
})

export function Glyph({ type }) {
    switch (type) {
        case GLYPH_TYPE.ArrowUp:
            return (
                <svg
                    class='glyph'
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    data-testid='KeyboardArrowUpIcon'>
                    <path d='M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z'></path>
                </svg>
            )
        case GLYPH_TYPE.ArrowDown:
            return (
                <svg
                    class='glyph'
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    data-testid='KeyboardArrowDownIcon'>
                    <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
                </svg>
            )
        default:
            return <></>
    }
}
