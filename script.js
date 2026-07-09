(function () {
    "use strict";

    // ----- DOM refs -----
    const cityInput = document.getElementById("cityInput");
    const searchForm = document.getElementById("searchForm");
    const searchBtn = document.getElementById("searchBtn");

    const heroContent = document.getElementById("heroContent");
    const loadingPlaceholder = document.getElementById("loadingPlaceholder");

    const cityNameEl = document.getElementById("cityName");
    const countryNameEl = document.getElementById("countryName");
    const temperatureEl = document.getElementById("temperature");
    const weatherIconEl = document.getElementById("weatherIcon");
    const descTextEl = document.getElementById("descText");

    const humidityVal = document.getElementById("humidityVal");
    const windVal = document.getElementById("windVal");
    const uvVal = document.getElementById("uvVal");

    const forecastGrid = document.getElementById("forecastGrid");
    const errorArea = document.getElementById("errorArea");
