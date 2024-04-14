import { useEffect, useRef, useState } from 'react'
import './PercentageView.css'

/**
 * A container to show percentage differences. Use `PercentageView`s as children.
 * @param referer a reference of the node
 */
export const PercentageContainer = ({ children, referer, ...props }) => (
    <div
        className='percentage'
        ref={referer}
        {...props}>
        {children}
    </div>
)

/**
 * A view to show percentage difference.
 * @param children difference value (e.g. decrease of proportion)
 * @param description a string or node describes the difference
 * @param base a string or node describes the base used to measure the difference
 * @param style a default style
 * @param animatedStyle a style when view is shown
 */
export function PercentageView({ children, description, base, style, animatedStyle, ...props }) {
    const ref = useRef()

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        function onScroll() {
            if (!ref.current) return
            if (ref.current.getBoundingClientRect().top < document.documentElement.clientHeight) setAnimate(true)
        }

        document.addEventListener('scroll', onScroll)

        onScroll()

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div
            ref={ref}
            className='item'
            style={animate ? animatedStyle : style}
            {...props}>
            <div className='difference'>{children}</div>
            <div className='description'>{description}</div>
            <div className='base'>{base}</div>
        </div>
    )
}
