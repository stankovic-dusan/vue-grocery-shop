import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Fine steak',
          price: '2.30',
          unit: 'kg',
          shortdesc: 'Top quality wagyu beef, grass fed',
          imageUrl: '../assets/images/fine-stake.png',
          favorite: true
        },
        {
          id: 2,
          name: 'Tasty bread',
          price: '2.30',
          unit: 'piece',
          shortdesc: 'Fluffy and fresh, made for your favourite cream',
          imageUrl: '../assets/images/tasty-bread.png'
        },
        {
          id: 3,
          name: 'Choco milk',
          price: '2.30',
          unit: 'piece',
          shortdesc: 'Made by brown cows',
          imageUrl: '../assets/images/choco-milk.png'
        },
        {
          id: 4,
          name: 'Tomatoes',
          price: '2.00',
          unit: 'kg',
          shortdesc: 'Fresh, ripe, ready for a salad',
          imageUrl: '../assets/images/tomatoes.png'
        },
        {
          id: 5,
          name: 'Olive oil',
          price: '5.42',
          unit: 'piece',
          shortdesc: 'Genco Pura Olive Oil Company ',
          imageUrl: '../assets/images/olive-oil.png'
        },
        {
          id: 6,
          name: 'Bananas',
          price: '2.30',
          unit: 'kg',
          shortdesc: 'Imported directly from Banana republic',
          imageUrl: '../assets/images/bananas.png'
        }
      ]
    }
  }
})
