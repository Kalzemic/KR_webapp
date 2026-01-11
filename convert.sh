#!/bin/bash

ffmpeg -i "$1" -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p -c:a aac -movflags +faststart "${1%.*}-h264.mp4"