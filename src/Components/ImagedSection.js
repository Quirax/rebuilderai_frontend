function ImagedSection({ children, src }) {
    return (
        <section className='imaged'>
            <div class='background'>
                <img
                    src={src}
                    alt=''
                />
            </div>
            <div class='contents'>{children}</div>
        </section>
    )
}

export default ImagedSection
