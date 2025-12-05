
export function Video() {
    return (
        <video width="1200" height="600" controls preload="none" className="mx-auto">
            <source src="https://www.youtube.com/watch?v=YCeITR2-q0k" type="video/mp4" />
            <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            Your browser does not support the video tag.
        </video>
    )
}