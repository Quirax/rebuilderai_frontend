function VideoedSection({ children, src, indicators }) {
    return (
        <section className='videoed'>
            <div class='background'>
                <video
                    src={src}
                    alt=''
                />
            </div>
            <div class='contents'>
                <ul class='left'>
                    {indicators.map((indicator) => (
                        <li key={indicator}>{indicator}</li>
                    ))}
                </ul>
                <div class='right'>{children}</div>
            </div>
        </section>
    )
}

export default VideoedSection
