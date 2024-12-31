// ==UserScript==
// @name         Roblox Region Locator
// @namespace    http://tampermonkey.net/
// @version      9.2
// @description  AutoRegion Loading in Roblox Servers with City and Country Selection. RoPro, RoGold, and RoQol alternative.
// @icon         https://raw.githubusercontent.com/Oqarshi/Invite/56a3ba9b892db9be0226d67868b056433e7e17e5/logo.png
// @license      MIT
// @author       Oqarshi
// @match        https://www.roblox.com/games/*
// @grant        GM_xmlhttpRequest
// @downloadURL https://update.greasyfork.org/scripts/522164/Roblox%20Region%20Locator.user.js
// @updateURL https://update.greasyfork.org/scripts/522164/Roblox%20Region%20Locator.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const serverRegionsByIp = {
        "128.116.0.0": {
            city: "Hong Kong",
            country: {
                name: "Hong Kong",
                code: "HK"
            }
        },
        "128.116.1.0": {
            city: "Los Angeles",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.2.0": {
            city: "Warsaw",
            country: {
                name: "Poland",
                code: "PL"
            },
            region: {
                name: "Mazowieckie",
                code: "14"
            }
        },
        "128.116.3.0": {
            city: "Warsaw",
            country: {
                name: "Poland",
                code: "PL"
            },
            region: {
                name: "Mazowieckie",
                code: "14"
            }
        },
        "128.116.4.0": {
            city: "Paris",
            country: {
                name: "France",
                code: "FR"
            },
            region: {
                name: "Île-de-France",
                code: "IDF"
            }
        },
        "128.116.5.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.6.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.7.0": {
            city: "Mumbai",
            country: {
                name: "India",
                code: "IN"
            },
            region: {
                name: "Mahārāshtra",
                code: "MH"
            }
        },
        "128.116.8.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.9.0": {
            city: "Mumbai",
            country: {
                name: "India",
                code: "IN"
            },
            region: {
                name: "Mahārāshtra",
                code: "MH"
            }
        },
        "128.116.10.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.11.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.12.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.13.0": {
            city: "Amsterdam",
            country: {
                name: "Netherlands",
                code: "NL"
            },
            region: {
                name: "Noord-Holland",
                code: "NH"
            }
        },
        "128.116.14.0": {
            city: "Hong Kong",
            country: {
                name: "Hong Kong",
                code: "HK"
            }
        },
        "128.116.15.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.16.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.17.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.18.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
        "128.116.19.0": {
            city: "Paris",
            country: {
                name: "France",
                code: "FR"
            },
            region: {
                name: "Île-de-France",
                code: "IDF"
            }
        },
        "128.116.20.0": {
            city: "Paris",
            country: {
                name: "France",
                code: "FR"
            },
            region: {
                name: "Île-de-France",
                code: "IDF"
            }
        },
        "128.116.21.0": {
            city: "Amsterdam",
            country: {
                name: "Netherlands",
                code: "NL"
            },
            region: {
                name: "Noord-Holland",
                code: "NH"
            }
        },
        "128.116.22.0": {
            city: "Atlanta",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Georgia",
                code: "GA"
            }
        },
        "128.116.23.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.24.0": {
            city: "Atlanta",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Georgia",
                code: "GA"
            }
        },
        "128.116.25.0": {
            city: "Atlanta",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Georgia",
                code: "GA"
            }
        },
        "128.116.26.0": {
            city: "Paris",
            country: {
                name: "France",
                code: "FR"
            },
            region: {
                name: "Île-de-France",
                code: "IDF"
            }
        },
        "128.116.27.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.28.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.29.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.30.0": {
            city: "Hong Kong",
            country: {
                name: "Hong Kong",
                code: "HK"
            }
        },
        "128.116.31.0": {
            city: "Warsaw",
            country: {
                name: "Poland",
                code: "PL"
            },
            region: {
                name: "Mazowieckie",
                code: "14"
            }
        },
        "128.116.32.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.33.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.34.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.35.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.36.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.37.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
        "128.116.38.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
        "128.116.39.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.40.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.41.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.42.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.43.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.44.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.45.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
        "128.116.46.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.47.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.48.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.49.0": {
            city: "Los Angeles",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.50.0": {
            city: "Singapore",
            country: {
                name: "Singapore",
                code: "SG"
            }
        },
        "128.116.51.0": {
            city: "Sydney",
            country: {
                name: "Australia",
                code: "AU"
            },
            region: {
                name: "New South Wales",
                code: "NSW"
            }
        },
        "128.116.52.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.53.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.54.0": {
            city: "Amsterdam",
            country: {
                name: "Netherlands",
                code: "NL"
            },
            region: {
                name: "Noord-Holland",
                code: "NH"
            }
        },
        "128.116.55.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.56.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.57.0": {
            city: "San Jose",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.58.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.59.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.60.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.61.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.62.0": {
            city: "Seattle",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Washington",
                code: "WA"
            }
        },
        "128.116.63.0": {
            city: "Los Angeles",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.64.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.65.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.66.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.67.0": {
            city: "San Jose",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.68.0": {
            city: "Santa Clara",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.69.0": {
            city: "Santa Clara",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.70.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.71.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.72.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.73.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.74.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.75.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.76.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.77.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.78.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.79.0": {
            city: "Singapore",
            country: {
                name: "Singapore",
                code: "SG"
            }
        },
        "128.116.80.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.81.0": {
            city: "Santa Clara",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.82.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.83.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.84.0": {
            city: "Elk Grove Village",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.85.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
        "128.116.86.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.87.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.88.0": {
            city: "Elk Grove Village",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.89.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.90.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.91.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.92.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.93.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.94.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.95.0": {
            city: "Dallas",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Texas",
                code: "TX"
            }
        },
        "128.116.96.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.97.0": {
            city: "Singapore",
            country: {
                name: "Singapore",
                code: "SG"
            }
        },
        "128.116.98.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.99.0": {
            city: "Atlanta",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Georgia",
                code: "GA"
            }
        },
        "128.116.100.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.101.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.102.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.103.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.104.0": {
            city: "Mumbai",
            country: {
                name: "India",
                code: "IN"
            },
            region: {
                name: "Mahārāshtra",
                code: "MH"
            }
        },
        "128.116.105.0": {
            city: "Santa Clara",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.106.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.107.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.108.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.109.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.110.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.111.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.112.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.113.0": {
            city: "Chicago",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Illinois",
                code: "IL"
            }
        },
        "128.116.114.0": {
            city: "Ashburn",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Virginia",
                code: "VA"
            }
        },
        "128.116.115.0": {
            city: "Seattle",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Washington",
                code: "WA"
            }
        },
        "128.116.116.0": {
            city: "Los Angeles",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.117.0": {
            city: "San Jose",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.118.0": {
            city: "Hong Kong",
            country: {
                name: "Hong Kong",
                code: "HK"
            }
        },
        "128.116.119.0": {
            city: "Slough",
            country: {
                name: "United Kingdom",
                code: "GB"
            },
            region: {
                name: "England",
                code: "ENG"
            }
        },
        "128.116.120.0": {
            city: "Tokyo",
            country: {
                name: "Japan",
                code: "JP"
            },
            region: {
                name: "Tokyo",
                code: "13"
            }
        },
        "128.116.121.0": {
            city: "Amsterdam",
            country: {
                name: "Netherlands",
                code: "NL"
            },
            region: {
                name: "Noord-Holland",
                code: "NH"
            }
        },
        "128.116.122.0": {
            city: "Paris",
            country: {
                name: "France",
                code: "FR"
            },
            region: {
                name: "Île-de-France",
                code: "IDF"
            }
        },
        "128.116.123.0": {
            city: "Frankfurt am Main",
            country: {
                name: "Germany",
                code: "DE"
            },
            region: {
                name: "Hessen",
                code: "HE"
            }
        },
        "128.116.124.0": {
            city: "Warsaw",
            country: {
                name: "Poland",
                code: "PL"
            },
            region: {
                name: "Mazowieckie",
                code: "14"
            }
        },
        "128.116.125.0": {
            city: "San Mateo",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "California",
                code: "CA"
            }
        },
        "128.116.126.0": {
            city: "Secaucus",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "New Jersey",
                code: "NJ"
            }
        },
        "128.116.127.0": {
            city: "Miami",
            country: {
                name: "United States",
                code: "US"
            },
            region: {
                name: "Florida",
                code: "FL"
            }
        },
    }


    // so we inject css into the page. if ur on light mode some stuff may look weird so not my fault
    const style = document.createElement('style');
    style.textContent = `
/* Overlay for the stupid thingy black screen*/
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background */
    z-index: 1000; /* Ensure overlay is below the popup */
}

/* Popup Container for the server region*/
.filter-popup {
    background-color: #2d2d2d; /* Dark background */
    color: #ffffff; /* White text */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    width: 300px;
    max-width: 90%;
    position: fixed; /* Fixed positioning */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Offset to truly center */
    text-align: center;
    z-index: 1001; /* Ensure popup is above the overlay */
}

/* Close Button  for the server selector*/
#closePopup {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4444; /* Red background */
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#closePopup:hover {
    background: #cc0000; /* Darker red on hover */
}

/* Label */
.filter-popup label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #ffffff;
}

/* Dropdown */
.filter-popup select {
    background-color: #444; /* Dark gray background */
    color: #ffffff; /* White text */
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #666; /* Gray border */
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
}

.filter-popup select:focus {
    border-color: #888; /* Lighter border on focus */
    outline: none;
}

/* Custom Input */
.filter-popup input[type="number"] {
    background-color: #444; /* Dark gray background */
    color: #ffffff; /* White text */
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #666; /* Gray border */
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
}

.filter-popup input[type="number"]:focus {
    border-color: #888; /* Lighter border on focus */
    outline: none;
}

/* Confirm Button */
#confirmServerCount {
    background-color: #444; /* Dark gray background */
    color: #ffffff; /* White text */
    padding: 8px 16px;
    border: 1px solid #666; /* Gray border */
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    width: 100%;
    transition: background-color 0.3s ease;
}

#confirmServerCount:hover {
    background-color: #666; /* Lighter gray on hover */
}
        .rbx-game-server-item.highlighted {
            border: 2px solid green;
            border-radius: 8px;
        }
        .fetch-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);

    // Function to show the message in the card section like errors and stuff
    function showMessage(message) {
        const serverListContainer = document.getElementById("rbx-game-server-item-container");
        if (!serverListContainer) {
            console.error("Server list container not found!");
            return;
        }

        const messageElement = document.createElement('div');
        messageElement.className = 'filter-message';
        messageElement.textContent = message;

        serverListContainer.innerHTML = ''; // Clear the container
        serverListContainer.appendChild(messageElement);

        return messageElement;
    }

    // Function to hide the message of the showmessage functioon
    function hideMessage() {
        const messageElement = document.querySelector('.filter-message');
        if (messageElement) messageElement.remove();
    }

    // Function to show the popup for random stuff
    function showPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const popup = document.createElement('div');
        popup.className = 'filter-popup';
        popup.textContent = 'Filtering servers, please wait...';

        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        return popup;
    }

    // Function to hide the popup for the stuff
    function hidePopup() {
        const popup = document.querySelector('.filter-popup');
        const overlay = document.querySelector('.overlay');

        if (popup) popup.remove();
        if (overlay) overlay.remove();
    }

    // Function to fetch server details so game id and job id. yea!
    async function fetchServerDetails(gameId, jobId) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://gamejoin.roblox.com/v1/join-game-instance", // url for game id
                headers: { // doesent ened cookie cause the browser already contains the cookie. so like the script doesent even need a cookie kinda
                    "Content-Type": "application/json",
                    "User-Agent": "Roblox/WinInet",
                },
                data: JSON.stringify({
                    placeId: gameId,
                    gameId: jobId
                }),
                onload: function(response) {
                    const json = JSON.parse(response.responseText);

                    // Check if the response indicates that the user needs to purchase the game
                    if (json.status === 12 && json.message === 'You need to purchase access to this game before you can play.') { // yea error message!
                        reject('purchase_required'); // Special error code for this case yea!
                        return;
                    }

                    const address = json?.joinScript?.UdmuxEndpoints?.[0]?.Address ?? json?.joinScript?.MachineAddress;

                    if (!address) {
                        console.error("API Response (Unknown Location):", json); // Log the API response for debug
                        reject(`Unable to fetch server location: Status ${json.status}`); // debug
                        return;
                    }

                    const location = serverRegionsByIp[address.replace(/^(128\.116\.\d+)\.\d+$/, "$1.0")]; // lmao all servers atart with this so yea dont argue with me

                    if (!location) {
                        console.error("API Response (Unknown Location):", json); // Log the API response into the chat. might remove it from production but idc rn
                        reject(`Unknown server address ${address}`);
                        return;
                    }

                    resolve(location);
                },
                onerror: function(error) {
                    console.error("API Request Failed:", error); // damn if this happpens idk what to tell u
                    reject(`Failed to fetch server details: ${error}`);
                },
            });
        });
    }

    // cusomt delay also known as sleep fucntion in js cause this language sucks and doesent have a default function
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function to create a popup for selecting the number of servers
    // basically yea thats what it doesent
    function createServerCountPopup(callback) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const popup = document.createElement('div');
        popup.className = 'filter-popup'; // reason 100 is selected because thjats how many the api will show per request
        popup.innerHTML = `
        <button id="closePopup">X</button>
        <label for="serverCount">Enter the number of servers to search:</label>
        <select id="serverCount">
            <option value="10">10 Servers</option>
            <option value="25">25 Servers</option>
            <option value="50">50 Servers</option>
            <option value="100" selected>100 Servers</option>
            <option value="200">200 Servers</option>
            <option value="500">500 Servers</option>
            <option value="1000">1000 Servers</option>
            <option value="custom">Custom</option>
        </select>
        <input id="customServerCount" type="number" min="1" max="1000" placeholder="Enter a number (1-1000)" style="display: none;">
        <button id="confirmServerCount">Confirm</button>
    `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        const serverCountDropdown = popup.querySelector('#serverCount');
        const customServerCountInput = popup.querySelector('#customServerCount');
        const confirmButton = popup.querySelector('#confirmServerCount');
        const closeButton = popup.querySelector('#closePopup');

        // Show/hide custom input based on dropdown selection
        serverCountDropdown.addEventListener('change', () => {
            if (serverCountDropdown.value === 'custom') {
                customServerCountInput.style.display = 'block';
            } else {
                customServerCountInput.style.display = 'none';
            }
        });

        // button click on start or what ever
        confirmButton.addEventListener('click', () => {
            let serverCount;

            if (serverCountDropdown.value === 'custom') {
                serverCount = parseInt(customServerCountInput.value);

                // Validate custom input
                if (isNaN(serverCount) || serverCount < 1 || serverCount > 1000) {
                    alert("Please enter a valid number between 1 and 1000."); // yea dont go over this :)))))
                    return;
                }
            } else {
                serverCount = parseInt(serverCountDropdown.value);
            }

            // Show an alert if the user selects a number above 100
            if (serverCount > 100) { // error cause people dont know about this maybe. idk yea so here. also if u think this is a stupid way i should have done it before the button press idc so yea
                alert("Warning: Searching over 100 servers may take some time and you might be rate limited!");
            }

            // Pass the selected server count to the callback
            callback(serverCount);
            hidePopup();
        });

        // Close button logic :))
        closeButton.addEventListener('click', () => {
            hidePopup();
        });

        // Function to hide the popup
        // yea im dumb and used the same function name but it works and im too lazy to change it
        function hidePopup() {
            document.body.removeChild(overlay);
            document.body.removeChild(popup);
        }
    }

    // Function to fetch public servers
    // totallimit is amount of sevrers to fetch
    async function fetchPublicServers(gameId, totalLimit) {
        let servers = [];
        let cursor = null;

        while (servers.length < totalLimit) { // too lazy to comment any of this. hopefully i remember what this does in the future
            const url = `https://games.roblox.com/v1/games/${gameId}/servers/public?excludeFullGames=true&limit=100${cursor ? `&cursor=${cursor}` : ''}`;

            const response = await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: url,
                    onload: function(response) {
                        resolve(JSON.parse(response.responseText));
                    },
                    onerror: function(error) {
                        reject(`Failed to fetch public servers: ${error}`);
                    },
                });
            });

            servers = servers.concat(response.data);

            if (!response.nextPageCursor || servers.length >= totalLimit) {
                break;
            }

            cursor = response.nextPageCursor;
            await delay(5000); // wait 5 seconds before each page request. if u think this is slow i tried 1 second i got rate limited :|
        }

        return servers.slice(0, totalLimit);
    }

    // Function to create dropdown menus for filtering
    function createFilterDropdowns(servers) {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';

        const countryDropdown = document.createElement('select');
        countryDropdown.id = 'countryFilter';
        countryDropdown.innerHTML = '<option value="">All Countries</option>';
        countryDropdown.style.backgroundColor = '#333'; // Dark gray background
        countryDropdown.style.color = '#fff'; // White text
        countryDropdown.style.borderRadius = '8px'; // Rounded corners
        countryDropdown.style.padding = '8px'; // Increase size
        countryDropdown.style.fontSize = '16px'; // Increase font size
        countryDropdown.style.border = 'none'; // Remove default border

        const cityDropdown = document.createElement('select');
        cityDropdown.id = 'cityFilter';
        cityDropdown.innerHTML = '<option value="">All Cities</option>';
        cityDropdown.style.backgroundColor = '#333'; // Dark gray background
        cityDropdown.style.color = '#fff'; // White text
        cityDropdown.style.borderRadius = '8px'; // Rounded corners
        cityDropdown.style.padding = '8px'; // Increase size hehehehe
        cityDropdown.style.fontSize = '16px'; // Increase font size
        cityDropdown.style.border = 'none'; // Remove default border
        cityDropdown.style.marginLeft = '5px'; // move right cause im too lazy to fix

        // Count the number of servers per country and add them to the dropdown
        const countryCounts = {};
        servers.forEach(server => {
            const country = server.location.country.name;
            countryCounts[country] = (countryCounts[country] || 0) + 1;
        });

        // Populate country dropdown with server counts
        Object.keys(countryCounts).forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = `${country} (${countryCounts[country]})`;
            countryDropdown.appendChild(option);
        });

        // add the city dropdown based on selected country
        countryDropdown.addEventListener('change', () => {
            const selectedCountry = countryDropdown.value;
            cityDropdown.innerHTML = '<option value="">All Cities</option>';

            if (selectedCountry) {
                // Count the number of servers per city in the selected country
                const cityCounts = {};
                servers
                    .filter(server => server.location.country.name === selectedCountry)
                    .forEach(server => {
                        const city = server.location.city;
                        const region = server.location.region?.name;
                        const cityKey = region ? `${city}, ${region}` : city;
                        cityCounts[cityKey] = (cityCounts[cityKey] || 0) + 1;
                    });

                // Populate city dropdown with server counts
                Object.keys(cityCounts).forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = `${city} (${cityCounts[city]})`;
                    cityDropdown.appendChild(option);
                });

                // Auto-select the city if there's only one make users life easier
                // wow ik i made the users life easier for once thats crazy!!! :OOOOO
                const cities = Object.keys(cityCounts);
                if (cities.length === 1) {
                    cityDropdown.value = cities[0];
                    displayFilteredServers(selectedCountry, cities[0]);
                }
            }
        });

        filterContainer.appendChild(countryDropdown);
        filterContainer.appendChild(cityDropdown);

        return filterContainer;
    }
    // Function to filter servers based on selected country and city cause im lazy
    function filterServers(servers, country, city) {
        return servers.filter(server => {
            const matchesCountry = !country || server.location.country.name === country;
            const matchesCity = !city || `${server.location.city}${server.location.region?.name ? `, ${server.location.region.name}` : ''}` === city;
            return matchesCountry && matchesCity;
        });
    }

    // Function to sort servers by ping. maybe inaccurate but thats roblox's problem not mine
    function sortServersByPing(servers) {
        return servers.sort((a, b) => a.server.ping - b.server.ping);
    }

    async function fetchPlayerThumbnails(playerTokens) {
        const body = playerTokens.map(token => ({
            requestId: `0:${token}:AvatarHeadshot:150x150:png:regular`,
            type: "AvatarHeadShot",
            targetId: 0,
            token,
            format: "png",
            size: "150x150",
        }));

        const response = await fetch("https://thumbnails.roblox.com/v1/batch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data.data || [];
    }

    async function rebuildServerList(gameId, fetchButton, totalLimit) {
        const serverListContainer = document.getElementById("rbx-game-server-item-container");
        if (!serverListContainer) {
            console.error("Server list container not found!");
            return;
        }

        const messageElement = showMessage("Filtering servers, please wait...");
        fetchButton.disabled = true;

        try {
            const servers = await fetchPublicServers(gameId, totalLimit);
            const totalServers = servers.length;
            let skippedServers = 0;

            messageElement.textContent = `Filtering servers, please do not leave this page...\n${totalServers} servers found, 0 servers loaded.`;

            const serverDetails = [];
            for (let i = 0; i < servers.length; i++) {
                const server = servers[i];
                const {
                    id: serverId,
                    maxPlayers,
                    playing,
                    ping,
                    fps,
                    playerTokens
                } = server;

                let location;
                try {
                    location = await fetchServerDetails(gameId, serverId);
                } catch (error) {
                    if (error === 'purchase_required') {
                        messageElement.textContent = "Cannot access server data because you haven't purchased the game.";
                        return;
                    } else {
                        console.error(error);
                        location = {
                            city: "Unknown",
                            country: {
                                name: "Unknown",
                                code: "??"
                            }
                        };
                    }
                }

                if (location.city === "Unknown" || playing >= maxPlayers) {
                    console.log(`Skipping server ${serverId} because it is full or location is unknown.`);
                    skippedServers++;
                    continue;
                }

                // Fetch player thumbnails
                const playerThumbnails = playerTokens && playerTokens.length > 0 ? await fetchPlayerThumbnails(playerTokens) : [];

                serverDetails.push({
                    server,
                    location,
                    playerThumbnails
                });

                messageElement.textContent = `Filtering servers, please do not leave this page...\n${totalServers} servers found, ${i + 1} server locations found`;
            }

            const loadedServers = totalServers - skippedServers;
            messageElement.textContent = `Filtering complete!\n${totalServers} servers found, ${loadedServers} servers loaded, ${skippedServers} servers skipped (full).`;

            // Add filter dropdowns
            const filterContainer = createFilterDropdowns(serverDetails);
            serverListContainer.parentNode.insertBefore(filterContainer, serverListContainer);

            // Style the server list container to use a grid layout
            serverListContainer.style.display = "grid";
            serverListContainer.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 columns
            serverListContainer.style.gap = "16px"; // Gap between cards

            const displayFilteredServers = (country, city) => {
                serverListContainer.innerHTML = "";

                const filteredServers = filterServers(serverDetails, country, city);
                const sortedServers = sortServersByPing(filteredServers);

                sortedServers.forEach(({
                    server,
                    location,
                    playerThumbnails
                }) => {
                    const serverCard = document.createElement("li");
                    serverCard.className = "rbx-game-server-item col-md-3 col-sm-4 col-xs-6";

                    // Set consistent width and height for the server card
                    serverCard.style.width = "100%"; // Take up full width of the grid cell
                    serverCard.style.minHeight = "400px"; // Set a minimum height
                    serverCard.style.display = "flex";
                    serverCard.style.flexDirection = "column";
                    serverCard.style.justifyContent = "space-between";
                    serverCard.style.boxSizing = "border-box"; // Include padding and border in dimensions

                    // Remove any conflicting outline (e.g., from .highlighted class)
                    serverCard.style.outline = 'none';

                    // Determine the group and set the outline color
                    let outlineColor;
                    if (server.ping < 100) {
                        outlineColor = 'green'; // Best ping
                    } else if (server.ping < 200) {
                        outlineColor = 'orange'; // Medium ping
                    } else {
                        outlineColor = 'red'; // Bad ping
                    }

                    // Apply the new outline and outlineOffset
                    serverCard.style.outline = `3px solid ${outlineColor}`;
                    serverCard.style.outlineOffset = '-6px';
                    serverCard.style.padding = '6px';
                    serverCard.style.borderRadius = '8px';

                    // Create a container for player thumbnails
                    const thumbnailsContainer = document.createElement("div");
                    thumbnailsContainer.className = "player-thumbnails-container";
                    thumbnailsContainer.style.display = "grid";
                    thumbnailsContainer.style.gridTemplateColumns = "repeat(3, 60px)"; // 3 columns
                    thumbnailsContainer.style.gridTemplateRows = "repeat(2, 60px)"; // 2 rows
                    thumbnailsContainer.style.gap = "5px";
                    thumbnailsContainer.style.marginBottom = "10px";

                    // Add player thumbnails to the container (max 5)
                    const maxThumbnails = 5;
                    const displayedThumbnails = playerThumbnails.slice(0, maxThumbnails);
                    displayedThumbnails.forEach(thumb => {
                        if (thumb && thumb.imageUrl) {
                            const img = document.createElement("img");
                            img.src = thumb.imageUrl;
                            img.className = "avatar-card-image";
                            img.style.width = "60px";
                            img.style.height = "60px";
                            img.style.borderRadius = "50%";
                            thumbnailsContainer.appendChild(img);
                        }
                    });

                    // Add a placeholder for hidden players
                    const hiddenPlayers = server.playing - displayedThumbnails.length;
                    if (hiddenPlayers > 0) {
                        const placeholder = document.createElement("div");
                        placeholder.className = "avatar-card-image";
                        placeholder.style.width = "60px";
                        placeholder.style.height = "60px";
                        placeholder.style.borderRadius = "50%";
                        placeholder.style.backgroundColor = "#BDBEBE80"; // Dark gray background
                        placeholder.style.display = "flex";
                        placeholder.style.alignItems = "center";
                        placeholder.style.justifyContent = "center";
                        placeholder.style.color = "#fff"; // White text
                        placeholder.style.fontSize = "14px";
                        placeholder.textContent = `+${hiddenPlayers}`;
                        thumbnailsContainer.appendChild(placeholder);
                    }

                    // Server card content
                    const cardItem = document.createElement("div");
                    cardItem.className = "card-item";
                    cardItem.style.display = "flex";
                    cardItem.style.flexDirection = "column";
                    cardItem.style.justifyContent = "space-between";
                    cardItem.style.height = "100%"; // Ensure the card content takes up the full height

                    cardItem.innerHTML = `
                    <!-- Player thumbnails at the top -->
                    ${thumbnailsContainer.outerHTML}
                    <div class="rbx-game-server-details game-server-details">
                        <div class="text-info rbx-game-status rbx-game-server-status text-overflow">
                            ${server.playing} of ${server.maxPlayers} people max
                        </div>
                        <div class="server-player-count-gauge border">
                            <div class="gauge-inner-bar border" style="width: ${(server.playing / server.maxPlayers) * 100}%;"></div>
                        </div>
                        <span data-placeid="${gameId}">
                            <button type="button" class="btn-full-width btn-control-xs rbx-game-server-join game-server-join-btn btn-primary-md btn-min-width">Join</button>
                        </span>
                    </div>
                    <!-- Generated info (ping, location, FPS) at the bottom -->
                    <div style="margin-top: 10px; text-align: center;">
                        <div class="ping-info">Ping: ${server.ping}ms</div>
                        <div class="location-info">${location.city}, ${location.country.name}</div>
                        <div class="fps-info">FPS: ${Math.round(server.fps)}</div>
                    </div>
                `;

                    const joinButton = cardItem.querySelector(".rbx-game-server-join");
                    joinButton.addEventListener("click", () => {
                        window.open(`https://oqarshi.github.io/Invite/?placeid=${gameId}&serverid=${server.id}`, "_blank");
                    });

                    const container = adjustJoinButtonContainer(joinButton);
                    const inviteButton = createInviteButton(gameId, server.id);
                    container.appendChild(inviteButton);

                    serverCard.appendChild(cardItem);
                    serverListContainer.appendChild(serverCard);
                });
            };

            // Add event listeners to dropdowns
            const countryFilter = document.getElementById('countryFilter');
            const cityFilter = document.getElementById('cityFilter');

            countryFilter.addEventListener('change', () => {
                displayFilteredServers(countryFilter.value, cityFilter.value);
            });

            cityFilter.addEventListener('change', () => {
                displayFilteredServers(countryFilter.value, cityFilter.value);
            });

            // Display all servers initially
            displayFilteredServers("", "");

            setTimeout(() => {
                hideMessage();
            }, 3000);
        } catch (error) {
            console.error("Error rebuilding server list:", error);
            messageElement.textContent = "An error occurred while filtering servers. Please try again.";
        } finally {
            fetchButton.disabled = false;
        }
    }
    // Function to create and append the Invite button
    function createInviteButton(placeId, serverId) { // too lazy to comment this function tbh just ready the name
        const inviteButton = document.createElement('button');
        inviteButton.textContent = 'Invite';
        inviteButton.className = 'btn-control-xs btn-primary-md btn-min-width btn-full-width';
        inviteButton.style.width = '25%';
        inviteButton.style.marginLeft = '5px';

        inviteButton.style.padding = '4px 8px';
        inviteButton.style.fontSize = '12px';
        inviteButton.style.borderRadius = '8px';
        inviteButton.style.backgroundColor = '#393b3d';
        inviteButton.style.borderColor = '#bdbebe';
        inviteButton.style.color = '#bdbebe';
        inviteButton.style.cursor = 'pointer';
        inviteButton.style.fontWeight = '500';
        inviteButton.style.textAlign = 'center';
        inviteButton.style.whiteSpace = 'nowrap';
        inviteButton.style.verticalAlign = 'middle';
        inviteButton.style.lineHeight = '100%';
        inviteButton.style.fontFamily = 'Builder Sans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif';
        inviteButton.style.textRendering = 'auto';
        inviteButton.style.webkitFontSmoothing = 'antialiased';
        inviteButton.style.mozOsxFontSmoothing = 'grayscale';

        inviteButton.addEventListener('mouseenter', () => {
            inviteButton.style.color = '#ffffff';
            inviteButton.style.borderColor = '#ffffff';
        });
        inviteButton.addEventListener('mouseleave', () => {
            inviteButton.style.color = '#bdbebe';
            inviteButton.style.borderColor = '#bdbebe';
        });

        inviteButton.addEventListener('click', () => {
            const inviteLink = `https://oqarshi.github.io/Invite/?placeid=${placeId}&serverid=${serverId}`;
            navigator.clipboard.writeText(inviteLink).then(() => {
                console.log(`Invite link copied to clipboard: ${inviteLink}`);
                const popup = showPopup();
                popup.textContent = 'Invite link copied to clipboard!';
                setTimeout(() => {
                    hidePopup();
                }, 1000); // hide the popup after 1 seconds
            }).catch(() => {
                console.error('Failed to copy invite link.');
                const popup = showPopup();
                popup.textContent = 'Failed to copy invite link. Please try again.';
                setTimeout(() => {
                    hidePopup();
                }, 1000); // hide the popup after 1 seconds dnot ask me why i wrote this twice
            });
        });

        return inviteButton;
    }

    // Function to adjust the Join button and its container
    function adjustJoinButtonContainer(joinButton) {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.width = '100%';

        joinButton.style.width = '75%';

        joinButton.parentNode.insertBefore(container, joinButton);
        container.appendChild(joinButton);

        return container;
    }

    // Function to add the "Filter Server Region" button
    function addFetchServersButton(gameId) {
        const serverListOptions = document.querySelector(".server-list-options");
        if (!serverListOptions) {
            console.error("Server list options container not found!");
            return;
        }

        const fetchButton = document.createElement("button");
        fetchButton.type = "button";
        fetchButton.textContent = "Filter Server Region";
        fetchButton.className = "fetch-button";
        fetchButton.addEventListener("click", () => {
            createServerCountPopup((totalLimit) => {
                rebuildServerList(gameId, fetchButton, totalLimit);
            });
        });

        fetchButton.style.padding = '5px 10px';
        fetchButton.style.cursor = 'pointer';
        fetchButton.style.backgroundColor = '#444';
        fetchButton.style.color = '#fff';
        fetchButton.style.border = '1px solid #bdbebe';
        fetchButton.style.borderRadius = '4px';
        fetchButton.style.marginLeft = '10px';

        serverListOptions.appendChild(fetchButton);
    }

    // Function to check if the auto-run feature is enabled. yea
    function isAutoRunEnabled() {
        return localStorage.getItem('autoRunScript') === 'true';
    }

    // Function to toggle the auto-run feature read the name
    function toggleAutoRun() {
        const autoRunEnabled = isAutoRunEnabled();
        localStorage.setItem('autoRunScript', !autoRunEnabled);
    }

    // Function to add the "Auto" button
    function addAutoButton() {
        const serverListOptions = document.querySelector(".server-list-options");
        if (!serverListOptions) {
            console.error("Server list options container not found!");
            return;
        }

        const autoButtonContainer = document.createElement("div");
        autoButtonContainer.style.display = "flex";
        autoButtonContainer.style.alignItems = "center";
        autoButtonContainer.style.gap = "10px";

        const autoButtonLabel = document.createElement("label");
        autoButtonLabel.textContent = "Auto Filter Servers";
        autoButtonLabel.style.color = "#fff";
        autoButtonLabel.style.cursor = "pointer";
        autoButtonLabel.style.marginLeft = "15px"; // Add margin to move it to the right

        const autoButton = document.createElement("input");
        autoButton.type = "checkbox";
        autoButton.checked = isAutoRunEnabled();
        autoButton.style.cursor = "pointer";
        autoButton.title = "Automatically filter servers when the page loads."; // Tooltip text
        autoButton.addEventListener("change", toggleAutoRun);

        // Style the checkbox to match the button style
        autoButton.style.width = "16px";
        autoButton.style.height = "16px";
        autoButton.style.accentColor = "#393b3d"; // Match the button background color
        autoButton.style.border = "1px solid #bdbebe"; // Match the button border color
        autoButton.style.borderRadius = "4px"; // Match the button border radius

        autoButtonContainer.appendChild(autoButtonLabel);
        autoButtonContainer.appendChild(autoButton);
        serverListOptions.appendChild(autoButtonContainer);
    }

    // Function to add the cog wheel and its functionality
    function addCogWheel() {
        const serverListOptions = document.querySelector(".server-list-options");
        if (!serverListOptions) {
            console.error("Server list options container not found!");
            return;
        }

        // Create the cog wheel icon
        const cogWheel = document.createElement("span");
        cogWheel.innerHTML = "⚙️"; // hehe thats a cog wheel
        cogWheel.style.cursor = "pointer"; // yea im cool
        cogWheel.style.marginLeft = "10px";
        cogWheel.style.fontSize = "16px";
        cogWheel.title = "Click to set the default server search value for autorun.";

        // Add click event listener to the cog wheel
        cogWheel.addEventListener("click", () => {
            const defaultServerCount = prompt("Enter the default number of servers to search in autorun (1-100):");
            if (defaultServerCount !== null) {
                const count = parseInt(defaultServerCount);
                if (!isNaN(count) && count >= 1 && count <= 100) { // yea so here
                    localStorage.setItem('defaultServerCount', count);
                    alert(`Default server search value set to ${count}.`);
                } else {
                    alert("Invalid input. Please enter a number between 1 and 100.");
                }
            }
        });

        // Append the cog wheel to the server list options
        serverListOptions.appendChild(cogWheel);
    }

    // Function to get the default server search value from localStorage
    function getDefaultServerCount() {
        const defaultServerCount = localStorage.getItem('defaultServerCount');
        return defaultServerCount ? parseInt(defaultServerCount) : 100; // Default to 100 if not set
    }

    // Function to auto-click the "Filter Server Region" button with the default server count
    function autoClickFilterButton(gameId) {
        const fetchButton = document.querySelector(".fetch-button");
        if (fetchButton && !fetchButton.disabled) {
            const defaultServerCount = getDefaultServerCount();
            rebuildServerList(gameId, fetchButton, defaultServerCount);
            console.log(`Auto-clicked the Filter Server Region button with ${defaultServerCount} servers preselected.`);
        } else {
            console.error("Filter Server Region button not found or is disabled.");
        }
    }

    // Main function basically adds the buttons on the page
    function main() {
        const gameIdMatch = window.location.pathname.match(/\/games\/(\d+)\//);
        if (!gameIdMatch) {
            console.error("Game ID not found in URL!");
            return;
        }

        const gameId = gameIdMatch[1];

        // Use MutationObserver to wait for the server tab to be loaded
        const observer = new MutationObserver((mutations, obs) => {
            const serverListOptions = document.querySelector(".server-list-options");
            if (serverListOptions) {
                addFetchServersButton(gameId);
                addAutoButton();
                addCogWheel(); // Add the cog wheel
                obs.disconnect(); // stop observing once the button is added

                // automatically run the script if the auto-run feature is enabled
                if (isAutoRunEnabled()) {
                    // add a small delay to ensure the button is fully rendered and clickable
                    setTimeout(() => {
                        autoClickFilterButton(gameId); // Pass gameId to the function
                    }, 1000); // ok i learned how to do timeout apperantly this is a built in function and im stupid cause i copied off of google. so that delay function is useless
                }
            }
        });

        // start observing the document body for changes :)
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Run the main function yea
    main();
})();
