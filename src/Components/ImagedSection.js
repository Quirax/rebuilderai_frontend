/**
 * A section node describes contents defined as children, with a background image
 * @param src an URL or path of the background image
 */
const ImagedSection = ({ children, src }) => (
    <section className='imaged'>
        <div class='background'>
            <img
                src={src}
                alt=''
            />
        </div>
        <div class='contents'>{children}</div>
    </section>
)

export { ImagedSection }
