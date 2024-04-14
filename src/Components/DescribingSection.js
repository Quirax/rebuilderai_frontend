import './DescribingSection.css'

/**
 * A simple section node describing contents defined as children
 */
export const DescribingSection = ({ children }) => (
    <section className='describing'>
        <div className='contents'>{children}</div>
    </section>
)
