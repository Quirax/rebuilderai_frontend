/**
 * A section node describes contents defined as children, with a background video
 * @param src an URL or path of the background image
 * @param indicators an array of image sources to indicate current section
 */
const VideoedSection = ({ children, src, indicators }) => (
    <section className='videoed'>
        <div className='background'>
            <video
                src={src}
                alt=''
            />
        </div>
        <div className='contents'>
            <ul className='left'>
                {indicators.map((indicator, idx) => (
                    <li key={idx}>{indicator}</li>
                ))}
            </ul>
            <div className='right'>{children}</div>
        </div>
    </section>
)

export { VideoedSection }
