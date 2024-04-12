/**
 * A section node describes contents defined as children, with a background image
 * @param src an URL or path of the background image
 */
const ImagedSection = ({ children, src }) => (
    <section className='imaged'>
        <div className='background'>
            <img
                src={src}
                alt=''
            />
        </div>
        <div className='contents'>{children}</div>
    </section>
)

export { ImagedSection }
