import { useEffect, useRef, useState } from 'react'
import './VideoedSection.css'

/**
 * A section node describes contents defined as children, with a background video
 * @param src an URL or path of the background image
 * @param indicators an array of image sources to indicate current section
 */
export function VideoedSection({ children, src, indicators }) {
    const ref = useRef()

    function decideStyle() {
        if (!ref.current) return { position: 'absolute', top: 0, bottom: 'unset' }

        if (window.scrollY + document.documentElement.clientHeight > ref.current.offsetTop + ref.current.offsetHeight)
            return { position: 'absolute', top: 'unset', bottom: -2 }
        else if (window.scrollY >= ref.current.offsetTop) return { position: 'fixed', top: 0, bottom: 'unset' }
        else return { position: 'absolute', top: 0, bottom: 'unset' }
    }

    const [style, setStyle] = useState(decideStyle())

    useEffect(() => {
        function onScroll() {
            if (!ref.current) return

            setStyle(decideStyle())
        }

        document.addEventListener('scroll', onScroll)

        onScroll()

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [ref])

    return (
        <section
            className='videoed'
            ref={ref}>
            <div
                className='background'
                style={style}>
                <video
                    src={src}
                    alt=''
                    loop
                    playsInline
                    autoPlay
                    muted
                    width='100%'
                    height='100%'
                />
            </div>
            <div className='contents'>
                <div className='left'>
                    {indicators.map((indicator, key) => (
                        <div key={key}>{indicator}</div>
                    ))}
                </div>
                <div className='right'>{children}</div>
            </div>
        </section>
    )
}
