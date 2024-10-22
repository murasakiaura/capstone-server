/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('pets').del()
    .then(function () {
      return knex('pets').insert([
        {
          type: 'Mammal',
          species: 'Dog',
          breed: 'Pomeranian',
          age: 4,
          location: 'New York',
          image_path: '/images/dog.png'
        },
        {
          type: 'Mammal',
          species: 'Snow Leopard', 
          breed: 'Snow Leopard',
          age: 5,
          location: 'Himalayas',
          image_path: '/images/snowleopard.png'
        },
        {
          type: 'Mammal',
          species: 'Rabbit',
          breed: 'Lionhead',
          age: 1,
          location: 'San Francisco',
          image_path: '/images/rabbit2.png'
        },
        {
          type: 'Mammal',
          species: 'Panda',
          breed: 'Giant Panda',
          age: 5,
          location: 'Chengdu',
          image_path: '/images/panda2.png'
        },
        {
          type: 'Mammal',
          species: 'Tiger',
          breed: 'Bengal Tiger',
          age: 7,
          location: 'Nairobi',
          image_path: '/images/tiger.png'
        },
        {
          type: 'Mammal',
          species: 'Elephant',
          breed: 'Asian Elephant',
          age: 8,
          location: 'Bangkok',
          image_path: '/images/elephant.png'
        }
      ]);
    });
};