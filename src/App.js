import { useTranslation } from 'react-i18next'
import Header, { HEADER_MODE } from './Header'
import { ImagedSection } from './Components/ImagedSection'
import { getValueAccordingToMedia, lf2br } from './util'
import { VideoedSection } from './Components/VideoedSection'
import { DescribingSection } from './Components/DescribingSection'
import { PercentageContainer, PercentageView } from './Components/PercentageView'
import { MouseoverView } from './Components/MouseoverView'
import { createSlideshowDatasetItem, SlideshowView } from './Components/SlideshowView'
import { useEffect, useMemo, useRef, useState } from 'react'
import { GetStartedButton } from './Components/GetStartedButton'
import { Glyph, GLYPH_TYPE } from './Components/Glyphs'

import './App.css'

function App() {
    const { t } = useTranslation()

    const [headerMode, setHeaderMode] = useState(
        window.matchMedia('(max-width: 600px)').matches ? HEADER_MODE.Mobile : HEADER_MODE.OnTop
    )

    const mediaPair = useMemo(
        () => ({
            '(max-width: 600px)': {
                imagedSection: 'https://vrin.co.kr/assets/home_A-1_mob-742b0262.png',
                videoedSection: [
                    'https://vrin.co.kr/assets/home_content_1_mob-af3e7c76.mp4',
                    'https://vrin.co.kr/assets/home_content_2_mob-2a21d63f.mp4',
                    'https://vrin.co.kr/assets/home_content_3_mob-a49c026f.mp4',
                ],
                percentageSection: [
                    {
                        description: lf2br(t('section[4].percent[1].description')),
                        base: t('section[4].percent[1].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[1].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[0].description')),
                        base: t('section[4].percent[0].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[0].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                ],
            },
            '(max-width: 768px)': {
                imagedSection: 'https://vrin.co.kr/assets/home_A-1_tablet-00240f72.png',
                videoedSection: [
                    'https://vrin.co.kr/assets/home_content_1_tablet-372d0a93.mp4',
                    'https://vrin.co.kr/assets/home_content_2_tablet-8832672b.mp4',
                    'https://vrin.co.kr/assets/home_content_3_tablet-db992b6c.mp4',
                ],
                percentageSection: [
                    {
                        description: lf2br(t('section[4].percent[0].description')),
                        base: t('section[4].percent[0].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[0].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[1].description')),
                        base: t('section[4].percent[1].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[1].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[2].description')),
                        base: t('section[4].percent[2].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[2].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                ],
            },
            '(max-width: 1024px)': {
                imagedSection: 'https://vrin.co.kr/assets/home_A-1_laptop-f5526bf8.png',
                videoedSection: [
                    'https://vrin.co.kr/assets/home_content_1_PC-3cb3a75d.mp4',
                    'https://vrin.co.kr/assets/home_content_2_PC-c0a5dbbe.mp4',
                    'https://vrin.co.kr/assets/home_content_3_PC-706ebb88.mp4',
                ],
                percentageSection: [
                    {
                        description: lf2br(t('section[4].percent[0].description')),
                        base: t('section[4].percent[0].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[0].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[1].description')),
                        base: t('section[4].percent[1].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[1].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[2].description')),
                        base: t('section[4].percent[2].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[2].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                ],
            },
            '(min-width: 1025px)': {
                imagedSection: 'https://vrin.co.kr/assets/home_A-1_PC-24bf28eb.png',
                videoedSection: [
                    'https://vrin.co.kr/assets/home_content_1_PC-3cb3a75d.mp4',
                    'https://vrin.co.kr/assets/home_content_2_PC-c0a5dbbe.mp4',
                    'https://vrin.co.kr/assets/home_content_3_PC-706ebb88.mp4',
                ],
                percentageSection: [
                    {
                        description: lf2br(t('section[4].percent[0].description')),
                        base: t('section[4].percent[0].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[0].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[1].description')),
                        base: t('section[4].percent[1].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[1].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                    {
                        description: lf2br(t('section[4].percent[2].description')),
                        base: t('section[4].percent[2].base'),
                        difference: (
                            <>
                                <span>{t('section[4].percent[2].value')}</span>
                                <Glyph type={GLYPH_TYPE.DirectionDown} />
                            </>
                        ),
                    },
                ],
            },
        }),
        [t]
    )
    const [media, setMedia] = useState(getValueAccordingToMedia(mediaPair))

    const slideshowDataset = [
        createSlideshowDatasetItem(t('section[6].slideshow[0]'), '', ''),
        createSlideshowDatasetItem(t('section[6].slideshow[1]'), '', ''),
        createSlideshowDatasetItem(t('section[6].slideshow[2]'), '', ''),
    ]

    const imagedSection = useRef()

    useEffect(() => {
        function onScroll() {
            if (!imagedSection.current) return

            if (window.scrollY >= imagedSection.current.offsetTop + imagedSection.current.offsetHeight)
                setHeaderMode(HEADER_MODE.Other)
            else setHeaderMode(HEADER_MODE.OnTop)
        }

        function onResize() {
            if (window.matchMedia('(max-width: 600px)').matches) setHeaderMode(HEADER_MODE.Mobile)
            else onScroll()

            setMedia(getValueAccordingToMedia(mediaPair))
        }

        window.addEventListener('resize', onResize)
        document.addEventListener('scroll', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
            document.removeEventListener('scroll', onResize)
        }
    }, [imagedSection, mediaPair])

    return (
        <>
            <Header mode={headerMode} />
            {/* <Header mode={HEADER_MODE.Other} /> */}
            <ImagedSection
                src={media.imagedSection}
                referer={imagedSection}>
                {/* TODO: add source */}
                <h1>{lf2br(t('section[0].head'))}</h1>
                <p>{lf2br(t('section[0].body'))}</p>
                <GetStartedButton />
            </ImagedSection>
            <VideoedSection
                src={media.videoedSection[0]}
                indicators={[
                    <Glyph
                        type={GLYPH_TYPE.Camera}
                        style={{ fill: '#5d6cfa' }}
                    />,
                    <Glyph type={GLYPH_TYPE.Dot} />,
                    <Glyph type={GLYPH_TYPE.Dot} />,
                ]}>
                <h1>{lf2br(t('section[1].head'))}</h1>
                <p>{lf2br(t('section[1].body'))}</p>
            </VideoedSection>
            <VideoedSection
                src={media.videoedSection[1]}
                indicators={[
                    <Glyph type={GLYPH_TYPE.Dot} />,
                    <Glyph
                        type={GLYPH_TYPE.BoxInBox}
                        style={{ fill: '#5d6cfa' }}
                    />,
                    <Glyph type={GLYPH_TYPE.Dot} />,
                ]}>
                <h1>{lf2br(t('section[2].head'))}</h1>
                <p>{lf2br(t('section[2].body'))}</p>
            </VideoedSection>
            <VideoedSection
                src={media.videoedSection[2]}
                indicators={[
                    <Glyph type={GLYPH_TYPE.Dot} />,
                    <Glyph type={GLYPH_TYPE.Dot} />,
                    <Glyph
                        type={GLYPH_TYPE.Twinkle}
                        style={{ fill: '#5d6cfa' }}
                    />,
                ]}>
                <h1>{lf2br(t('section[3].head'))}</h1>
                <p>{lf2br(t('section[3].body'))}</p>
            </VideoedSection>
            <DescribingSection>
                <h2>{t('section[4].subtitle')}</h2>
                <h1>{lf2br(t('section[4].title'))}</h1>
                <p>{lf2br(t('section[4].body'))}</p>
                <PercentageContainer>
                    {media.percentageSection.map((viewData, idx) => (
                        <PercentageView
                            key={idx}
                            description={viewData.description}
                            base={viewData.base}>
                            {viewData.difference}
                        </PercentageView>
                    ))}
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
