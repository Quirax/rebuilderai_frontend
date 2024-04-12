/**
 * Type of the glyph
 */
export const GLYPH_TYPE = Object.freeze({
    ArrowUp: 'arrow-up',
    ArrowDown: 'arrow-down',
    Hamburger: 'hamburger',
    Close: 'close',
})

/**
 * An utility function that returns glyph svg
 * @param type A `GLYPH_TYPE` value that indicates which glyph have to be shown.
 */
export function Glyph({ type }) {
    switch (type) {
        case GLYPH_TYPE.ArrowUp:
            return (
                <svg
                    className='glyph'
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
                    className='glyph'
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    data-testid='KeyboardArrowDownIcon'>
                    <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
                </svg>
            )
        case GLYPH_TYPE.Hamburger:
            return (
                <svg
                    className='glyph'
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z'></path>
                </svg>
            )
        case GLYPH_TYPE.Close:
            return (
                <svg
                    className='glyph'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    style={{
                        marginRight: -6,
                    }}
                    xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0_2786_9881)'>
                        <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'></path>
                    </g>
                    <defs>
                        <clipPath id='clip0_2786_9881'>
                            <rect
                                width='24'
                                height='24'></rect>
                        </clipPath>
                    </defs>
                </svg>
            )
        default:
            return <></>
    }
}
