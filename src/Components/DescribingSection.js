/**
 * A simple section node describing contents defined as children
 */
const DescribingSection = ({ children }) => (
    <section className='describing'>
        <div className='contents'>{children}</div>
    </section>
)

export { DescribingSection }
