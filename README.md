# wedding-flowers-ui

## Requests and Responses

**GET** 'http://localhost:1337/api/colors'

**Response**
```JSON
[{
id: 4,
name: "Assorted",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowers: [
{
id: 3,
name: "Alstroemeria",
seasonId: 7,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowersColors: {
flowerId: 3,
colorId: 4,
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
},
{
id: 22,
name: "Aster Motsumoto",
seasonId: 4,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowersColors: {
flowerId: 22,
colorId: 4,
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
},
{
id: 25,
name: "Carnation Fancy",
seasonId: 13,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowersColors: {
flowerId: 25,
colorId: 4,
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}

**GET** http://localhost:1337/api/flowers

**Response**

```JSON
[{
id: 1,
name: "Acacia Cultiflormis",
seasonId: 1,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
colors: [
{
id: 53,
name: "Green",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
    flowersColors: {
    flowerId: 1,
    colorId: 53,
    createdAt: "2021-07-04T15:54:37.000Z",
    updatedAt: "2021-07-04T15:54:37.000Z"
}
}
],
        season: {
        id: 1,
        season: "spring",
        createdAt: "2021-07-04T15:54:37.000Z",
        updatedAt: "2021-07-04T15:54:37.000Z"
}
},
{
id: 2,
name: "Agonis",
seasonId: 13,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
    colors: [
    {
    id: 137,
    name: "White",
    createdAt: "2021-07-04T15:54:37.000Z",
    updatedAt: "2021-07-04T15:54:37.000Z",
        flowersColors: {
        flowerId: 2,
        colorId: 137,
        createdAt: "2021-07-04T15:54:37.000Z",
        updatedAt: "2021-07-04T15:54:37.000Z"
}
}
],
season: {
id: 13,
season: "yearRound",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
},
{
id: 3,
name: "Alstroemeria",
seasonId: 7,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
colors: [
{
id: 4,
name: "Assorted",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowersColors: {
flowerId: 3,
colorId: 4,
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
}
],
season: {
id: 7,
season: "fall",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
}, ...]

**GET**** 'http://localhost:1337/api/seasons'

**Response**
{
id: 1,
season: "spring",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowers: [
{
id: 1,
name: "Acacia Cultiflormis",
seasonId: 1,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
},
{
id: 51,
name: "Delph Belladonna 60cm",
seasonId: 1,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
},

**GET**** 'http://localhost:1337/api/colors/pink'

**Response**
```JSON
{
id: 2,
name: "Antique Pink",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowers: [ ]
},
{
id: 6,
name: "Beige/Pink",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowers: [ ]
},
{
id: 14,
name: "Blush/Pink",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowers: [
{
id: 126,
name: "Lisianthus",
seasonId: 2,
slug: " ",
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z",
flowersColors: {
flowerId: 126,
colorId: 14,
createdAt: "2021-07-04T15:54:37.000Z",
updatedAt: "2021-07-04T15:54:37.000Z"
}
}
]
},
**GET**** 'http://localhost:1337/api/flowers/ros'

**Response**
```JSON
{
name: "Garden Roses",
seasonId: 2,
slug: " ",
colors: [
{
name: "Assorted"
}
]
},
{
name: "Kale Rosette",
seasonId: 13,
slug: " ",
colors: [
{
name: "Pink"
}
]
},
{
name: "Kale Rosette",
seasonId: 13,
slug: " ",
colors: [
{
name: "White"
}
]
},
{
name: "Rose",
seasonId: 13,
slug: " ",
colors: [
{
name: "Red"
}
]
},
