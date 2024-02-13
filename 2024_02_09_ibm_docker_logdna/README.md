# IBM Logo Animation Commands
`ffmpeg -i \ 02VID-02_OUTRO_White_BG_01-2021\ \[1x1\]\ Keyboard\ SFX.mp4 -ss 00:00:07.25 -to 00:00:08.5 -c:v libx264 out.mp4`
`ffmpeg -i out.mp4 -filter:v "crop=720:290:730:810" out_cropped.mp4`
`ffmpeg -i out_cropped.mp4 -vf colorkey=white:0.3:0.5 out_cropped_transparent.mp4`
`ffmpeg -i out_cropped_transparent.mp4 -c:v libvpx-vp9 out_cropped_transparent.webm`
`ffmpeg -i out_cropped_transparent.webm -vf colorkey=white:1.0:0.0 out_cropped_transparent_again.webm`

