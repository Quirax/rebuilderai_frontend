import { useEffect, useState } from 'react'
import { Glyph, GLYPH_TYPE } from './Glyphs'
import './DropdownMenu.css'

/**
 * An utility function that creates structured object used in `DropdownMenu`
 * @param {string} label A label displayed
 * @param {boolean} isDefault A flag that indicates whether it have to be selected first
 * @param {any} value Any value that will be return when user has selected the item
 * @returns
 */
export const createDropdownMenuItem = (label, isDefault, value) => ({ label, isDefault, value })

/**
 * A node used to show dropdown menu
 * @param items An array of dropdown menu item. You can create the item with `createDropdownMenuItem`.
 * @param onSelect A callback that would be called when user selected the item. It must have one parameter of a value of the item.
 * @param simplified A flag that indicates whether it have to be shown as simplified format
 */
export function DropdownMenu({ items, onSelect, simplified }) {
    const [selected, setSelected] = useState(-1)
    const [dropdown, setDropdown] = useState(false)

    // Initialize selected state: if there is a default item, select the item; otherwise, select the first item.
    useEffect(() => {
        if (selected > -1) return

        let defaultSelected = 0

        for (let i in items) if (items[i].isDefault) defaultSelected = parseInt(i)

        setSelected(defaultSelected)
    }, [items, selected])

    // When the current label is clicked, toggle dropdown menu
    const onClickCurrent = () => {
        setDropdown((d) => !d)
    }

    // When the menu item is clicked, select the item, call onSelect callback with the value of the item, and close the menu.
    const onClickItem = (value, idx) => {
        setSelected(idx)
        onSelect(value)
        setDropdown(false)
    }

    const menuItems = items.flatMap((item, idx) => {
        let classNames = ['item']
        let check = <></>

        // If this item is selected, add class name 'selected', and add check symbol.
        if (idx === selected) {
            classNames.push('selected')
            if (!simplified) check = <span className='material-icons'>check</span>
        }

        let ret = [
            <div
                className={classNames.join(' ')}
                key={idx * 2}
                onClick={() => {
                    onClickItem(item.value, idx)
                }}>
                <span>{item.label}</span>
                {check}
            </div>,
        ]

        if (simplified)
            ret.push(
                <div
                    className='separator'
                    key={idx * 2 + 1}
                />
            )

        return ret
    })

    if (simplified) menuItems.pop()

    return (
        <div className='dropdown'>
            <div className='current'>
                <span onClick={onClickCurrent}>{selected > -1 ? items[selected].label : ''}</span>
                <Glyph type={dropdown ? GLYPH_TYPE.ArrowUp : GLYPH_TYPE.ArrowDown} />
            </div>
            <dialog
                className='menu'
                open={dropdown}>
                {menuItems}
            </dialog>
        </div>
    )
}
