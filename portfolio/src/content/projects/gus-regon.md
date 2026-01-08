---
title: "GUS REGON Integrator"
description: "System weryfikacji kontrahentów integrujący się z bazą Głównego Urzędu Statystycznego (BIR) z funkcją generowania raportów PDF."
pubDate: "2025-09-10"
tags: ["Python", "FastAPI", "Docker", "Git"]
link: "https://github.com/MichalGrecer/REGON-APK"
image: "/images/projects/gus-regon.png"
gallery:
  - "/images/projects/gus-regon.png"
  - "/images/projects/gus-regon2.png"
  - "/images/projects/gus-regon3.png"
  - "/images/projects/gus-regon4.png"
  - "/images/projects/gus-regon5.png"
  - "/images/projects/gus-regon6.png"
---

## O projekcie
Narzędzie służące do szybkiej weryfikacji danych podmiotów gospodarczych w Polsce. Aplikacja łączy się bezpośrednio z usługą sieciową GUS (BIR), pobiera pełne dane o firmie na podstawie NIP i pozwala na generowanie oficjalnych raportów.

## Kluczowe funkcjonalności
* **Komunikacja z BIR**: Obsługa logowania i sesji w systemie REGON przy użyciu klucza API użytkownika.
* **Dynamiczny Raport PDF**: Generowanie czytelnych dokumentów PDF z wykorzystaniem biblioteki `FPDF` i własnych czcionek (obsługa polskich znaków).
* **Interfejs "Drag & Drop"**: Implementacja mechanizmu przeciągnij-i-upuść w `Tkinter`, pozwalająca użytkownikowi na budowanie niestandardowych raportów z wybranych pól danych.
* **Historia Wyszukiwania**: Lokalny system cache'owania ostatnich zapytań w plikach tekstowych.

## Stack Technologiczny
Projekt wykorzystuje bibliotekę `litex.regon` do komunikacji z API oraz `lxml` do parsowania złożonych odpowiedzi XML zwracanych przez serwery rządowe. Całość zamknięta w intuicyjnym interfejsie graficznym.