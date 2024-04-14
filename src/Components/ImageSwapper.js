import { useEffect, useState } from 'react'
import './ImageSwapper.css'

/**
 * A node that swaps images in imageList
 * @param imageList A list of URL or path of images
 */
export function ImageSwapper({ imageList }) {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            setSelected((t) => (t === imageList.length - 1 ? 0 : t + 1))
        }, 1000)

        return () => clearInterval(timer)
    }, [imageList])

    return imageList.map((src, idx) => (
        <img
            className='swapped-image'
            key={idx}
            src={src}
            alt=''
            style={idx === selected ? { opacity: 1 } : { opacity: 0 }}
        />
    ))
}
