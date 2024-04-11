/**
 * A view that differs contents shown when mouse is leave out of the view and contents shown when mouse is over the view.
 * @param mouseleave the contents shown when mouse is leave out of the view
 * @param mouseover the contents shown when mouse is over the view
 */
const MouseoverView = ({ mouseleave, mouseover }) => (
    <>
        <div class='mouseleave'>{mouseleave}</div>
        <div class='mouseover'>{mouseover}</div>
    </>
)

export { MouseoverView }
