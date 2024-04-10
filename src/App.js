import { useTranslation } from 'react-i18next'
import './App.css'
import Header, { HEADER_MODE } from './Header'
import ImagedSection from './Components/ImagedSection'
import { lf2br } from './util'
import VideoedSection from './Components/VideoedSection'
import DescribingSection from './Components/DescribingSection'
import { PercentageContainer, PercentageView } from './Components/PercentageView'
import MouseoverView from './Components/MouseoverView'

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
            <DescribingSection>
                <h2>{t('section[4].subtitle')}</h2>
                <h1>{t('section[4].title')}</h1>
                <p>{lf2br(t('section[4].body'))}</p>
                <PercentageContainer>
                    <PercentageView
                        description={t('section[4].percent[0].description')}
                        base={t('section[4].percent[0].base')}>
                        {t('section[4].percent[0].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                    <PercentageView
                        description={t('section[4].percent[1].description')}
                        base={t('section[4].percent[1].base')}>
                        {t('section[4].percent[1].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                    <PercentageView
                        description={t('section[4].percent[2].description')}
                        base={t('section[4].percent[2].base')}>
                        {t('section[4].percent[2].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                </PercentageContainer>
            </DescribingSection>
            <DescribingSection>
                <h2>{t('section[5].subtitle')}</h2>
                <h1>{t('section[5].title')}</h1>
                <div>
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>{lf2br(t('section[5].mouseover[0].mouseleave'))}</div>
                                <img src='' />
                            </>
                        }
                        mouseover={
                            <>
                                <div>{lf2br(t('section[5].mouseover[0].mouseover'))}</div>
                                <img src='' />
                            </>
                        }
                    />
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>{lf2br(t('section[5].mouseover[1].mouseleave'))}</div>
                                <img src='' />
                            </>
                        }
                        mouseover={
                            <>
                                <div>{lf2br(t('section[5].mouseover[1].mouseover'))}</div>
                                <img src='' />
                            </>
                        }
                    />
                </div>
            </DescribingSection>
        </>
    )
}

export default App
