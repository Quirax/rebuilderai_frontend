import { useTranslation } from 'react-i18next'
import './App.css'
import Header, { HEADER_MODE } from './Header'
import ImagedSection from './Components/ImagedSection'
import { lf2br } from './util'
import VideoedSection from './Components/VideoedSection'

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
            <VideoedSection
                src=''
                indicators={['first', 'null', 'null']}>
                {/* TODO: add source */}
                <h1>{lf2br(t('section[1].head'))}</h1>
                <p>{lf2br(t('section[1].body'))}</p>
            </VideoedSection>
            <VideoedSection
                src=''
                indicators={['null', 'second', 'null']}>
                {/* TODO: add source */}
                <h1>{lf2br(t('section[2].head'))}</h1>
                <p>{lf2br(t('section[2].body'))}</p>
            </VideoedSection>
            <VideoedSection
                src=''
                indicators={['null', 'null', 'third']}>
                {/* TODO: add source */}
                <h1>{lf2br(t('section[3].head'))}</h1>
                <p>{lf2br(t('section[3].body'))}</p>
            </VideoedSection>
        </>
    )
}

export default App
