module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable'users', { id: Sequelize.INTEGER } },
     */
    await queryInterface.bulkInsert('colors', [
      { name: 'Antique Lavender' },
      { name: 'Antique Pink' },
      { name: 'Apple Green' },
      { name: 'Assorted' },
      { name: 'Beige/Lavender' },
      { name: 'Beige/Pink' },
      { name: 'Black' },
      { name: 'Blue' },
      { name: 'Blue/Green' },
      { name: 'Blue/Purple' },
      { name: 'Blue/White' },
      { name: 'Blush' },
      { name: 'Blush/Peach' },
      { name: 'Blush/Pink' },
      { name: 'Bright Green' },
      { name: 'Bronze' },
      { name: 'Brown' },
      { name: 'Burgundy' },
      { name: 'Burgundy/Red' },
      { name: 'Burgundy/White' },
      { name: 'Burgundy/Yellow' },
      { name: 'Butterscotch' },
      { name: 'Champagne' },
      { name: 'Chocolate' },
      { name: 'Copper' },
      { name: 'Coral' },
      { name: 'Cream' },
      { name: 'Cream/Blush' },
      { name: 'Cream/Orange' },
      { name: 'Cream/Peach' },
      { name: 'Cream/Pink' },
      { name: 'Dark Blue' },
      { name: 'Dark Green' },
      { name: 'Dark Orange' },
      { name: 'Dark Peach' },
      { name: 'Dark Pink' },
      { name: 'Dark Purple' },
      { name: 'Dark Red' },
      { name: 'Dark White' },
      { name: 'Dark Yellow' },
      { name: 'Deep Purple' },
      { name: 'Dyed Blue' },
      { name: 'Dyed Green' },
      { name: 'Dyed Orange' },
      { name: 'Dyed Peach' },
      { name: 'Dyed Red' },
      { name: 'Dyed Yellow' },
      { name: 'Fuchsia' },
      { name: 'Gold' },
      { name: 'Gold/Yellow' },
      { name: 'Gold/Pink' },
      { name: 'Gray' },
      { name: 'Green' },
      { name: 'Grey' },
      { name: 'Hot Pink' },
      { name: 'Hot Pink/Cream' },
      { name: 'Hot Pink/Purple' },
      { name: 'Hot Pink/White' },
      { name: 'Ivory' },
      { name: 'Lavender' },
      { name: 'Lavender/Blue' },
      { name: 'Lavender/Green' },
      { name: 'Lavender/Pink' },
      { name: 'Lavender Variegated' },
      { name: 'Lavender/White' },
      { name: 'Light Pink' },
      { name: 'Light Blue' },
      { name: 'Light Blue/White' },
      { name: 'Light Brown' },
      { name: 'Light Green' },
      { name: 'Light Green/Pink' },
      { name: 'Light Green/White' },
      { name: 'Light Lavender' },
      { name: 'Light Orange' },
      { name: 'Light Peach' },
      { name: 'Light Pink' },
      { name: 'Light Pink Blush' },
      { name: 'Light Purple' },
      { name: 'Light Red' },
      { name: 'Light Yellow' },
      { name: 'Lime Green' },
      { name: 'Magenta' },
      { name: 'Wine Red/Marsala' },
      { name: 'Mauve' },
      { name: 'Mauve/Lavender' },
      { name: 'Medium Pink' },
      { name: 'Mint Green' },
      { name: 'Natural' },
      { name: 'Natural Red' },
      { name: 'Orange' },
      { name: 'Orange/Pink' },
      { name: 'Orange/Red' },
      { name: 'Orange/White' },
      { name: 'Orange/Yellow' },
      { name: 'Peach' },
      { name: 'Peach/Red' },
      { name: 'Peppermint' },
      { name: 'Periwinkle' },
      { name: 'Pink' },
      { name: 'Pink/Green' },
      { name: 'Pink/Peach' },
      { name: 'Pink/Red' },
      { name: 'Pink Variegated' },
      { name: 'Pink/White' },
      { name: 'Pink/White Variegated' },
      { name: 'Pink/Yellow' },
      { name: 'Platinum' },
      { name: 'Purple' },
      { name: 'Purple Shades' },
      { name: 'Purple/Brown' },
      { name: 'Purple/Green' },
      { name: 'Purple/Lavender' },
      { name: 'Purple Variegated' },
      { name: 'Raspberry' },
      { name: 'Red' },
      { name: 'Red/Cream' },
      { name: 'Red/Gold' },
      { name: 'Red/Green' },
      { name: 'Red Variegated' },
      { name: 'Red/White' },
      { name: 'Red/Yellow' },
      { name: 'Rose Gold' },
      { name: 'Rust' },
      { name: 'Salmon' },
      { name: 'Salmon/Pink' },
      { name: 'Silver' },
      { name: 'Silver/Light Lavender' },
      { name: 'Spring Green' },
      { name: 'Teal' },
      { name: 'Terra Peach' },
      { name: 'Tinted Copper' },
      { name: 'Tinted Gold' },
      { name: 'Tinted Light Brown' },
      { name: 'Tinted Red' },
      { name: 'Turquoise' },
      { name: 'Violet' },
      { name: 'White' },
      { name: 'White/Purple' },
      { name: 'White/Black' },
      { name: 'White/Burgundy' },
      { name: 'White/Green' },
      { name: 'White/Purple' },
      { name: 'White/Yellow' },
      { name: 'Yellow' },
      { name: 'Yellow/Black' },
      { name: 'Yellow/Pink' },
      { name: 'Yellow/Purple' },
      { name: 'Zero Fucks Given' },
    ])

    await queryInterface.bulkInsert('seasons', [
      { season: 'spring', note: '' },
      { season: 'spring/summer', note: '' },
      { season: 'spring/summer/fall', note: '' },
      { season: 'summer', note: '' },
      { season: 'summer/fall', note: '' },
      { season: 'summer/fall/winter', note: '' },
      { season: 'fall', note: '' },
      { season: 'fall/winter', note: '' },
      { season: 'fall/winter/spring', note: '' },
      { season: 'winter', note: '' },
      { season: 'winter/spring', note: '' },
      { season: 'winter/spring/summer', note: ''},
      { season: 'yearRound', note: '' },
    ])

    await queryInterface.bulkInsert('flowers', [
      { name: 'Acacia Cultiflormis', seasonId: 5 },
      { name: 'Agonis', seasonId: 5 },
      { name: 'Alstroemeria', seasonId: 2 },
      { name: 'Amaranthus', seasonId:	1 },
      { name: 'Amaranthus', seasonId:	2
      { name: 'Amaranthus', seasonId:	1,2
      { name: 'Amaranthus', seasonId:	1,2
      { name: 'Anemone', seasonId:	2,4
      { name: 'Anemone', seasonId:	2,4
      { name: 'Anemone', seasonId:	2,4
      { name: 'Anemone', seasonId:	2,4
      { name: 'Artichoke', seasonId: Baby	1,4
      { name: 'Artichoke', seasonId: Baby	1,4
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Matsumoto', seasonId:	1
      { name: 'Aster Montecasino', seasonId:	1
      { name: 'Aster Montecasino', seasonId:	1
      { name: 'Bells Of Ireland', seasonId:	1,4
      { name: 'Bupleurum', seasonId:	1,2
      { name: 'Carnation Fancy', seasonId:	5
      { name: 'Carnation Fancy', seasonId:	5
      { name: 'Carnation Fancy', seasonId:	5
      { name: 'Carnation Mini', seasonId:	5
      { name: 'Chamomile', seasonId: 	5
      { name: 'China Mum', seasonId:	1,2,4
      { name: 'China Mum', seasonId:	1,2,4
      { name: 'China Mum', seasonId: 	1,2,4
      { name: 'Cornflower', seasonId:	4
      { name: 'Craspedia', seasonId:	1,4
      { name: 'Cremone', seasonId:	3
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidium', seasonId:	1,3,4
      { name: 'Cymbidiums', seasonId:	1,3,4
      { name: 'Dahlia', seasonId:	1, 4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Dahlia', seasonId:	1,4
      { name: 'Cosmos Chocolate', seasonId:	1,2
      { name: 'Cosmos Chocolate', seasonId:	1,2
      { name: 'Delph Belladonna 60cm', seasonId:	4
      { name: 'Delph Belladonna 60cm', seasonId:	4
      { name: 'Delph Belladonna 70cm', seasonId:	4
      { name: 'Delph Belladonna 70cm', seasonId:	4
      { name: 'Delph Belladonna 80cm', seasonId:	4
      { name: 'Delph', seasonId:	4
      { name: 'Delph', seasonId:	4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Delph-Hybrid', seasonId:	1,4
      { name: 'Dianthus Gypsy', seasonId:	1
      { name: 'Dianthus Gypsy', seasonId:	1
      { name: 'Dianthus Gypsy', seasonId:	1
      { name: 'Dianthus Gypsy', seasonId:	1
      { name: 'Dianthus Gypsy', seasonId:	1
      { name: 'Dianthus', seasonId:	1
      { name: 'Eryngium', seasonId:	1,2
      { name: 'Fuji/spider', seasonId: 	1,4
      { name: 'Garden Roses', seasonId: 	1,4
      { name: 'Gardenia', seasonId: 	1,4
      { name: 'Gardenia', seasonId: 	1,4
      { name: 'Genestra', seasonId:	1
      { name: 'Genestra', seasonId:	1
      { name: 'Gerber', seasonId:	3
      { name: 'Gerber Gerrondo', seasonId:	2,3
      { name: 'Gerber Mini', seasonId:	2,3
      { name: 'Gladiolas', seasonId:	1,2
      { name: 'Green Mist', seasonId:	1,2,4
      { name: 'Gypsophila', seasonId:	1,2,4
      { name: 'Gypsophila', seasonId:	1,2,4
      { name: 'Heather', seasonId:	1,4
      { name: 'Heather', seasonId:	1,4
      { name: 'Heleborus', seasonId: 	3,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea', seasonId:	1,4
      { name: 'Hydrangea Local', seasonId:	1,4
      { name: 'Hydrangea Local', seasonId:	1,4
      { name: 'Hypericum 70cm', seasonId:	1,2
      { name: 'Kale Clover', seasonId:	5
      { name: 'Kale Mini Frilly', seasonId:	5
      { name: 'Kale Mini Frilly', seasonId:	5
      { name: 'Kale Mini', seasonId: 	5
      { name: 'Kale Mini', seasonId:	5
      { name: 'Kale Mini', seasonId:	5
      { name: 'Kale Rosette', seasonId:	5
      { name: 'Kale Rosette', seasonId:	5
      { name: 'Kale Rosette', seasonId:	5
      { name: 'Kale Ruffled', seasonId:	5
      { name: 'Kale Frilly', seasonId:	5
      { name: 'Kale Frilly', seasonId:	5
      { name: 'Kale Large', seasonId:	5
      { name: 'Kale Large', seasonId:	5
      { name: 'Kale Toy Lacey', seasonId:	5
      { name: 'Kale Toy Lacey', seasonId:	5
      { name: 'Kochia', seasonId:	5
      { name: 'Larkspur', seasonId:	1,4
      { name: 'Lily Asiatic', seasonId:	2,3
      { name: 'Lily Oriental', seasonId:	4
      { name: 'Lily Oriental', seasonId:	4
      { name: 'Lily Oriental', seasonId:	4
      { name: 'Limonium', seasonId:	1,4
      { name: 'Lisanthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Lisianthus', seasonId:	1,4
      { name: 'Narcisuss', seasonId:	3,4
      { name: 'Narcisuss', seasonId:	3,4
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Orchid', seasonId:	5
      { name: 'Phlox', seasonId:	3,4
      { name: 'Pompon', seasonId:	4
      { name: 'Protea', seasonId: 	5
      { name: 'Protea', seasonId:	5
      { name: 'Queen Annes Lace', seasonId:	2,3
      { name: 'Queen Annes Lace', seasonId:	2,3
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Ranunculus Elegance', seasonId:	4
      { name: 'Rannunclus', seasonId:	4
      { name: 'Ranuncules Local Hybrid', seasonId:	4
      { name: 'Ranunculus Clooney', seasonId:	4
      { name: 'Ranunculus Clooney', seasonId:	4
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Rose', seasonId:	5
      { name: 'Scabiosa Scoop', seasonId:	1,2
      { name: 'Scabiosa Scoop', seasonId:	1,2
      { name: 'Scabiosa Scoop', seasonId:	1,2
      { name: 'Scabiosa', seasonId:	1,2
      { name: 'Snapdragon', seasonId:	2,3,4
      { name: 'Solidago', seasonId: 	2,4
      { name: 'Solidago Import', seasonId:	2,4
      { name: 'Spray Rose', seasonId:	5
      { name: 'Spray Rose Garden', seasonId:	5
      { name: 'Spray Roses 40/50 Cm', seasonId:	5
      { name: 'Statice Sinuata', seasonId:	5
      { name: 'Statica Sinuata', seasonId:	5
      { name: 'Statice Sinuata', seasonId:	5
      { name: 'Statice Sinuata', seasonId:	5
      { name: 'Statice Sinuata', seasonId:	5
      { name: 'Stock', seasonId:	4
      { name: 'Statice Sinuata', seasonId:	4
      { name: 'Statice Sinuata', seasonId:	4
      { name: 'Statice Sinuata', seasonId:	4
      { name: 'Sunflower Mini', seasonId:	2,3
      { name: 'Sunflower', seasonId: 	2,3
      { name: 'Sweet peas', seasonId: 	4
      { name: 'Tulip', seasonId: 	4
      { name: 'Tulip', seasonId: 	4
      { name: 'Tulip', seasonId: 	4
      { name: 'Tulip', seasonId: 	4
      { name: 'Tweedia', seasonId:	1,2
      { name: 'Tweedia', seasonId:	1,2
      { name: 'Veronica', seasonId:	1,2,4
      { name: 'Veronica', seasonId:	1,2,4
      { name: 'Viburnum Tinus', seasonId:	5
      { name: 'Wax Hybrid', seasonId:	4
      { name: 'Wax Hybrid', seasonId:	4
      { name: 'Wax Hybrid', seasonId:	4
      { name: 'Wax Regular', seasonId:	4
      { name: 'Wax Regular', seasonId:	4
      { name: 'Wax Regular', seasonId:	4
    ])

    return queryInterface.bulkInsert('flowersColors', [
      { flowerId: 1, colorId: 53 },
      { flowerId: 2, colorId: 18 },
      { flowerId: 3, colorId: 4 },
      { flowerId: 4, colorId: 53 },
      { flowerId: 5, colorId: 115 },
      { flowerId: 6, colorId: 16 },
      { flowerId: 7, colorId: 115 },
      { flowerId: 8, colorId: 8 },
      { flowerId: 9, colorId: 82 },
      { flowerId: 10, colorId: 115 },
      { flowerId: 11, colorId: 137 },
      { flowerId: 12, colorId: 18 },
      { flowerId: 13, colorId: 53 },
      { flowerId: 14, colorId: 36 },
      { flowerId: 15, colorId: 99 },
      { flowerId: 16, colorId: 108 },
      { flowerId: 17, colorId: 115 },
      { flowerId: 18, colorId: 137 },
      { flowerId: 19, colorId: 95 },
      { flowerId: 20, colorId: 60 },
      { flowerId: 21, colorId: 108 },
      { flowerId: 22, colorId: 137 },
      { flowerId: 23, colorId: 53 },
      { flowerId: 24, colorId: 53 },
      { flowerId: 25, colorId: 4 },
      { flowerId: 26, colorId: 99 },
      { flowerId: 27, colorId: 144 },
      { flowerId: 28, colorId: 4 },
      { flowerId: 29, colorId: 137 },
      { flowerId: 30, colorId: 137 },
      { flowerId: 31, colorId: 144 },
      { flowerId: 32, colorId: 108 },
      { flowerId: 33, colorId: 8 },
      { flowerId: 34, colorId: 144 },
      { flowerId: 35, colorId: 4 },
      { flowerId: 36, colorId: 17 },
      { flowerId: 37, colorId: 90 },
      { flowerId: 38, colorId: 115 },
      { flowerId: 39, colorId: 53 },
      { flowerId: 40, colorId: 144 },
      { flowerId: 41, colorId: 137 },
      { flowerId: 42, colorId: 99 },
      { flowerId: 43, colorId: 24 },
      { flowerId: 44, colorId: 18 },
      { flowerId: 45, colorId: 115 },
      { flowerId: 46, colorId: 137 },
      { flowerId: 46, colorId: 137 },
      { flowerId: 47, colorId: 17 },
      { flowerId: 48, colorId: 60 },
      { flowerId: 49, colorId: 90 },
      { flowerId: 50, colorId: 17 },
      { flowerId: 51, colorId: 24 },
      { flowerId: 52, colorId: 32 },
      { flowerId: 53, colorId: 68 },
      { flowerId: 54, colorId: 32 },
      { flowerId: 55, colorId: 68 },
      { flowerId: 56, colorId: 137 },
      { flowerId: 57, colorId: 32 },
      { flowerId: 58, colorId: 68 },
      { flowerId: 59, colorId: 108 },
      { flowerId: 60, colorId: 137 },
      { flowerId: 61, colorId: 8 },
      { flowerId: 62, colorId: 99 },
      { flowerId: 63, colorId: 60 },
      { flowerId: 64, colorId: 84 },
      { flowerId: 65, colorId: 32 },
      { flowerId: 66, colorId: 4 },
      { flowerId: 67, colorId: 55 },
      { flowerId: 68, colorId: 99 },
      { flowerId: 69, colorId: 108 },
      { flowerId: 70, colorId: 115 },
      { flowerId: 71, colorId: 124 },
      { flowerId: 72, colorId: 53 },
      { flowerId: 73, colorId: 8 },
      { flowerId: 74, colorId: 4 },
      { flowerId: 75, colorId: 4 },
      { flowerId: 76, colorId: 53 },
      { flowerId: 77, colorId: 137 },
      { flowerId: 78, colorId: 137 },
      { flowerId: 79, colorId: 99 },
      { flowerId: 80, colorId: 4 },
      { flowerId: 81, colorId: 4 },
      { flowerId: 82, colorId: 4 },
      { flowerId: 83, colorId: 4 },
      { flowerId: 84, colorId: 137 },
      { flowerId: 85, colorId: 137 },
      { flowerId: 86, colorId: 8 },
      { flowerId: 87, colorId: 55 },
      { flowerId: 88, colorId: 137 },
      { flowerId: 89, colorId: 53 },
      { flowerId: 90, colorId: 32 },
      { flowerId: 91, colorId: 33 },
      { flowerId: 92, colorId: 53 },
      { flowerId: 93, colorId: 70 },
      { flowerId: 94, colorId: 137 },
      { flowerId: 95, colorId: 137 },
      { flowerId: 96, colorId: 53 },
      { flowerId: 97, colorId: 99 },
      { flowerId: 98, colorId: 4 },
      { flowerId: 99, colorId: 53 },
      { flowerId: 100, colorId: 99 },
      { flowerId: 101, colorId: 108 },
      { flowerId: 102, colorId: 99 },
      { flowerId: 103, colorId: 108 },
      { flowerId: 104, colorId: 137 },
      { flowerId: 105, colorId: 99 },
      { flowerId: 106, colorId: 108 },
      { flowerId: 107, colorId: 137 },
      { flowerId: 108, colorId: 108 },
      { flowerId: 109, colorId: 99 },
      { flowerId: 110, colorId: 108 },
      { flowerId: 111, colorId: 108 },
      { flowerId: 112, colorId: 137 },
      { flowerId: 113, colorId: 99 },
      { flowerId: 114, colorId: 108 },
      { flowerId: 115, colorId: 54 },
      { flowerId: 116, colorId: 4 },
      { flowerId: 117, colorId: 4 },
      { flowerId: 118, colorId: 99 },
      { flowerId: 119, colorId: 137 },
      { flowerId: 120, colorId: 115 },
      { flowerId: 121, colorId: 4 },
      { flowerId: 122, colorId: 137 },
      { flowerId: 123, colorId: 76 },
      { flowerId: 124, colorId: 23 },
      { flowerId: 125, colorId: 53 },
      { flowerId: 126, colorId: 99 },
      { flowerId: 127, colorId: 108 },
      { flowerId: 128, colorId: 14 },
      { flowerId: 129, colorId: 144 },
      { flowerId: 130, colorId: 144 },
      { flowerId: 131, colorId: 137 },
      { flowerId: 132, colorId: 8 },
      { flowerId: 133, colorId: 108 },
      { flowerId: 134, colorId: 115 },
      { flowerId: 135, colorId: 99 },
      { flowerId: 136, colorId: 137 },
      { flowerId: 137, colorId: 144 },
      { flowerId: 138, colorId: 90 },
      { flowerId: 139, colorId: 53 },
      { flowerId: 140, colorId: 137 },
      { flowerId: 141, colorId: 4 },
      { flowerId: 142, colorId: 76 },
      { flowerId: 143, colorId: 36 },
      { flowerId: 144, colorId: 137 },
      { flowerId: 145, colorId: 24 },
      { flowerId: 146, colorId: 137 },
      { flowerId: 147, colorId: 99 },
      { flowerId: 148, colorId: 115 },
      { flowerId: 149, colorId: 144 },
      { flowerId: 150, colorId: 90 },
      { flowerId: 151, colorId: 41 },
      { flowerId: 152, colorId: 4 },
      { flowerId: 153, colorId: 4 },
      { flowerId: 154, colorId: 4 },
      { flowerId: 155, colorId: 104 },
      { flowerId: 156, colorId: 115 },
      { flowerId: 157, colorId: 137 },
      { flowerId: 158, colorId: 144 },
      { flowerId: 159, colorId: 95 },
      { flowerId: 160, colorId: 99 },
      { flowerId: 161, colorId: 60 },
      { flowerId: 162, colorId: 8 },
      { flowerId: 163, colorId: 7 },
      { flowerId: 164, colorId: 99 },
      { flowerId: 165, colorId: 137 },
      { flowerId: 166, colorId: 4 },
      { flowerId: 167, colorId: 4 },
      { flowerId: 168, colorId: 144 },
      { flowerId: 169, colorId: 79 },
      { flowerId: 170, colorId: 4 },
      { flowerId: 171, colorId: 4 } <
      { flowerId: 172, colorId: 4 },
      { flowerId: 173, colorId: 108 },
      { flowerId: 174, colorId: 8 },
      { flowerId: 175, colorId: 12 },
      { flowerId: 176, colorId: 36 },
      { flowerId: 177, colorId: 60 },
      { flowerId: 178, colorId: 4 },
      { flowerId: 179, colorId: 99 },
      { flowerId: 180, colorId: 108 },
      { flowerId: 181, colorId: 137 },
      { flowerId: 182, colorId: 144 },
      { flowerId: 183, colorId: 144 },
      { flowerId: 184, colorId: 4 },
      { flowerId: 185, colorId: 108 },
      { flowerId: 186, colorId: 137 },
      { flowerId: 187, colorId: 27 },
      { flowerId: 188, colorId: 144 },
      { flowerId: 189, colorId: 8 },
      { flowerId: 190, colorId: 137 },
      { flowerId: 191, colorId: 11 },
      { flowerId: 192, colorId: 137 },
      { flowerId: 193, colorId: 118 },
      { flowerId: 194, colorId: 137 },
      { flowerId: 195, colorId: 99 },
      { flowerId: 196, colorId: 108 },
      { flowerId: 197, colorId: 137 },
      { flowerId: 198, colorId: 99 },
      { flowerId: 199, colorId: 108 },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable'users' },
     */
    await queryInterface.bulkDelete('flowersColors')

    await queryInterface.bulkDelete('flowers')

    await queryInterface.bulkDelete('seasons')

    return queryInterface.bulkDelete('colors')
  },
}
