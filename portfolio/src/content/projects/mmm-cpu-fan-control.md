---
title: "MMM-CpuFanControl"
description: "Skrypt i moduł Node.js do inteligentnego sterowania aktywnym chłodzeniem Raspberry Pi 5 w oparciu o temperaturę CPU."
pubDate: "2025-08-12"
tags: ["Node.js", "JavaScript", "Raspberry Pi", "HTML5", "CSS3"]
link: "https://github.com/MichalGrecer/MMM-CPUFanControl"
image: "/images/projects/MMM-CPUFanControl.png"
gallery:
    - "/images/projects/MMM-CPUFanControl.png" 
---

## O projekcie
Rozwiązanie hardware'owe dbające o kulturę pracy urządzenia. Moduł monitoruje temperaturę procesora i dynamicznie steruje tranzystorem załączającym wentylator.

## Jak to działa
* **Monitoring**: Node.js cyklicznie wykonuje komendę systemową `vcgencmd measure_temp`.
* **Logika**: Histereza temperatury (włącz przy 65°C, wyłącz przy 55°C) zapobiega ciągłemu włączaniu i wyłączaniu wiatraka.
* **Sterowanie**: Bezpośrednie zarządzanie pinami GPIO poprzez narzędzie `pinctrl`.