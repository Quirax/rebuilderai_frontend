/**
 * A section node describes contents defined as children, with a background image
 * @param src an URL or path of the background image
 * @param referer a reference of section node
 */
const ImagedSection = ({ children, src, referer }) => (
    <section
        className='imaged'
        style={{
            backgroundImage: `url(${src})`,
        }}
        ref={referer}>
        {/* <div className='background'>
            <img
                src={src}
                alt=''
            />
        </div> */}
        <div className='container'>
            <div className='contents'>{children}</div>
        </div>
    </section>
)

export { ImagedSection }
