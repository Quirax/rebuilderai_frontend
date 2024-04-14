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
import { ImageSwapper } from './Components/ImageSwapper'

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
                mouseoverSection: [
                    {
                        mouseleave: 'https://vrin.co.kr/assets/home_C-1_mob_ko-ca6a7c93.png',
                        mouseover: {
                            text: lf2br(t('section[5].mouseover[0].mouseover_shrink')),
                            container: 'https://vrin.co.kr/assets/home_C-3_mob-3b1fdee5.png',
                            video: 'https://vrin.co.kr/assets/home_2_PC-f15f3e50.mp4',
                        },
                    },
                    'https://vrin.co.kr/assets/home_C-2_mob_ko-5056a825.png',
                ],
                slideshowSection: {
                    wrapper: 'https://vrin.co.kr/assets/home_D-1_Laptop-1ca25de5.png',
                    dataset: [
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[0]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_1_laptop-4f6630bd.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[1]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_2_laptop-f7569b5f.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[2]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_3_laptop-4ad7dc49.png',
                            ''
                        ),
                    ],
                },
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
                mouseoverSection: [
                    {
                        mouseleave: 'https://vrin.co.kr/assets/home_C-1_tablet_ko-3258fbfe.png',
                        mouseover: {
                            text: lf2br(t('section[5].mouseover[0].mouseover')),
                            container: 'https://vrin.co.kr/assets/home_C-3_tablet-e3467c23.png',
                            video: 'https://vrin.co.kr/assets/home_2_PC-f15f3e50.mp4',
                        },
                    },
                    'https://vrin.co.kr/assets/home_C-2_tablet_ko-c30c77d3.png',
                ],
                slideshowSection: {
                    wrapper: 'https://vrin.co.kr/assets/home_D-1_Laptop-1ca25de5.png',
                    dataset: [
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[0]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_1_laptop-4f6630bd.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[1]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_2_laptop-f7569b5f.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[2]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_3_laptop-4ad7dc49.png',
                            ''
                        ),
                    ],
                },
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
                mouseoverSection: [
                    {
                        mouseleave: 'https://vrin.co.kr/assets/home_C-1_laptop_ko-0f813a7a.png',
                        mouseover: {
                            text: lf2br(t('section[5].mouseover[0].mouseover')),
                            container: 'https://vrin.co.kr/assets/home_C-3_PC-52386fbc.png',
                            video: 'https://vrin.co.kr/assets/home_2_PC-f15f3e50.mp4',
                        },
                    },
                    'https://vrin.co.kr/assets/home_C-2_laptop_ko-d5aa4736.png',
                ],
                slideshowSection: {
                    wrapper: 'https://vrin.co.kr/assets/home_D-1_Laptop-1ca25de5.png',
                    dataset: [
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[0]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_1_laptop-4f6630bd.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[1]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_2_laptop-f7569b5f.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[2]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_3_laptop-4ad7dc49.png',
                            ''
                        ),
                    ],
                },
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
                mouseoverSection: [
                    {
                        mouseleave: 'https://vrin.co.kr/assets/home_C-1_PC_ko-093e56a1.png',
                        mouseover: {
                            text: lf2br(t('section[5].mouseover[0].mouseover')),
                            container: 'https://vrin.co.kr/assets/home_C-3_PC-52386fbc.png',
                            video: 'https://vrin.co.kr/assets/home_2_PC-f15f3e50.mp4',
                        },
                    },
                    'https://vrin.co.kr/assets/home_C-2_PC_ko-5168634f.png',
                ],
                slideshowSection: {
                    wrapper: 'https://vrin.co.kr/assets/home_D-1_PC-0b362984.png',
                    dataset: [
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[0]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_1_PC-6a00eedf.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[1]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_2_PC-774a2af5.png',
                            ''
                        ),
                        createSlideshowDatasetItem(
                            <>
                                {t('section[6].slideshow[2]')}
                                <img
                                    alt=''
                                    src='https://vrin.co.kr/assets/arrow_outward-dd85a638.svg'
                                />
                            </>,
                            'https://vrin.co.kr/assets/carousel_thumbnail_3_PC-471f312e.png',
                            ''
                        ),
                    ],
                },
            },
        }),
        [t]
    )
    const [media, setMedia] = useState(getValueAccordingToMedia(mediaPair))

    const bagImages = [
        'https://vrin.co.kr/assets/home_bag_1-016e6c5c.png',
        'https://vrin.co.kr/assets/home_bag_2-ec220ca9.png',
        'https://vrin.co.kr/assets/home_bag_3-58b0e494.png',
        'https://vrin.co.kr/assets/home_bag_4-b1fee5e3.png',
        'https://vrin.co.kr/assets/home_bag_5-b77afbdd.png',
        'https://vrin.co.kr/assets/home_bag_6-78494c33.png',
        'https://vrin.co.kr/assets/home_bag_7-dc30c20d.png',
        'https://vrin.co.kr/assets/home_bag_8-38aed96a.png',
        'https://vrin.co.kr/assets/home_bag_9-5e42e9c2.png',
        'https://vrin.co.kr/assets/home_bag_10-3c83f6b4.png',
    ]

    const imagedSection = useRef()

    useEffect(() => {
        function onScrollImageSection() {
            if (!imagedSection.current) return

            if (window.scrollY >= imagedSection.current.clientTop + imagedSection.current.offsetHeight)
                setHeaderMode(HEADER_MODE.Other)
            else setHeaderMode(HEADER_MODE.OnTop)
        }

        function onResize() {
            if (window.matchMedia('(max-width: 600px)').matches) setHeaderMode(HEADER_MODE.Mobile)
            else onScrollImageSection()

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
            <ImagedSection
                src={media.imagedSection}
                referer={imagedSection}>
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
                            style={{ opacity: 0 }}
                            animatedStyle={{
                                opacity: 0,
                                animation: `1s ease-in-out ${idx * 0.5}s 1 normal forwards running easeinout`,
                            }}
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
                <div className='mouseover-section'>
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>
                                    {lf2br(t('section[5].mouseover[0].mouseleave'))}
                                    <Glyph type={GLYPH_TYPE.CircleArrow} />
                                </div>
                                <img
                                    id='section-5-1-mouseleave'
                                    src={media.mouseoverSection[0].mouseleave}
                                    alt=''
                                />
                            </>
                        }
                        mouseover={
                            <>
                                <div>
                                    {media.mouseoverSection[0].mouseover.text}
                                    <Glyph type={GLYPH_TYPE.CircleClose} />
                                </div>
                                <img
                                    id='section-5-1-mouseover-container'
                                    src={media.mouseoverSection[0].mouseover.container}
                                    alt=''
                                />
                                <video
                                    id='section-5-1-mouseover-video'
                                    src={media.mouseoverSection[0].mouseover.video}
                                    alt=''
                                    loop
                                    playsInline
                                    autoPlay
                                    muted
                                />
                            </>
                        }
                    />
                    <MouseoverView
                        mouseleave={
                            <>
                                <div>
                                    {lf2br(t('section[5].mouseover[1].mouseleave'))}
                                    <Glyph type={GLYPH_TYPE.CircleArrow} />
                                </div>
                                <img
                                    id='section-5-2-mouseleave'
                                    src={media.mouseoverSection[1]}
                                    alt=''
                                />
                            </>
                        }
                        mouseover={
                            <>
                                <div>
                                    {lf2br(t('section[5].mouseover[1].mouseover'))}
                                    <Glyph type={GLYPH_TYPE.CircleClose} />
                                </div>
                                <ImageSwapper imageList={bagImages} />
                            </>
                        }
                    />
                </div>
            </DescribingSection>
            <DescribingSection>
                <h2>{t('section[6].subtitle')}</h2>
                <h1>{lf2br(t('section[6].title'))}</h1>
                <p>{lf2br(t('section[6].body'))}</p>
                <img
                    className='slideshow-wrapper'
                    src={media.slideshowSection.wrapper}
                    alt=''
                />
                <SlideshowView dataset={media.slideshowSection.dataset} />
            </DescribingSection>
            <section className='start_now'>
                <p>{t('section[7]')}</p>
                <button>{t('getStarted')}</button>
            </section>
        </>
    )
}

export default App
