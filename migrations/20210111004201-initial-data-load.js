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
      { season: 'summer', note: '' },
      { season: 'fall', note: '' },
      { season: 'winter', note: '' },
      { season: 'spring', note: '' },
      { season: 'yearRound', note: '' },
    ])

    await queryInterface.bulkInsert('flowers', [
      { name: 'Acacia Cultiflormis', seasonId: 5 },
    ])

    return queryInterface.bulkInsert('flowersColors', [
      { flowerId: 1, colorId: 51 },
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
