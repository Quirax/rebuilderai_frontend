import { useTranslation } from 'react-i18next'

const HEADER_MODE = Object.freeze({
    OnTop: 'on_top',
    Other: 'other',
})

function Header({ mode }) {
    const { t } = useTranslation()

    let rightElements = <span>{t('header.ifYouWant')}</span>

    if (mode === HEADER_MODE.OnTop) {
        rightElements = (
            <>
                <a href='https://vrin.co.kr/pricing'>{t('header.pricing')}</a>
                <span>ENG</span> {/* 언어 선택 기능 추가 */}
                <a href='https://vrin.co.kr/login'>{t('header.login')}</a>
            </>
        )
    }

    return (
        <header className={mode}>
            <div className='left'>
                <span>VRIN</span> {/* 이미지 로고로 변경 */}
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
