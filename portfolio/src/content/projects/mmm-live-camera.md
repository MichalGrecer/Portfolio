---
title: "MMM-LiveCamera"
description: "Zaawansowana fotobudka dla MagicMirror z podglądem na żywo, integracją Google Drive i obsługą drukarek termicznych."
pubDate: "2025-11-20"
tags: ["Node.js", "JavaScript", "Raspberry Pi", "HTML5", "CSS3"]
link: "https://github.com/MichalGrecer/MMM-LiveCamera"
image: "/images/projects/MMM-LiveCamera.png"
gallery:
  - "/images/projects/MMM-LiveCamera.png"
  - "/images/projects/MMM-LiveCamera2.jpg"
---

## O projekcie
Kompleksowy moduł zamieniający lustro w interaktywną fotobudkę. Obsługuje pełny cykl: od podglądu, przez odliczanie, wykonanie zdjęcia, aż po upload i wydruk.

## Kluczowe funkcje
* **Google Drive Upload**: Autoryzacja OAuth2 i automatyczne wysyłanie zdjęć do chmury.
* **Przetwarzanie Obrazu**: Wykorzystanie `ImageMagick` do dynamicznego nakładania ramek, logotypów i efektów na surowe zdjęcia z kamery RPi.
* **Obsługa Hardware**: Sterowanie kamerą przez `rpicam-still` oraz integracja z systemem druku CUPS (komenda `lp`).