// ref: https://velog.io/@favorcho/i18next-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A7%80%EC%9B%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import ko from './ko.json'

i18n.use(initReactI18next) // Transfer i18n to react-i18next
    .init({
        debug: true, // TODO: reset by comment out
        fallbackLng: 'ko', // Set default language to korean
        resources: {
            en: { translation: en },
            ko: { translation: ko },
        },
        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        react: {
            useSuspense: true,
        },
    })

export default i18n
