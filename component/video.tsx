import { YouTubeEmbed } from '@next/third-parties/google'

export function Video() {
    return (
        <div className="flex justify-center items-center p-4 w-full">
  <YouTubeEmbed 
    videoid="YCeITR2-q0k" 
    height={400} 
    width={720} 
    params="controls=0" 
  />
</div>

    //     <video width="1200" height="600" controls preload="none" className="mx-auto">
    //         <source src="https://www.youtube.com/watch?v=YCeITR2-q0k" type="video/mp4" />
    //         <track
    //             src="/path/to/captions.vtt"
    //             kind="subtitles"
    //             srcLang="en"
    //             label="English"
    //         />
    //         Your browser does not support the video tag.
    //     </video>
     )
}