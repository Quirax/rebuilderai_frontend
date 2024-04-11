import { useCallback, useEffect, useState } from 'react'
import { Glyph, GLYPH_TYPE } from './Glyphs'

export const createDropdownMenuItem = (label, isDefault, value) => ({ label, isDefault, value })

export function DropdownMenu({ items, onClick }) {
    const [selected, setSelected] = useState(-1)
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        if (selected > -1) return

        let defaultSelected = 0

        for (let i in items) if (items[i].isDefault) defaultSelected = i

        setSelected(defaultSelected)
    }, [items, selected])

    const onClickCurrent = useCallback(() => {
        setDropdown((d) => !d)
    }, [])

    return (
        <div className='dropdown'>
            <div className='current'>
                <span onClick={onClickCurrent}>{selected > -1 ? items[selected].label : ''}</span>
                <Glyph type={dropdown ? GLYPH_TYPE.ArrowUp : GLYPH_TYPE.ArrowDown} />
            </div>
        </div>
    )
}
