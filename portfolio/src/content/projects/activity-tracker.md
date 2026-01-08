---
title: "IoT Activity Tracker"
description: "Kompleksowy system monitorowania aktywności fizycznej (Holter). Urządzenie oparte na ESP32 z algorytmem detekcji ruchu oraz aplikacja mobilna React Native do wizualizacji danych LIVE i History."
pubDate: "2025-12-10"
tags: ["C++", "ESP32", "React Native","PlatformIO", "TypeScript"]
link: "https://github.com/MichalGrecer/IoT-Activity-Tracker"
image: "/images/projects/activity-tracker.PNG"
gallery:
  - "/images/projects/activity-tracker.PNG"
  - "/images/projects/activity-tracker2.PNG"
  - "/images/projects/activity-tracker3.png"
---

## O projekcie
Projekt polegał na stworzeniu autorskiego rejestratora aktywności fizycznej (typu Holter), który nie tylko zbiera surowe dane z akcelerometru, ale przetwarza je w czasie rzeczywistym na urządzeniu i klasyfikuje rodzaj aktywności (Spoczynek, Chód, Bieg). System składa się z urządzenia ubieralnego oraz aplikacji sterującej.

## Warstwa Hardware & Firmware (C++)
Sercem urządzenia jest mikrokontroler **ESP32** oprogramowany w **C++** (PlatformIO/Arduino).
* **Sensoryka**: Integracja akcelerometru/żyroskopu **MPU-9250** (komunikacja I2C) oraz precyzyjnego zegara czasu rzeczywistego **RTC DS3231**.
* **Algorytmika**: Zaimplementowałem autorski algorytm obliczający wektor SVM (*Signal Vector Magnitude*) z filtracją dolnoprzepustową (`alpha = 0.05`). Urządzenie analizuje dynamikę ruchu i liczbę pików (kroków) w oknach czasowych, aby klasyfikować stan użytkownika.
* **Pamięć**: Obsługa karty **SD** przez magistralę SPI do logowania danych w formacie CSV (Data, SVM, Stan) w celu późniejszej analizy.
* **Komunikacja BLE**: Urządzenie działa jako serwer GATT, wystawiając charakterystyki do:
    * Streamingu danych na żywo (Notify).
    * Synchronizacji historii (autorski protokół przesyłania plików z SD).
    * Przyjmowania komend sterujących.

## Aplikacja Mobilna (React Native)
Dedykowana aplikacja na Androida służąca do wizualizacji pracy urządzenia.
* **Bluetooth Low Energy**: Wykorzystanie biblioteki `react-native-ble-plx` do skanowania, łączenia i obsługi strumieni danych.
* **Dashboard Live**: Prezentacja aktualnego przeciążenia (g) oraz wykrytego stanu (Spoczynek/Chód/Bieg) w czasie rzeczywistym.
* **Analiza Historii**: Funkcja pobierania logów z karty SD urządzenia przez BLE. Aplikacja rysuje interaktywne wykresy (`react-native-chart-kit`) i pozwala na eksport raportów (zrzuty ekranu).

## Wyzwania
Największym wyzwaniem była optymalizacja transferu dużej ilości danych historycznych przez interfejs BLE (Low Energy) oraz synchronizacja wątków pomiarowych (50ms) z zapisem na kartę SD, aby nie utracić próbek danych.