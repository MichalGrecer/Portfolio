---
title: "MMM-ButtonListener"
description: "Most programowy między fizycznymi przyciskami GPIO a systemem zdarzeń MagicMirror, napisany w Pythonie."
pubDate: "2025-10-01"
tags: ["Node.js", "JavaScript", "Raspberry Pi", "HTML5", "CSS3"]
link: "https://github.com/MichalGrecer/MMM-ButtonListener"
image: "/images/projects/schemat-lustra.png"
gallery:
  - "/images/projects/schemat-lustra.png"
---

## O projekcie
Moduł służący do fizycznej interakcji z lustrem. Pozwala na wyzwalanie cyfrowych zdarzeń (np. zrobienie zdjęcia) za pomocą hardware'owego przycisku arcade.

## Architektura
Wykorzystałem bibliotekę `PythonShell` do uruchomienia skryptu Pythona w tle. Skrypt używa biblioteki `gpiozero` do nasłuchiwania przerwań na pinach GPIO, co jest znacznie wydajniejsze niż ciągłe odpytywanie (polling). Po wykryciu wciśnięcia, sygnał jest wysyłany do głównego procesu MagicMirror.