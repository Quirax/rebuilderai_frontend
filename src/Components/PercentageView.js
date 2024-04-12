/**
 * A container to show percentage differences. Use `PercentageView`s as children.
 */
const PercentageContainer = ({ children }) => <div className='percentage'>{children}</div>

/**
 * A view to show percentage difference.
 * @param children difference value (e.g. decrease of proportion)
 * @param description a string or node describes the difference
 * @param base a string or node describes the base used to measure the difference
 */
const PercentageView = ({ children, description, base }) => (
    <div>
        <div>{children}</div>
        <div>{description}</div>
        <div>{base}</div>
    </div>
)

export { PercentageContainer, PercentageView }
