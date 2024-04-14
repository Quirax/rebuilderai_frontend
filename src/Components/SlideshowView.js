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
    const imageSlideshowRef = useRef()
    const videoSlideshowRef = useRef()
    const [isMobile, setIsMobile] = useState(!!window.matchMedia('(max-width: 768px)').matches)
    const [progress, setProgress] = useState(-100 + 100 / (dataset.length - 1))
    const [showVideo, setShowVideo] = useState(false)

    const onClick = (idx) => {
        console.log(isMobile)
        if (isMobile) {
            window.open(dataset[idx].link_url, '_blank')
        } else {
            videoSlideshowRef.current?.slickGoTo(idx, true)
            afterSlideVideo(idx)
            setShowVideo(true)
        }
    }

    const afterSlideVideo = (index) => {
        setProgress(-100 + (Math.min(index + 1, dataset.length - 1) * 100) / (dataset.length - 1))
    }

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
                    onClick={imageSlideshowRef.current?.slickPrev}
                />
                <Glyph
                    type={GLYPH_TYPE.CircleRight}
                    onClick={imageSlideshowRef.current?.slickNext}
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
                ref={imageSlideshowRef}>
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
            <div
                className='slideshow-video-container'
                style={{ animationName: showVideo && !isMobile ? 'showandfade' : 'hideandfade' }}>
                <div className='slideshow-video'>
                    <Slider
                        speed={500}
                        slidesToShow={2}
                        slidesToScroll={1}
                        slidesPerRow={1}
                        arrows={false}
                        infinite={false}
                        autoplay={true}
                        ref={videoSlideshowRef}
                        afterChange={afterSlideVideo}>
                        {dataset.map((item, idx) => (
                            <div
                                key={idx}
                                className='item'>
                                <video src={item.video_src} />
                            </div>
                        ))}
                    </Slider>
                    <div className='slideshow-video-status'>
                        <img
                            alt=''
                            src='https://vrin.co.kr/assets/modal_close-3dfdf935.svg'
                            onClick={() => {
                                setShowVideo(false)
                            }}
                        />
                        <div className='slideshow-video-progressbar'>
                            <span style={{ transform: `translateX(${progress}%)` }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
