import { useTranslation } from 'react-i18next'
import './App.css'
import Header, { HEADER_MODE } from './Header'
import ImagedSection from './Components/ImagedSection'
import { lf2br } from './util'

function App() {
    const { t } = useTranslation()

    return (
        <>
            <Header mode={HEADER_MODE.OnTop} />
            <Header mode={HEADER_MODE.Other} />
            <ImagedSection src=''>
                {/* TODO: add source */}
                <h1>{lf2br(t('section[0].head'))}</h1>
                <p>{lf2br(t('section[0].body'))}</p>
                <button>{t('getStarted')}</button>
            </ImagedSection>
        </>
    )
}

export default App
