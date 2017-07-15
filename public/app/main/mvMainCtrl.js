//Creating controller with a simple message, which for this basic example is kept in this file
angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.sneakers = [
        {
            "id": "e90e1888-61f0-4681-8379-a4706e491235",
            "uuid": "e90e1888-61f0-4681-8379-a4706e491235",
            "brand": "Adidas",
            "breadcrumbs": [],
            "category": "adidas Yeezy",
            "charityCondition": 0,
            "childId": null,
            "colorway": "White/Core Black/Red",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Zebra",
            "productCategory": "sneakers",
            "releaseDate": "2017-02-25 23:59:59",
            "releaseTime": 1487980800,
            "retailPrice": 220,
            "shoe": "Adidas Yeezy Boost 350 V2",
            "shortDescription": "Adidas-Yeezy-Boost-350-V2-Zebra",
            "styleId": "CP9654",
            "tickerSymbol": "YZY350V2-ZEBRA",
            "title": "Adidas Yeezy Boost 350 V2 Zebra",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "White/Core Black/Red",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 220,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "CP9654",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-02-25",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-yeezy-boost-350-v2-white-core-black-red",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "e90e1888-61f0-4681-8379-a4706e491235",
                "lowestAsk": 514,
                "salesThisPeriod": 716,
                "salesLastPeriod": 0,
                "highestBid": 762,
                "annualHigh": 3072,
                "annualLow": 435,
                "deadstockRangeLow": 529,
                "deadstockRangeHigh": 593,
                "volatility": 0.057329,
                "deadstockSold": 7528,
                "pricePremium": 1.55,
                "averageDeadstockPrice": 791,
                "lastSale": 561,
                "salesLast72Hours": 716,
                "changeValue": 48,
                "changePercentage": 0.093567,
                "absChangePercentage": 0.093567,
                "updatedAt": 1500155170,
                "lastLowestAskTime": 1500136314,
                "lastHighestBidTime": 1500038484,
                "lastSaleDate": "2017-07-15T21:47:10+00:00",
                "createdAt": "2017-01-17T00:28:27+00:00",
                "deadstockSoldRank": 66,
                "pricePremiumRank": 83,
                "averageDeadstockPriceRank": 1
            },
            "_tags": [
                "adidas",
                "yeezy",
                "product"
            ],
            "objectID": "e90e1888-61f0-4681-8379-a4706e491235",
            "_highlightResult": {
                "id": {
                    "value": "e90e1888-61f0-4681-8379-a4706e491235",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "e90e1888-61f0-4681-8379-a4706e491235",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "Adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas Yeezy",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "White/Core Black/Red",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Zebra",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-02-25 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas Yeezy Boost 350 V2",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-Yeezy-Boost-350-V2-Zebra",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "CP9654",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "YZY350V2-ZEBRA",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas Yeezy Boost 350 V2 Zebra",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "White/Core Black/Red",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "CP9654",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-02-25",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-yeezy-boost-350-v2-white-core-black-red",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "e90e1888-61f0-4681-8379-a4706e491235",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:47:10+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-01-17T00:28:27+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "yeezy",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
            "uuid": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
            "brand": "adidas",
            "breadcrumbs": [],
            "category": "adidas Yeezy",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Core White/Core White/Core White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Calabasas Core White",
            "productCategory": "sneakers",
            "releaseDate": "2017-03-28 23:59:59",
            "releaseTime": 1490659200,
            "retailPrice": 120,
            "shoe": "Adidas Yeezy Powerphase",
            "shortDescription": "Adidas-Yeezy-Powerphase-Calabasas-Core-White",
            "styleId": "CQ1693",
            "tickerSymbol": "YZYPWRPH-CWHT",
            "title": "Adidas Yeezy Powerphase Calabasas Core White",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Core White/Core White/Core White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 120,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "CQ1693",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-03-28",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-yeezy-powerphase-calabasas-core-white",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
                "lowestAsk": 152,
                "salesThisPeriod": 313,
                "salesLastPeriod": 0,
                "highestBid": 240,
                "annualHigh": 1190,
                "annualLow": 125,
                "deadstockRangeLow": 184,
                "deadstockRangeHigh": 206,
                "volatility": 0.054959,
                "deadstockSold": 5214,
                "pricePremium": 0.625,
                "averageDeadstockPrice": 211,
                "lastSale": 195,
                "salesLast72Hours": 313,
                "changeValue": 10,
                "changePercentage": 0.054054,
                "absChangePercentage": 0.054054,
                "updatedAt": 1500154994,
                "lastLowestAskTime": 1500151825,
                "lastHighestBidTime": 1500155224,
                "lastSaleDate": "2017-07-15T21:32:22+00:00",
                "createdAt": "2017-03-28T17:45:09+00:00",
                "deadstockSoldRank": 27,
                "pricePremiumRank": 7,
                "averageDeadstockPriceRank": 77
            },
            "_tags": [
                "adidas",
                "yeezy",
                "product"
            ],
            "objectID": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
            "_highlightResult": {
                "id": {
                    "value": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas Yeezy",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Core White/Core White/Core White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Yeezy-Powerphase-Calabasas-Core-White.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Calabasas Core White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-03-28 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas Yeezy Powerphase",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-Yeezy-Powerphase-Calabasas-Core-White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "CQ1693",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "YZYPWRPH-CWHT",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas Yeezy Powerphase Calabasas Core White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Core White/Core White/Core White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "CQ1693",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-03-28",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-yeezy-powerphase-calabasas-core-white",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "1a277efe-4aa1-41d2-b33a-4a08b256b046",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:32:22+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-03-28T17:45:09+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "yeezy",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
            "uuid": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
            "brand": "adidas",
            "breadcrumbs": [],
            "category": "adidas Ultra Boost",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Core Black/Core Black/Utility Black",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Triple Black 2.0",
            "productCategory": "sneakers",
            "releaseDate": "2017-06-28 23:59:59",
            "releaseTime": 1498608000,
            "retailPrice": 180,
            "shoe": "Adidas Ultra Boost 3.0",
            "shortDescription": "Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0",
            "styleId": "",
            "tickerSymbol": "ADIULBST-TRPLBLK",
            "title": "Adidas Ultra Boost 3.0 Triple Black 2.0",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Core Black/Core Black/Utility Black",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 180,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "CG3038",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-06-28",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-ultra-boost-3pt0-triple-black-2pt0",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
                "lowestAsk": 240,
                "salesThisPeriod": 142,
                "salesLastPeriod": 0,
                "highestBid": 280,
                "annualHigh": 311,
                "annualLow": 225,
                "deadstockRangeLow": 249,
                "deadstockRangeHigh": 271,
                "volatility": 0.043556,
                "deadstockSold": 555,
                "pricePremium": 0.444,
                "averageDeadstockPrice": 270,
                "lastSale": 260,
                "salesLast72Hours": 142,
                "changeValue": 5,
                "changePercentage": 0.019608,
                "absChangePercentage": 0.019608,
                "updatedAt": 1500154580,
                "lastLowestAskTime": 1499958274,
                "lastHighestBidTime": 1500152638,
                "lastSaleDate": "2017-07-15T21:38:54+00:00",
                "createdAt": "2017-06-19T23:04:27+00:00",
                "deadstockSoldRank": 68,
                "pricePremiumRank": 70,
                "averageDeadstockPriceRank": 70
            },
            "_tags": [
                "adidas",
                "ultra boost",
                "product"
            ],
            "objectID": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
            "_highlightResult": {
                "id": {
                    "value": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas Ultra Boost",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Core Black/Core Black/Utility Black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Triple Black 2.0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-06-28 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas Ultra Boost 3.0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-Ultra-Boost-3pt0-Triple-Black-2pt0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "ADIULBST-TRPLBLK",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas Ultra Boost 3.0 Triple Black 2.0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Core Black/Core Black/Utility Black",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "CG3038",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-06-28",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-ultra-boost-3pt0-triple-black-2pt0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "05ada130-b9b1-44cf-b911-d4a9a2d38b6a",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:38:54+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-06-19T23:04:27+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ultra boost",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "b371f6ee-11db-40ac-bcb0-fb523927758d",
            "uuid": "b371f6ee-11db-40ac-bcb0-fb523927758d",
            "brand": "Jordan",
            "breadcrumbs": [],
            "category": "Air Jordan One",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Black/Italy Blue-University Red",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Quai54",
            "productCategory": "sneakers",
            "releaseDate": "2017-07-08 23:59:59",
            "releaseTime": 1499472000,
            "retailPrice": 160,
            "shoe": "Jordan 1 Retro High OG",
            "shortDescription": "Air-Jordan-1-Retro-High-OG-Quai54",
            "styleId": "",
            "tickerSymbol": "AJ1H-Q54",
            "title": "Jordan 1 Retro High OG Quai54",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Black/Italy Blue-University Red",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 160,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "AH1040-054",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-07-08",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "air-jordan-1-retro-high-og-quai54",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "b371f6ee-11db-40ac-bcb0-fb523927758d",
                "lowestAsk": 180,
                "salesThisPeriod": 105,
                "salesLastPeriod": 0,
                "highestBid": 250,
                "annualHigh": 365,
                "annualLow": 200,
                "deadstockRangeLow": 203,
                "deadstockRangeHigh": 217,
                "volatility": 0.03218,
                "deadstockSold": 179,
                "pricePremium": 0.313,
                "averageDeadstockPrice": 245,
                "lastSale": 210,
                "salesLast72Hours": 105,
                "changeValue": -10,
                "changePercentage": -0.045455,
                "absChangePercentage": 0.045455,
                "updatedAt": 1500154605,
                "lastLowestAskTime": 1499966719,
                "lastHighestBidTime": 1499618941,
                "lastSaleDate": "2017-07-15T21:16:20+00:00",
                "createdAt": "2017-06-19T23:04:28+00:00",
                "deadstockSoldRank": 84,
                "pricePremiumRank": 61,
                "averageDeadstockPriceRank": 46
            },
            "_tags": [
                "air jordan",
                "one",
                "product"
            ],
            "objectID": "b371f6ee-11db-40ac-bcb0-fb523927758d",
            "_highlightResult": {
                "id": {
                    "value": "b371f6ee-11db-40ac-bcb0-fb523927758d",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "b371f6ee-11db-40ac-bcb0-fb523927758d",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "Jordan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "Air Jordan One",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Black/Italy Blue-University Red",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-OG-Quai54.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Quai54",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-07-08 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Jordan 1 Retro High OG",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Air-Jordan-1-Retro-High-OG-Quai54",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "AJ1H-Q54",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Jordan 1 Retro High OG Quai54",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Black/Italy Blue-University Red",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "AH1040-054",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-07-08",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "air-jordan-1-retro-high-og-quai54",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "b371f6ee-11db-40ac-bcb0-fb523927758d",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:16:20+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-06-19T23:04:28+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "air jordan",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "one",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
            "uuid": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
            "brand": "Jordan",
            "breadcrumbs": [],
            "category": "Air Jordan One",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Black/Varsity Maize-White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "New Love (2017)",
            "productCategory": "sneakers",
            "releaseDate": "2017-06-01 23:59:59",
            "releaseTime": 1496275200,
            "retailPrice": 110,
            "shoe": "Jordan 1 Retro Mid",
            "shortDescription": "Air-Jordan-1-Retro-Mid-New-Love-2017",
            "styleId": "554724-035",
            "tickerSymbol": "AJ1M-NEWLOVE17",
            "title": "Jordan 1 Retro Mid New Love (2017)",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Black/Varsity Maize-White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 110,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "554724-035",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-06-01",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "air-jordan-1-retro-mid-new-love-2017",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
                "lowestAsk": 118,
                "salesThisPeriod": 99,
                "salesLastPeriod": 0,
                "highestBid": 285,
                "annualHigh": 299,
                "annualLow": 85,
                "deadstockRangeLow": 94,
                "deadstockRangeHigh": 126,
                "volatility": 0.149477,
                "deadstockSold": 1587,
                "pricePremium": 0,
                "averageDeadstockPrice": 146,
                "lastSale": 110,
                "salesLast72Hours": 99,
                "changeValue": -5,
                "changePercentage": -0.043478,
                "absChangePercentage": 0.043478,
                "updatedAt": 1500153848,
                "lastLowestAskTime": 1500095579,
                "lastHighestBidTime": 1500071560,
                "lastSaleDate": "2017-07-15T21:24:46+00:00",
                "createdAt": "2017-05-11T15:34:08+00:00",
                "deadstockSoldRank": 72,
                "pricePremiumRank": 55,
                "averageDeadstockPriceRank": 44
            },
            "_tags": [
                "air jordan",
                "one",
                "product"
            ],
            "objectID": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
            "_highlightResult": {
                "id": {
                    "value": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "Jordan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "Air Jordan One",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Black/Varsity Maize-White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-1-Retro-Mid-New-Love-2017.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "New Love (2017)",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-06-01 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Jordan 1 Retro Mid",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Air-Jordan-1-Retro-Mid-New-Love-2017",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "554724-035",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "AJ1M-NEWLOVE17",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Jordan 1 Retro Mid New Love (2017)",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Black/Varsity Maize-White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "554724-035",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-06-01",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "air-jordan-1-retro-mid-new-love-2017",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "307cbc0c-7e39-48e4-9ad1-6b5a59c92899",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:24:46+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-05-11T15:34:08+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "air jordan",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "one",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
            "uuid": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
            "brand": "adidas",
            "breadcrumbs": [],
            "category": "adidas Ultra Boost",
            "charityCondition": 0,
            "childId": null,
            "colorway": "White/Core Black",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Oreo",
            "productCategory": "sneakers",
            "releaseDate": "2017-02-01 23:59:59",
            "releaseTime": 1485907200,
            "retailPrice": 180,
            "shoe": "Adidas Ultra Boost 3.0",
            "shortDescription": "Adidas-Ultra-Boost-3pt0-Oreo",
            "styleId": "S80636",
            "tickerSymbol": "ADIULBST3-OREO",
            "title": "Adidas Ultra Boost 3.0 Oreo",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "White/Core Black",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 180,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "S80636",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-02-01",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-ultra-boost-3pt0-oreo",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
                "lowestAsk": 195,
                "salesThisPeriod": 91,
                "salesLastPeriod": 0,
                "highestBid": 211,
                "annualHigh": 344,
                "annualLow": 165,
                "deadstockRangeLow": 206,
                "deadstockRangeHigh": 234,
                "volatility": 0.063314,
                "deadstockSold": 3221,
                "pricePremium": 0.222,
                "averageDeadstockPrice": 244,
                "lastSale": 220,
                "salesLast72Hours": 91,
                "changeValue": 5,
                "changePercentage": 0.023256,
                "absChangePercentage": 0.023256,
                "updatedAt": 1500154594,
                "lastLowestAskTime": 1499999605,
                "lastHighestBidTime": 1500135848,
                "lastSaleDate": "2017-07-15T21:30:40+00:00",
                "createdAt": "2017-01-20T15:05:59+00:00",
                "deadstockSoldRank": 36,
                "pricePremiumRank": 65,
                "averageDeadstockPriceRank": 94
            },
            "_tags": [
                "adidas",
                "ultra boost",
                "product"
            ],
            "objectID": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
            "_highlightResult": {
                "id": {
                    "value": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas Ultra Boost",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "White/Core Black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Oreo.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Oreo",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-02-01 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas Ultra Boost 3.0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-Ultra-Boost-3pt0-Oreo",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "S80636",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "ADIULBST3-OREO",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas Ultra Boost 3.0 Oreo",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "White/Core Black",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "S80636",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-02-01",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-ultra-boost-3pt0-oreo",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "3b8e6431-4fb1-459d-b93d-75fdac6dafab",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:30:40+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-01-20T15:05:59+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ultra boost",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
            "uuid": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
            "brand": "adidas",
            "breadcrumbs": [],
            "category": "adidas NMD",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Core Black/Core Black/Footwear White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "OG Black",
            "productCategory": "sneakers",
            "releaseDate": "2017-05-20 23:59:59",
            "releaseTime": 1495238400,
            "retailPrice": 150,
            "shoe": "Adidas NMD XR1",
            "shortDescription": "Adidas-NMD-XR1-OG-Black",
            "styleId": "BY1909",
            "tickerSymbol": "ADINMDX-OGBLK",
            "title": "Adidas NMD XR1 OG Black",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Core Black/Core Black/Footwear White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 150,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "BY1909",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-05-20",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-nmd-xr1-og-black",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
                "lowestAsk": 150,
                "salesThisPeriod": 88,
                "salesLastPeriod": 0,
                "highestBid": 161,
                "annualHigh": 317,
                "annualLow": 122,
                "deadstockRangeLow": 142,
                "deadstockRangeHigh": 184,
                "volatility": 0.126285,
                "deadstockSold": 1430,
                "pricePremium": 0.087,
                "averageDeadstockPrice": 191,
                "lastSale": 163,
                "salesLast72Hours": 88,
                "changeValue": 8,
                "changePercentage": 0.051613,
                "absChangePercentage": 0.051613,
                "updatedAt": 1500155003,
                "lastLowestAskTime": 1500135131,
                "lastHighestBidTime": 1500083473,
                "lastSaleDate": "2017-07-15T21:43:38+00:00",
                "createdAt": "2017-04-27T21:57:59+00:00",
                "deadstockSoldRank": 53,
                "pricePremiumRank": 18,
                "averageDeadstockPriceRank": 61
            },
            "_tags": [
                "adidas",
                "nmd",
                "product"
            ],
            "objectID": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
            "_highlightResult": {
                "id": {
                    "value": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas NMD",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Core Black/Core Black/Footwear White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "OG Black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-05-20 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas NMD XR1",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-NMD-XR1-OG-Black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "BY1909",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "ADINMDX-OGBLK",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas NMD XR1 OG Black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Core Black/Core Black/Footwear White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "BY1909",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-05-20",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-nmd-xr1-og-black",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "fa12c598-6726-4f7b-9f6c-3d1e5229bdb3",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:43:38+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-04-27T21:57:59+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "nmd",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
            "uuid": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
            "brand": "Jordan",
            "breadcrumbs": [],
            "category": "Air Jordan Eleven",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Black/Dark Concord-White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Space Jam (2016)",
            "productCategory": "sneakers",
            "releaseDate": "2016-12-10 23:59:59",
            "releaseTime": 1481328000,
            "retailPrice": 220,
            "shoe": "Jordan 11 Retro",
            "shortDescription": "Air-Jordan-11-Retro-Space-Jam-2016",
            "styleId": "378037-003",
            "tickerSymbol": "AJ11-SPCJAM16",
            "title": "Jordan 11 Retro Space Jam (2016)",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Black/Dark Concord-White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 220,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "378037-003",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2016-12-10",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "jordan-11-retro-space-jams-2016",
            "year": 2016,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
                "lowestAsk": 250,
                "salesThisPeriod": 74,
                "salesLastPeriod": 0,
                "highestBid": 260,
                "annualHigh": 522,
                "annualLow": 200,
                "deadstockRangeLow": 245,
                "deadstockRangeHigh": 303,
                "volatility": 0.106982,
                "deadstockSold": 5885,
                "pricePremium": 0.245,
                "averageDeadstockPrice": 321,
                "lastSale": 274,
                "salesLast72Hours": 74,
                "changeValue": 19,
                "changePercentage": 0.07451,
                "absChangePercentage": 0.07451,
                "updatedAt": 1500154639,
                "lastLowestAskTime": 1500129286,
                "lastHighestBidTime": 1500150766,
                "lastSaleDate": "2017-07-15T21:33:13+00:00",
                "createdAt": "2016-06-16T18:00:52+00:00",
                "deadstockSoldRank": 54,
                "pricePremiumRank": 1,
                "averageDeadstockPriceRank": 82
            },
            "_tags": [
                "air jordan",
                "eleven",
                "product"
            ],
            "objectID": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
            "_highlightResult": {
                "id": {
                    "value": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "Jordan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "Air Jordan Eleven",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Black/Dark Concord-White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Space-Jam-2016.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Space Jam (2016)",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2016-12-10 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Jordan 11 Retro",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Air-Jordan-11-Retro-Space-Jam-2016",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "378037-003",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "AJ11-SPCJAM16",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Jordan 11 Retro Space Jam (2016)",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Black/Dark Concord-White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "378037-003",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2016-12-10",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "jordan-11-retro-space-jams-2016",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "5ee9da0d-d10a-4d5f-9b2c-6e170ac87aaf",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:33:13+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2016-06-16T18:00:52+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "air jordan",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "eleven",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
            "uuid": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
            "brand": "Jordan",
            "breadcrumbs": [],
            "category": "Air Jordan Eleven",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Black/Metallic Silver-White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Barons",
            "productCategory": "sneakers",
            "releaseDate": "2017-05-27 23:59:59",
            "releaseTime": 1495843200,
            "retailPrice": 175,
            "shoe": "Jordan 11 Retro Low",
            "shortDescription": "Air-Jordan-11-Retro-Low-Barons",
            "styleId": "528895-010",
            "tickerSymbol": "AJ11L-BRNS",
            "title": "Jordan 11 Retro Low Barons",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Black/Metallic Silver-White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 175,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "528895-010",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "Release Date",
                    "value": "2017-05-27",
                    "filterable": true,
                    "visible": true,
                    "format": "date"
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "air-jordan-11-retro-low-barons",
            "year": 2017,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
                "lowestAsk": 160,
                "salesThisPeriod": 69,
                "salesLastPeriod": 0,
                "highestBid": 161,
                "annualHigh": 375,
                "annualLow": 100,
                "deadstockRangeLow": 142,
                "deadstockRangeHigh": 188,
                "volatility": 0.141302,
                "deadstockSold": 1255,
                "pricePremium": -0.057,
                "averageDeadstockPrice": 205,
                "lastSale": 165,
                "salesLast72Hours": 69,
                "changeValue": -24,
                "changePercentage": -0.126984,
                "absChangePercentage": 0.126984,
                "updatedAt": 1500150283,
                "lastLowestAskTime": 1500080926,
                "lastHighestBidTime": 1500067995,
                "lastSaleDate": "2017-07-15T21:32:10+00:00",
                "createdAt": "2017-02-09T15:14:31+00:00",
                "deadstockSoldRank": 64,
                "pricePremiumRank": 7,
                "averageDeadstockPriceRank": 70
            },
            "_tags": [
                "air jordan",
                "eleven",
                "product"
            ],
            "objectID": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
            "_highlightResult": {
                "id": {
                    "value": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "Jordan",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "Air Jordan Eleven",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Black/Metallic Silver-White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Barons.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Barons",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "releaseDate": {
                    "value": "2017-05-27 23:59:59",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Jordan 11 Retro Low",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Air-Jordan-11-Retro-Low-Barons",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "528895-010",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "AJ11L-BRNS",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Jordan 11 Retro Low Barons",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Black/Metallic Silver-White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "528895-010",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Release Date",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "2017-05-27",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "date",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "air-jordan-11-retro-low-barons",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "41fe6e8b-6612-4d04-82b3-ee67485c2c86",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T21:32:10+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-02-09T15:14:31+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "air jordan",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "eleven",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        },
        {
            "id": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
            "uuid": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
            "brand": "adidas",
            "breadcrumbs": [],
            "category": "adidas Ultra Boost",
            "charityCondition": 0,
            "childId": null,
            "colorway": "Mystery Grey/Core Black-Running White",
            "condition": "deadstock",
            "countryOfManufacture": null,
            "dataType": "product",
            "description": null,
            "hidden": false,
            "ipoDate": null,
            "minimumBid": 25,
            "doppelgangers": [],
            "media": {
                "imageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                "smallImageUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                "thumbUrl": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                "gallery": []
            },
            "name": "Mystery Grey",
            "productCategory": "sneakers",
            "releaseDate": null,
            "releaseTime": null,
            "retailPrice": 180,
            "shoe": "Adidas Ultra Boost 3.0",
            "shortDescription": "Adidas-Ultra-Boost-3pt0-Mystery-Grey",
            "styleId": "BA8849",
            "tickerSymbol": "ADIULBST3-MYSTRYGRY",
            "title": "Adidas Ultra Boost 3.0 Mystery Grey",
            "traits": [
                {
                    "name": "Colorway",
                    "value": "Mystery Grey/Core Black-Running White",
                    "filterable": false,
                    "visible": true
                },
                {
                    "name": "Retail Price",
                    "value": 180,
                    "filterable": true,
                    "visible": true,
                    "format": "currency"
                },
                {
                    "name": "Style",
                    "value": "BA8849",
                    "filterable": true,
                    "visible": true
                },
                {
                    "name": "condition",
                    "value": "deadstock",
                    "filterable": false,
                    "visible": false
                }
            ],
            "type": 0,
            "urlKey": "adidas-ultra-boost-3-mystery-grey",
            "year": null,
            "shoeSize": null,
            "market": {
                "productId": 0,
                "skuUuid": null,
                "productUuid": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
                "lowestAsk": 165,
                "salesThisPeriod": 68,
                "salesLastPeriod": 0,
                "highestBid": 180,
                "annualHigh": 313,
                "annualLow": 110,
                "deadstockRangeLow": 138,
                "deadstockRangeHigh": 192,
                "volatility": 0.161401,
                "deadstockSold": 797,
                "pricePremium": -0.083,
                "averageDeadstockPrice": 219,
                "lastSale": 165,
                "salesLast72Hours": 68,
                "changeValue": 20,
                "changePercentage": 0.137931,
                "absChangePercentage": 0.137931,
                "updatedAt": 1500152654,
                "lastLowestAskTime": 1500039029,
                "lastHighestBidTime": 1500131952,
                "lastSaleDate": "2017-07-15T20:30:14+00:00",
                "createdAt": "2017-03-21T16:37:16+00:00",
                "deadstockSoldRank": 97,
                "pricePremiumRank": 39,
                "averageDeadstockPriceRank": 47
            },
            "_tags": [
                "adidas",
                "ultra boost",
                "product"
            ],
            "objectID": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
            "_highlightResult": {
                "id": {
                    "value": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "uuid": {
                    "value": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "brand": {
                    "value": "adidas",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "category": {
                    "value": "adidas Ultra Boost",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "colorway": {
                    "value": "Mystery Grey/Core Black-Running White",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "condition": {
                    "value": "deadstock",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "dataType": {
                    "value": "product",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "media": {
                    "imageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "smallImageUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=600&h=428&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "thumbUrl": {
                        "value": "https://stockx.imgix.net/Adidas-Ultra-Boost-3-Mystery-Grey.png?fit=fill&bg=FFFFFF&w=280&h=200&auto=format&trim=color",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "name": {
                    "value": "Mystery Grey",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "productCategory": {
                    "value": "sneakers",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shoe": {
                    "value": "Adidas Ultra Boost 3.0",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "shortDescription": {
                    "value": "Adidas-Ultra-Boost-3pt0-Mystery-Grey",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "styleId": {
                    "value": "BA8849",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "tickerSymbol": {
                    "value": "ADIULBST3-MYSTRYGRY",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "title": {
                    "value": "Adidas Ultra Boost 3.0 Mystery Grey",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "traits": [
                    {
                        "name": {
                            "value": "Colorway",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "Mystery Grey/Core Black-Running White",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Retail Price",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "format": {
                            "value": "currency",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "Style",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "BA8849",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    },
                    {
                        "name": {
                            "value": "condition",
                            "matchLevel": "none",
                            "matchedWords": []
                        },
                        "value": {
                            "value": "deadstock",
                            "matchLevel": "none",
                            "matchedWords": []
                        }
                    }
                ],
                "urlKey": {
                    "value": "adidas-ultra-boost-3-mystery-grey",
                    "matchLevel": "none",
                    "matchedWords": []
                },
                "market": {
                    "productUuid": {
                        "value": "6a6c773c-9117-4a82-a0f0-8f5d9b8f5d91",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "lastSaleDate": {
                        "value": "2017-07-15T20:30:14+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    "createdAt": {
                        "value": "2017-03-21T16:37:16+00:00",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                },
                "_tags": [
                    {
                        "value": "adidas",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "ultra boost",
                        "matchLevel": "none",
                        "matchedWords": []
                    },
                    {
                        "value": "product",
                        "matchLevel": "none",
                        "matchedWords": []
                    }
                ]
            }
        }
        ];
});