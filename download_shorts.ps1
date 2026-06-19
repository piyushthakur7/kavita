$videos = @("Ienkw5Nr1uo", "pC73IuFW8Ro", "ceqk-SFpRZU", "amFLMjWx9hI", "mrAYlKoDm_g", "GjPac6kjLP8", "28D8e8QFrag", "U9XkSl1UhRQ", "KRfp3nVadrQ", "uGejtMCvQ0c", "RK2ygVe3y2o")

python -m pip install yt-dlp

New-Item -ItemType Directory -Force -Path "public\videos\shorts"

foreach ($vid in $videos) {
    Write-Host "Downloading $vid..."
    python -m yt_dlp "https://youtube.com/shorts/$vid" -o "public\videos\shorts\$vid.%(ext)s" -f "best"
}

Write-Host "Done downloading."
