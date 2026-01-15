---
title: "BandMate – Platforma Społecznościowa dla Muzyków"
description: "Projekt w fazie aktywnego rozwoju (WIP). Kompleksowy ekosystem Full-Stack łączący muzyków, umożliwiający budowanie zespołów przez geolokalizację oraz komunikację w czasie rzeczywistym."
pubDate: "2026-01-15"
tags: ["React", "Socket.io", "Prisma", "PostgreSQL", "Node.js"]
link: "https://github.com/MichalGrecer/BandMate"
image: "/images/projects/bandmate-main.png"
gallery:
  - "/images/projects/bandmate.png"
  - "/images/projects/bandmate2.png"
  - "/images/projects/bandmate3.png"
  - "/images/projects/bandmate4.png"
  - "/images/projects/bandmate5.png"
  - "/images/projects/bandmate6.png"
  - "/images/projects/bandmate7.png"
  - "/images/projects/bandmate8.png"
  - "/images/projects/bandmate9.png"
  - "/images/projects/bandmate10.png"
  - "/images/projects/bandmate11.png"
  - "/images/projects/bandmate12.png"
  - "/images/projects/bandmate13.png"
  - "/images/projects/bandmate14.png"
  - "/images/projects/bandmate15.png"
  - "/images/projects/bandmate16.png"
---

## Status Projektu:  W trakcie realizacji
BandMate to ambitny projekt mający na celu rozwiązanie problemów z komunikacją i networkingiem w środowisku muzycznym. Obecnie platforma posiada w pełni funkcjonalny rdzeń komunikacyjny i geolokalizacyjny, a prace koncentrują się na modułach zarządzania wspólną pracą zespołów.

## Dostępne Funkcjonalności 

### System Geolokalizacji i Map (Discover)
* **Wyszukiwanie na mapie**: Integracja z **Leaflet** pozwala na wizualne odnalezienie muzyków w określonym promieniu od Twojej lokalizacji.
* **Klastrowanie markerów**: Czytelny interfejs nawet przy dużej liczbie użytkowników dzięki automatycznemu grupowaniu punktów na mapie.
* **Zaawansowane filtry**: Możliwość filtrowania bazy użytkowników po instrumentach, gatunkach muzycznych oraz poziomie zaawansowania.

###  Zaawansowany Komunikator (Messages)
* **Real-time Engine**: Czat oparty na **Socket.io** zapewniający natychmiastowe dostarczanie wiadomości.
* **Multimedia**: Obsługa przesyłania i pobierania obrazów, wideo oraz plików audio bezpośrednio w rozmowach.
* **Interakcje**: System reakcji emoji pod wiadomościami, wskaźniki pisania (typing status) oraz funkcje edycji i usuwania wiadomości (dla siebie lub wszystkich).

### Tablica Ogłoszeń i Feed Społecznościowy
* **Marketplace**: Tablica ogłoszeń z kategoriami (Szukam muzyka, Sprzęt, Sala prób) zintegrowana z API miast dla precyzyjnej lokalizacji.
* **Interaktywny Feed**: Strona główna z postami, systemem polubień oraz wątkowanymi komentarzami (wsparcie dla odpowiedzi na komentarze).
* **Repostiwanie**: Funkcja udostępniania postów innych użytkowników z własnym komentarzem (tzw. Quote Posts).

###  Powiadomienia i Profile
* **System Notyfikacji**: Powiadomienia w czasie rzeczywistym o nowych obserwujących, polubieniach, komentarzach oraz zaproszeniach do zespołów.
* **Publiczne Profile**: Rozbudowane wizytówki muzyków zintegrowane z odtwarzaczem **YouTube API** dla prezentacji demo.

## Warstwa Techniczna
* **Backend**: Express.js z **Prisma ORM** dla PostgreSQL. Schemat bazy danych obsługuje złożone relacje wiele-do-wielu (np. członkostwo w zespołach, ukrywanie wiadomości).
* **Przechowywanie danych**: Wykorzystanie **Multer** do zarządzania wieloma strumieniami zapisu plików (avatary, posty, wiadomości).
* **Frontend**: React z Tailwind CSS, wykorzystujący architekturę komponentową i wzorce **Optimistic UI**.

## 🗺️ Dalsze plany (Roadmap)
1. **Rozbudowa Band Space**: Wprowadzenie wspólnego repozytorium plików (nuty, dema) oraz kalendarza prób dla członków zespołów.
2. **System Zaproszeń**: Finalizacja modułu rekrutacyjnego pozwalającego liderom na formalne zarządzanie składem zespołu.
3. **Powiadomienia Push**: Integracja z Service Workers dla powiadomień poza otwartą kartą przeglądarki.
4. **Weryfikacja Kont**: System odznak dla zweryfikowanych muzyków i profesjonalnych studiów nagraniowych.

## Wyzwania rozwojowe
Głównym wyzwaniem jest synchronizacja stanów aplikacji przy tak dużej liczbie zdarzeń czasu rzeczywistego oraz optymalizacja zapytań do bazy danych PostgreSQL przy głęboko zagnieżdżonych strukturach komentarzy i odpowiedzi.