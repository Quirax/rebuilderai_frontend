import { useCallback, useEffect, useState } from 'react'

/**
 * A view that differs contents shown when mouse is leave out of the view and contents shown when mouse is over the view.
 * @param mouseleave the contents shown when mouse is leave out of the view
 * @param mouseover the contents shown when mouse is over the view
 */
export function MouseoverView({ mouseleave, mouseover }) {
    const [isMouseover, setIsMouseover] = useState(false)
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 600px)').matches)

    const onClick = useCallback(() => {
        if (!isMobile) return
        setIsMouseover((t) => !t)
    }, [isMobile])

    const onMouseover = useCallback(() => {
        if (isMobile) return
        setIsMouseover(true)
    }, [isMobile])

    const onMouseleave = useCallback(() => {
        if (isMobile) return
        setIsMouseover(false)
    }, [isMobile])

    useEffect(() => {
        function onResize() {
            if (window.matchMedia('(max-width: 600px)').matches) {
                if (!isMobile) setIsMouseover(false)

                setIsMobile(true)
            } else {
                if (isMobile) setIsMouseover(false)

                setIsMobile(false)
            }
        }

        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [isMobile])

    return (
        <div
            className='mouseover-view'
            onClick={onClick}
            onMouseOver={onMouseover}
            onMouseLeave={onMouseleave}>
            <div
                className='mouseleave'
                style={isMouseover ? { display: 'none' } : { display: 'inherit' }}>
                {mouseleave}
            </div>
            <div
                className='mouseover'
                style={isMouseover ? { display: 'inherit' } : { display: 'none' }}>
                {mouseover}
            </div>
        </div>
    )
}
