import { useTranslation, withTranslation } from 'react-i18next'
import { Logo } from './Components/Logo'
import './Header.css'
import { GetStartedButton } from './Components/GetStartedButton'
import { createDropdownMenuItem, DropdownMenu } from './Components/DropdownMenu'
import { useCallback, useEffect, useState } from 'react'
import { Glyph, GLYPH_TYPE } from './Components/Glyphs'

const HEADER_MODE = Object.freeze({
    OnTop: 'on_top',
    Other: 'other',
    Mobile: 'mobile',
})

/**
 * A node used to change language selected by user
 */
const LanguageSelector = withTranslation()(({ i18n, items, simplified }) => {
    const onSelectLanguage = useCallback(
        (language) => {
            i18n.changeLanguage(language)
        },
        [i18n]
    )

    return (
        <DropdownMenu
            items={items}
            onSelect={onSelectLanguage}
            simplified={simplified}
        />
    )
})

/**
 * A header node
 * @param {HEADER_MODE} mode a flag defines the view of the node
 */
function Header({ i18n, mode }) {
    const { t } = useTranslation()

    const languageList = [
        createDropdownMenuItem('KOR', i18n.language === 'ko', 'ko'),
        createDropdownMenuItem('ENG', i18n.language === 'en', 'en'),
    ]

    const [openMenu, setOpenMenu] = useState(false)

    let leftElements = <Logo />

    let rightElements = (
        <>
            <span>{t('header.ifYouWant')}</span>
            <GetStartedButton />
        </>
    )

    switch (mode) {
        case HEADER_MODE.OnTop:
            rightElements = (
                <>
                    <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                    <LanguageSelector items={languageList} />
                    <a
                        className='login'
                        href='https://vrin.co.kr/login'>
                        {t('header.login')}
                    </a>
                    <GetStartedButton />
                </>
            )
            break
        case HEADER_MODE.Mobile:
            leftElements = (
                <>
                    <span
                        onClick={() => {
                            setOpenMenu((v) => !v)
                        }}>
                        <Glyph type={openMenu ? GLYPH_TYPE.Close : GLYPH_TYPE.Hamburger} />
                    </span>
                    <Logo />
                </>
            )
            rightElements = (
                <a
                    className='login'
                    href='https://vrin.co.kr/login'>
                    {t('header.login')}
                </a>
            )
            break
        default:
    }

    useEffect(() => {
        setOpenMenu(false)
    }, [mode])

    return (
        <header className={mode}>
            <div className='container'>
                <div className='left'>{leftElements}</div>
                <div className='right'>{rightElements}</div>
            </div>
            {openMenu && (
                <div className='menu'>
                    <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                    <LanguageSelector
                        items={languageList}
                        simplified
                    />
                </div>
            )}
        </header>
    )
}

export default withTranslation()(Header)
export { HEADER_MODE }
