import { useTranslation } from 'react-i18next'
import './App.css'
import Header, { HEADER_MODE } from './Header'
import { ImagedSection } from './Components/ImagedSection'
import { lf2br } from './util'
import { VideoedSection } from './Components/VideoedSection'
import { DescribingSection } from './Components/DescribingSection'
import { PercentageContainer, PercentageView } from './Components/PercentageView'
import { MouseoverView } from './Components/MouseoverView'
import { createSlideshowDatasetItem, SlideshowView } from './Components/SlideshowView'

function App() {
    const { t } = useTranslation()

    const slideshowDataset = [
        createSlideshowDatasetItem(t('section[6].slideshow[0]'), '', ''),
        createSlideshowDatasetItem(t('section[6].slideshow[1]'), '', ''),
        createSlideshowDatasetItem(t('section[6].slideshow[2]'), '', ''),
    ]

    return (
        <>
            <Header mode={HEADER_MODE.OnTop} />
            {/* <Header mode={HEADER_MODE.Other} /> */}
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
                <h1>{lf2br(t('section[4].title'))}</h1>
                <p>{lf2br(t('section[4].body'))}</p>
                <PercentageContainer>
                    <PercentageView
                        description={lf2br(t('section[4].percent[0].description'))}
                        base={t('section[4].percent[0].base')}>
                        {t('section[4].percent[0].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                    <PercentageView
                        description={lf2br(t('section[4].percent[1].description'))}
                        base={t('section[4].percent[1].base')}>
                        {t('section[4].percent[1].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                    <PercentageView
                        description={lf2br(t('section[4].percent[2].description'))}
                        base={t('section[4].percent[2].base')}>
                        {t('section[4].percent[2].value')}↓ {/* TODO: convert to svg */}
                    </PercentageView>
                </PercentageContainer>
            </DescribingSection>
            <DescribingSection>
                <h2>{t('section[5].subtitle')}</h2>
                <h1>{lf2br(t('section[5].title'))}</h1>
                <div>
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>{lf2br(t('section[5].mouseover[0].mouseleave'))}</div>
                                <img
                                    src=''
                                    alt=''
                                />
                            </>
                        }
                        mouseover={
                            <>
                                <div>{lf2br(t('section[5].mouseover[0].mouseover'))}</div>
                                <img
                                    src=''
                                    alt=''
                                />
                            </>
                        }
                    />
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>{lf2br(t('section[5].mouseover[1].mouseleave'))}</div>
                                <img
                                    src=''
                                    alt=''
                                />
                            </>
                        }
                        mouseover={
                            <>
                                <div>{lf2br(t('section[5].mouseover[1].mouseover'))}</div>
                                <img
                                    src=''
                                    alt=''
                                />
                            </>
                        }
                    />
                </div>
            </DescribingSection>
            <DescribingSection>
                <h2>{t('section[6].subtitle')}</h2>
                <h1>{lf2br(t('section[6].title'))}</h1>
                <p>{lf2br(t('section[6].body'))}</p>
                <SlideshowView dataset={slideshowDataset} />
            </DescribingSection>
            <section className='start_now'>
                <p>{t('section[7]')}</p>
                <button>{t('getStarted')}</button>
            </section>
        </>
    )
}

export default App
