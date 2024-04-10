function PercentageContainer({ children }) {
    return <div class='percentage'>{children}</div>
}

function PercentageView({ children, description, base }) {
    return (
        <div>
            <div>{children}</div>
            <div>{description}</div>
            <div>{base}</div>
        </div>
    )
}

export { PercentageContainer, PercentageView }
