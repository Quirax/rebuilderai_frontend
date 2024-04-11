import { useTranslation } from 'react-i18next'
import { Logo } from './Components/Logo'
import './Header.css'
import { GetStartedButton } from './Components/GetStartedButton'
import { createDropdownMenuItem, DropdownMenu } from './Components/DropdownMenu'

const HEADER_MODE = Object.freeze({
    OnTop: 'on_top',
    Other: 'other',
})

/**
 * A header node
 * @param {HEADER_MODE} mode a flag defines the view of the node
 */
function Header({ mode }) {
    const { t } = useTranslation()

    const languageList = [createDropdownMenuItem('KOR', false, 'ko'), createDropdownMenuItem('ENG', true, 'en')]

    let rightElements = <span>{t('header.ifYouWant')}</span>

    if (mode === HEADER_MODE.OnTop) {
        rightElements = (
            <>
                <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                <DropdownMenu items={languageList} />
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
