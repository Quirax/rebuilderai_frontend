import './PercentageView.css'

/**
 * A container to show percentage differences. Use `PercentageView`s as children.
 */
export const PercentageContainer = ({ children }) => <div className='percentage'>{children}</div>

/**
 * A view to show percentage difference.
 * @param children difference value (e.g. decrease of proportion)
 * @param description a string or node describes the difference
 * @param base a string or node describes the base used to measure the difference
 */
export const PercentageView = ({ children, description, base, ...props }) => (
    <div
        className='item'
        {...props}>
        <div className='difference'>{children}</div>
        <div className='description'>{description}</div>
        <div className='base'>{base}</div>
    </div>
)
