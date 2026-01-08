---
title: "MMM-WeightTrigger"
description: "Moduł do MagicMirror integrujący wagę tensometryczną (HX711) z interfejsem lustra. Wykorzystuje C++ do precyzyjnego odczytu danych w czasie rzeczywistym."
pubDate: "2025-10-15"
tags: ["Node.js", "JavaScript", "Raspberry Pi", "HTML5", "CSS3"]
link: "https://github.com/MichalGrecer/MMM-WeightTrigger"
image: "/images/projects/MMM-WeightTrigger.png"
gallery:
  - "/images/projects/MMM-WeightTrigger.png"
  - "/images/projects/schemat-lustra.png"
---

## O projekcie
Moduł przekształcający zwykłą półkę pod lustrem w inteligentny sensor. Wykorzystuje tensometry i sterownik HX711 do wykrywania obecności przedmiotów (np. kluczy, telefonu).

## Technologia
* **Low-Level Backend (C++)**: Napisałem dedykowany program w C++ wykorzystujący bibliotekę `wiringPi`, aby uzyskać stabilne i szybkie odczyty z pinów GPIO, co było niemożliwe do osiągnięcia w czystym JavaScript.
* **Integracja**: Node.js (`node_helper`) komunikuje się z procesem C++ poprzez standardowe wyjście (stdout), przekazując zdarzenia `WEIGHT_LOW` / `WEIGHT_HIGH` do frontendu lustra.