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
      { flowerId: 1, colorId: 52 },
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
      37. 90
38. 115
39. 53
40. 144
41. 137
42. 99
43. 24
44. 18
45. 115
46. 137
47. 17
48. 60
49. 90
50. 17
51. 24
52. 32
53. 68
54. 32
55. 68
56. 137
57. 32
58. 68
59. 108
60. 137
61. 8
62. 99
63. 60
64. 84
65. 32
66. 4
67. 55
68. 99
69. 108
70. 115
71. 124
72. 53
73. 8
74. 4
75. 4
76. 53
77. 137
78. 137
79. 99
80. 4
81. 4
82. 4
83. 4
84. 137
85. 137
86. 8
87. 55
88. 137
89. 53
90. 32
91. 33
92. 53
93. 70
94. 137
95. 137
96. 53
97. 99
98. 4
99. 53
100. 99
101. 108
102. 99
103. 108
104. 137
105. 99
106. 108
107. 137
108. 108
109. 99
110. 108
111. 108
112. 137
113. 99
114. 108
115. 54
116. 4
117. 4
118. 99
119. 137
120. 115
121. 4
122. 137
123. 76
124. 23
125. 53
126. 99
127. 108
128. 14
129. 144
130. 144
131. 137
132. 8
133. 108
134. 115
135. 99
136. 137
137. 144
138. 90
139. 53
140. 137
141. 4
142. 76
143. 36
144. 137
145. 24
146. 137
147. 99
148. 115
149. 144
150. 90
151. 41
152. 4
153. 4
154. 4
155. 104
156. 115
157. 137
158. 144
159. 95
160. 99
161. 60
162. 8
163. 7
164. 99
165. 137
166. 4
167. 4
168. 144
169. 79
170. 4
171. 4
172. 4
173. 108
174. 8
175. 12
176. 36
177. 60
178. 4
179. 99
180. 108
181. 137
182. 144
183. 144
184. 4
185. 108
186. 137
187. 27
188. 144
189. 8
190. 137
191. 11
192. 137
193. 118
194. 137
195. 99
196. 108
197. 137
198. 99
199. 108
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
