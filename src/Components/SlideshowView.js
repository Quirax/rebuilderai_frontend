const createSlideshowDatasetItem = (description, image_src, video_src) => ({ description, image_src, video_src })

function SlideshowView({ dataset }) {
    return (
        <div class='slideshow_container'>
            {/* Image Slideshow */}
            <ul class='slideshow_image'>
                {dataset.map((item) => (
                    <li key={item.description}>
                        <img
                            src={item.image_src}
                            alt={item.description}
                        />
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>

            {/* Video Slideshow */}
            <ul class='slideshow_video'>
                {dataset.map((item) => (
                    <li key={item.description}>
                        <video src={item.video_src} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { createSlideshowDatasetItem, SlideshowView }
