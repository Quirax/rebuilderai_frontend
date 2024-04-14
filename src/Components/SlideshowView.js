import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Glyph, GLYPH_TYPE } from './Glyphs'
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * An utility function that creates slideshow dataset item.
 * It'd be used to create the dataset and feed it to `SlideshowView` node.
 * @param description a description of the item shown as label.
 * @param image_src an URL or path of background image describes the item.
 * @param video_src an URL or path of video describes the item.
 * @param link_url an URL that will open when click the item
 */
export const createSlideshowDatasetItem = (description, image_src, video_src, link_url) => ({
    description,
    image_src,
    video_src,
    link_url,
})

/**
 * A view to show items of dataset as slideshow.
 * You can create the dataset with `createSlideshowDatasetItem` function.
 * @param dataset a dataset to show.
 */
export function SlideshowView({ dataset }) {
    const slideshowRef = useRef()
    const [isMobile, setIsMobile] = useState(!!window.matchMedia('(max-width: 768px)').matches)

    const onClick = useCallback(
        (idx) => {
            console.log(isMobile)
            if (isMobile) {
                window.open(dataset[idx].link_url, '_blank')
            }
        },
        [isMobile, dataset]
    )

    useEffect(() => {
        function onResize() {
            setIsMobile(!!window.matchMedia('(max-width: 768px)').matches)
        }

        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <>
            {/* Image Slideshow */}
            <div className='slideshow-image-handle'>
                <Glyph
                    type={GLYPH_TYPE.CircleLeft}
                    onClick={slideshowRef.current?.slickPrev}
                />
                <Glyph
                    type={GLYPH_TYPE.CircleRight}
                    onClick={slideshowRef.current?.slickNext}
                />
            </div>
            <Slider
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                slidesPerRow={1}
                infinite={true}
                arrows={false}
                className='slideshow-image'
                ref={slideshowRef}>
                {dataset.map((item, idx) => (
                    <div
                        key={idx}
                        className='item'
                        onClick={() => {
                            onClick(idx)
                        }}>
                        <img
                            src={item.image_src}
                            alt={item.description}
                        />
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>

            {/* Video Slideshow */}
            <ul className='slideshow-video'>
                {dataset.map((item, idx) => (
                    <li key={idx}>
                        <video src={item.video_src} />
                    </li>
                ))}
            </ul>
        </>
    )
}
