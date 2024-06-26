import { useTranslation } from 'react-i18next'

/**
 * A button that shows get started button
 */
export function GetStartedButton() {
    const { t } = useTranslation()

    const onClick = () => {
        window.location.href = 'https://vrin.co.kr/register'
    }

    return (
        <button
            className='getStarted'
            onClick={onClick}>
            <span>{t('getStarted')}</span>
        </button>
    )
}
