
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {name: 'carne asada', dish_id: 1},
        {name: 'beef', dish_id: 1},
        {name: 'pork', dish_id: 1}
      ]);
    });
};
