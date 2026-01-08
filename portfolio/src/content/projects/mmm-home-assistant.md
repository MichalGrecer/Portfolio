---
title: "MMM-HomeAssistant"
description: "Moduł integrujący dashboard Home Assistant z MagicMirror, umożliwiający sterowanie inteligentnym domem bezpośrednio z lustra."
pubDate: "2025-09-05"
tags: ["Node.js", "JavaScript", "Raspberry Pi", "HTML5", "CSS3"]
link: "https://github.com/MichalGrecer/MMM-HomeAssistant"
image: "/images/projects/MMM-HomeAssistant.png"
gallery:
    - "/images/projects/MMM-HomeAssistant.png"
---

## O projekcie
Lekki wrapper umożliwiający osadzenie panelu sterowania Home Assistant wewnątrz interfejsu MagicMirror.

## Rozwiązanie
Zamiast budować interfejs od zera, moduł tworzy responsywną ramkę (`iframe`), która bezpiecznie renderuje panel HA. Pozwala to na zachowanie pełnej funkcjonalności Home Assistanta (przełączniki, wykresy, kamery) przy minimalnym narzucie kodu po stronie lustra.