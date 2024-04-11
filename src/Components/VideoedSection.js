/**
 * A section node describes contents defined as children, with a background video
 * @param src an URL or path of the background image
 * @param indicators an array of image sources to indicate current section
 */
const VideoedSection = ({ children, src, indicators }) => (
    <section className='videoed'>
        <div class='background'>
            <video
                src={src}
                alt=''
            />
        </div>
        <div class='contents'>
            <ul class='left'>
                {indicators.map((indicator) => (
                    <li key={indicator}>{indicator}</li>
                ))}
            </ul>
            <div class='right'>{children}</div>
        </div>
    </section>
)

export { VideoedSection }
