---
title: "B2B Lead Generator"
description: "Zaaawansowane narzędzie desktopowe do automatyzacji procesu pozyskiwania leadów sprzedażowych przy użyciu Google Custom Search API."
pubDate: "2025-11-15"
tags: ["Python", "Pandas", "Google API", "NumPy"]
link: "https://github.com/MichalGrecer/Customer-Finder"
image: "/images/projects/lead-generator.png"
gallery:
  - "/images/projects/lead-generator.png"
  - "/images/projects/lead-generator2.png"
  - "/images/projects/lead-generator3.png"
---

## O projekcie
Aplikacja desktopowa zaprojektowana w celu automatyzacji żmudnego procesu wyszukiwania potencjalnych klientów biznesowych. Narzędzie łączy oficjalne API Google z technikami web scrapingu, aby dostarczać gotowe listy kontaktowe w formacie Excel.

## Główne funkcjonalności
* **Integracja z Google API**: Wykorzystanie Custom Search JSON API do precyzyjnego wyszukiwania firm w określonych lokalizacjach (obsługa wielu krajów).
* **Inteligentny Scraping**: Autorski algorytm ekstrahujący adresy e-mail i numery telefonów ze stron docelowych, z wbudowanym filtrowaniem błędnych danych (np. kodów pocztowych mylonych z telefonami).
* **Wielowątkowość**: Zastosowanie modułu `threading` do równoległego przetwarzania zapytań bez blokowania interfejsu użytkownika (GUI).
* **Zarządzanie Limitami**: System monitorowania dziennego limitu zapytań API z automatycznym resetem.

## Wyzwania techniczne
Kluczowym wyzwaniem było ominięcie blokad anty-botowych oraz obsługa różnorodnych struktur HTML na stronach firmowych. Zastosowałem losowe opóźnienia (`random.uniform`) oraz zaawansowane wyrażenia regularne (`Regex`) do precyzyjnej ekstrakcji danych kontaktowych.