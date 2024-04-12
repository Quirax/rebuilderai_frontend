/**
 * An utility function that creates slideshow dataset item.
 * It'd be used to create the dataset and feed it to `SlideshowView` node.
 * @param description a description of the item shown as label.
 * @param image_src an URL or path of background image describes the item.
 * @param video_src an URL or path of video describes the item.
 */
const createSlideshowDatasetItem = (description, image_src, video_src) => ({ description, image_src, video_src })

/**
 * A view to show items of dataset as slideshow.
 * You can create the dataset with `createSlideshowDatasetItem` function.
 * @param dataset a dataset to show.
 */
const SlideshowView = ({ dataset }) => (
    <div className='slideshow_container'>
        {/* Image Slideshow */}
        <ul className='slideshow_image'>
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
        <ul className='slideshow_video'>
            {dataset.map((item) => (
                <li key={item.description}>
                    <video src={item.video_src} />
                </li>
            ))}
        </ul>
    </div>
)

export { createSlideshowDatasetItem, SlideshowView }
