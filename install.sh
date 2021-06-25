#!/usr/bin/bash

apt-get update
apt-get upgrade
pkg install nodejs -y
pkg install libwebp -y
pkg install ffmpeg -y
pkg install wget -y
pkg install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[*] Se han instalado todas las dependencias, ejecute el comando \"npm start\" para iniciar inmediatamente el script"
