#!/bin/bash

# Wait for ffmpeg to be available
echo "Aguardando ffmpeg..."
while ! command -v ffmpeg &> /dev/null; do
    sleep 5
done

echo "ffmpeg encontrado! Comprimindo vídeo..."

# Compress the video to under 50MB
ffmpeg -i public/videos/bg-original.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset medium \
  -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
  -movflags +faststart \
  -an \
  public/videos/bg.mp4

echo "Compressão concluída!"
ls -lh public/videos/bg.mp4
