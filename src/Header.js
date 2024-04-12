import { useTranslation, withTranslation } from 'react-i18next'
import { Logo } from './Components/Logo'
import './Header.css'
import { GetStartedButton } from './Components/GetStartedButton'
import { createDropdownMenuItem, DropdownMenu } from './Components/DropdownMenu'
import { useCallback } from 'react'

const HEADER_MODE = Object.freeze({
    OnTop: 'on_top',
    Other: 'other',
})

const LanguageSelector = withTranslation()(({ i18n, items }) => {
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
        />
    )
})

/**
 * A header node
 * @param {HEADER_MODE} mode a flag defines the view of the node
 */
function Header({ mode }) {
    const { t } = useTranslation()

    const languageList = [createDropdownMenuItem('KOR', true, 'ko'), createDropdownMenuItem('ENG', false, 'en')]

    let rightElements = <span>{t('header.ifYouWant')}</span>

    if (mode === HEADER_MODE.OnTop) {
        rightElements = (
            <>
                <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                <LanguageSelector items={languageList} />
                <a
                    className='login'
                    href='https://vrin.co.kr/login'>
                    {t('header.login')}
                </a>
            </>
        )
    }

    return (
        <header className={mode}>
            <div className='left'>
                <Logo />
            </div>
            <div className='right'>
                {rightElements}
                <GetStartedButton />
            </div>
        </header>
    )
}

export default Header
export { HEADER_MODE }
