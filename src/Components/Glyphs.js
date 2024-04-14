/**
 * Type of the glyph
 */
export const GLYPH_TYPE = Object.freeze({
    ArrowUp: 'arrow-up',
    ArrowDown: 'arrow-down',
    Hamburger: 'hamburger',
    Close: 'close',
    Dot: 'dot',
    Camera: 'camera',
    BoxInBox: 'box-in-box',
    Twinkle: 'twinkle',
    DirectionDown: 'direction-down',
    CircleArrow: 'circle-arrow',
    CircleClose: 'circle-close',
    CircleLeft: 'circle-left',
    CircleRight: 'circle-right',
})

/**
 * An utility function that returns glyph svg
 * @param type A `GLYPH_TYPE` value that indicates which glyph have to be shown.
 */
export function Glyph({ type, ...params }) {
    switch (type) {
        case GLYPH_TYPE.ArrowUp:
            return (
                <svg
                    className='glyph'
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    data-testid='KeyboardArrowUpIcon'
                    {...params}>
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
                    data-testid='KeyboardArrowDownIcon'
                    {...params}>
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
                    xmlns='http://www.w3.org/2000/svg'
                    {...params}>
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
                    {...params}
                    style={{
                        marginRight: -6,
                        ...params.style,
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
        case GLYPH_TYPE.Dot:
            return (
                <svg
                    className='glyph'
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'
                    {...params}>
                    <circle
                        cx='12.5'
                        cy='12'
                        r='3'></circle>
                </svg>
            )
        case GLYPH_TYPE.Camera:
            return (
                <svg
                    className='glyph'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'>
                    <path d='M12.5 17C13.6167 17 14.55 16.6208 15.3 15.8625C16.05 15.1042 16.425 14.175 16.425 13.075C16.425 11.9583 16.05 11.025 15.3 10.275C14.55 9.525 13.6167 9.15 12.5 9.15C11.3833 9.15 10.45 9.525 9.7 10.275C8.95 11.025 8.575 11.9583 8.575 13.075C8.575 14.175 8.95 15.1042 9.7 15.8625C10.45 16.6208 11.3833 17 12.5 17ZM12.5 15.875C11.7 15.875 11.0333 15.6083 10.5 15.075C9.96667 14.5417 9.7 13.875 9.7 13.075C9.7 12.2583 9.96667 11.5875 10.5 11.0625C11.0333 10.5375 11.7 10.275 12.5 10.275C13.3 10.275 13.9667 10.5375 14.5 11.0625C15.0333 11.5875 15.3 12.2583 15.3 13.075C15.3 13.875 15.0333 14.5417 14.5 15.075C13.9667 15.6083 13.3 15.875 12.5 15.875ZM4.45 20.5C4.05 20.5 3.70833 20.3583 3.425 20.075C3.14167 19.7917 3 19.45 3 19.05V7.075C3 6.69167 3.14167 6.35417 3.425 6.0625C3.70833 5.77083 4.05 5.625 4.45 5.625H7.875L9.7 3.5H15.3L17.125 5.625H20.55C20.9333 5.625 21.2708 5.77083 21.5625 6.0625C21.8542 6.35417 22 6.69167 22 7.075V19.05C22 19.45 21.8542 19.7917 21.5625 20.075C21.2708 20.3583 20.9333 20.5 20.55 20.5H4.45ZM20.55 19.375C20.65 19.375 20.7292 19.3458 20.7875 19.2875C20.8458 19.2292 20.875 19.15 20.875 19.05V7.075C20.875 6.99167 20.8458 6.91667 20.7875 6.85C20.7292 6.78333 20.65 6.75 20.55 6.75H16.6L14.75 4.625H10.25L8.4 6.75H4.45C4.35 6.75 4.27083 6.78333 4.2125 6.85C4.15417 6.91667 4.125 6.99167 4.125 7.075V19.05C4.125 19.15 4.15417 19.2292 4.2125 19.2875C4.27083 19.3458 4.35 19.375 4.45 19.375H20.55Z'></path>
                </svg>
            )
        case GLYPH_TYPE.BoxInBox:
            return (
                <svg
                    className='glyph'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'
                    width='33'
                    height='32'
                    viewBox='0 0 33 32'>
                    <path d='M5.9 30C4.96667 30 4.16667 29.6667 3.5 29C2.83333 28.3333 2.5 27.5333 2.5 26.6V24.2667H4V26.6C4 27.1333 4.18333 27.5833 4.55 27.95C4.91667 28.3167 5.36667 28.5 5.9 28.5H8.23333V30H5.9ZM24.7667 29.7667V28.2667H27.1C27.6333 28.2667 28.0833 28.0889 28.45 27.7333C28.8167 27.3778 29 26.9222 29 26.3667V24.0333H30.5V26.3667C30.5 27.3222 30.1667 28.1278 29.5 28.7833C28.8333 29.4389 28.0333 29.7667 27.1 29.7667H24.7667ZM15.7333 24.4333L16.5 24.9L17.2667 24.4333V16.5L24 12.6667V11.7333L23.2333 11.2667L16.5 15.1667L9.76667 11.2667L9 11.7333V12.6667L15.7333 16.5V24.4333ZM2.5 7.73333V5.4C2.5 4.46667 2.83333 3.66667 3.5 3C4.16667 2.33333 4.96667 2 5.9 2H8.23333V3.5H5.9C5.36667 3.5 4.91667 3.68333 4.55 4.05C4.18333 4.41667 4 4.86667 4 5.4V7.73333H2.5ZM29 7.73333V5.4C29 4.86667 28.8167 4.41667 28.45 4.05C28.0833 3.68333 27.6333 3.5 27.1 3.5H24.7667V2H27.1C28.0333 2 28.8333 2.33333 29.5 3C30.1667 3.66667 30.5 4.46667 30.5 5.4V7.73333H29ZM15.5 26.0667L8.4 21.9C8.11111 21.7444 7.88333 21.5167 7.71667 21.2167C7.55 20.9167 7.46667 20.6 7.46667 20.2667V11.9667C7.46667 11.6333 7.55 11.3167 7.71667 11.0167C7.88333 10.7167 8.11111 10.4778 8.4 10.3L15.5333 6.1C15.8222 5.94444 16.1444 5.86667 16.5 5.86667C16.8556 5.86667 17.1778 5.94444 17.4667 6.1L24.6 10.3C24.8889 10.4778 25.1167 10.7167 25.2833 11.0167C25.45 11.3167 25.5333 11.6333 25.5333 11.9667V20.2667C25.5333 20.6 25.45 20.9167 25.2833 21.2167C25.1167 21.5167 24.8778 21.7444 24.5667 21.9L17.4 26.0667C17.0889 26.2444 16.7667 26.3333 16.4333 26.3333C16.1 26.3333 15.7889 26.2444 15.5 26.0667V26.0667Z'></path>
                </svg>
            )
        case GLYPH_TYPE.Twinkle:
            return (
                <svg
                    className='glyph'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'>
                    <path d='M19.2251 7.9499L18.3001 5.7999L16.0501 4.7999L18.3001 3.8499L19.2251 1.7749L20.1501 3.8499L22.4001 4.7999L20.1501 5.7999L19.2251 7.9499ZM19.2251 22.1999L18.3001 20.1249L16.0501 19.1499L18.3001 18.1749L19.2251 15.9999L20.1501 18.1749L22.4001 19.1499L20.1501 20.1249L19.2251 22.1999ZM8.9001 18.1749L6.9251 13.9249L2.6001 11.9749L6.9251 10.0499L8.9001 5.8249L10.8751 10.0499L15.2001 11.9749L10.8751 13.9249L8.9001 18.1749ZM8.9001 15.3749L10.0251 13.0499L12.4001 11.9749L10.0251 10.9249L8.9001 8.5999L7.7751 10.9249L5.3751 11.9749L7.7751 13.0499L8.9001 15.3749Z'></path>
                </svg>
            )
        case GLYPH_TYPE.DirectionDown:
            return (
                <svg
                    className='glyph'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'
                    width='57'
                    height='56'
                    viewBox='0 0 57 56'>
                    <path d='M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z'></path>
                </svg>
            )
        case GLYPH_TYPE.CircleArrow:
            return (
                <svg
                    className='glyph'
                    {...params}
                    width='56'
                    height='56'
                    viewBox='0 0 56 56'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.2'>
                        <path d='M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z'></path>
                        <circle
                            cx='28'
                            cy='28'
                            r='27.3333'
                            fill='none'
                            strokeWidth='1.33333'></circle>
                    </g>
                </svg>
            )
        case GLYPH_TYPE.CircleClose:
            return (
                <svg
                    className='glyph'
                    {...params}
                    width='36'
                    height='35'
                    viewBox='0 0 36 35'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.2'>
                        <path
                            d='M25 11L11 25'
                            strokeWidth='1.3'></path>
                        <path
                            d='M11 11L25 25'
                            strokeWidth='1.3'></path>
                        <path
                            d='M35.5714 17.5C35.5714 26.917 27.7159 34.5714 18 34.5714C8.28411 34.5714 0.428571 26.917 0.428571 17.5C0.428571 8.08301 8.28411 0.428571 18 0.428571C27.7159 0.428571 35.5714 8.08301 35.5714 17.5Z'
                            strokeWidth='0.857143'
                            fill='none'></path>
                    </g>
                </svg>
            )
        case GLYPH_TYPE.CircleLeft:
            return (
                <svg
                    className='glyph'
                    width='36'
                    height='36'
                    viewBox='0 0 36 36'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle
                        opacity='0.8'
                        cx='18'
                        cy='18'
                        r='18'></circle>
                    <path
                        d='M20.7 11.7002L14.4 18.0002L20.7 24.3002'
                        fill='none'
                        strokeWidth='2'
                        strokeLinecap='round'></path>
                </svg>
            )
        case GLYPH_TYPE.CircleRight:
            return (
                <svg
                    className='glyph'
                    width='36'
                    height='36'
                    viewBox='0 0 36 36'
                    {...params}
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle
                        opacity='0.8'
                        cx='18'
                        cy='18'
                        r='18'
                        transform='matrix(-1 0 0 1 36 0)'></circle>
                    <path
                        d='M15.3 11.7002L21.6 18.0002L15.3 24.3002'
                        fill='none'
                        strokeWidth='2'
                        strokeLinecap='round'></path>
                </svg>
            )
        default:
            return <></>
    }
}
