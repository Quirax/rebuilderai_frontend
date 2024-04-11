import { useTranslation } from 'react-i18next'
import { Logo } from './Components/Logo'
import './Header.css'

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

    let rightElements = <span>{t('header.ifYouWant')}</span>

    if (mode === HEADER_MODE.OnTop) {
        rightElements = (
            <>
                <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                <select>
                    <option
                        value='ko'
                        selected>
                        KOR
                    </option>
                    <option value='en'>ENG</option>
                </select>
                <a href='https://vrin.co.kr/login'>{t('header.login')}</a>
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
                <button>{t('getStarted')}</button> {/* https://vrin.co.kr/register 로 연결 */}
            </div>
        </header>
    )
}

export default Header
export { HEADER_MODE }
