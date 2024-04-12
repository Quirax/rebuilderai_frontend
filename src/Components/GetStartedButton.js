import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * A button that shows get started button
 */
export function GetStartedButton() {
    const { t } = useTranslation()

    const onClick = useCallback(() => {
        window.location.href = 'https://vrin.co.kr/register'
    }, [])

    return <button onClick={onClick}>{t('getStarted')}</button>
}
