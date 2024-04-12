import { useCallback, useEffect, useState } from 'react'
import { Glyph, GLYPH_TYPE } from './Glyphs'

export const createDropdownMenuItem = (label, isDefault, value) => ({ label, isDefault, value })

export function DropdownMenu({ items, onSelect }) {
    const [selected, setSelected] = useState(-1)
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        console.log(selected)
        if (selected > -1) return

        let defaultSelected = 0

        for (let i in items) if (items[i].isDefault) defaultSelected = parseInt(i)

        setSelected(defaultSelected)
    }, [items, selected])

    const onClickCurrent = useCallback(() => {
        setDropdown((d) => !d)
    }, [])

    const onClickItem = (value, idx) => {
        console.log(idx)
        setSelected(idx)
        onSelect(value)
        setDropdown(false)
    }

    return (
        <div className='dropdown'>
            <div className='current'>
                <span onClick={onClickCurrent}>{selected > -1 ? items[selected].label : ''}</span>
                <Glyph type={dropdown ? GLYPH_TYPE.ArrowUp : GLYPH_TYPE.ArrowDown} />
            </div>
            <dialog
                className='menu'
                open={dropdown}>
                {items.map((item, idx) => {
                    let classNames = ['item']
                    let check = <></>

                    if (idx === selected) {
                        classNames.push('selected')
                        check = <span>V</span> // TODO: change to material-icons check
                    }

                    return (
                        <div
                            className={classNames.join(' ')}
                            key={idx}
                            onClick={() => {
                                onClickItem(item.value, idx)
                            }}>
                            <span>{item.label}</span>
                            {check}
                        </div>
                    )
                })}
            </dialog>
        </div>
    )
}
