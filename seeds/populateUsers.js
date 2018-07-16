
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, name: 'Cliff Robinson', email: 'clifford.f.robinson@gmail.com', img_url:'https://scontent.fakl4-1.fna.fbcdn.net/v/t1.0-9/22815120_10155878735632430_3378138997937798688_n.jpg?_nc_cat=0&oh=012c09276fe1b88d9bcbb5eceb24f498&oe=5BC7DE92', quote:"I'm just thankful for my friends"},
        {user_id: 2, name: 'Alison Brie', email: 'alison@briemium.com', img_url:'https://media.self.com/photos/5a0dd24f7753b02dca52038a/4:3/w_728,c_limit/Alison-Brie.jpg', quote:'Cliff is just the coolest'},
        {user_id: 3, name: 'Natalie Portman', email: 'nataliar@portmanteau.com', img_url:'https://compareceleb.com/uploads/posts/2018-03/1522133803_natalie-portman-height-weight-body-measurements.jpg', quote:'Cliff is my favorite'},
        {user_id: 4, name: 'Emma Stone', email: 'emma@stonecoldkillers.com', img_url:'https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX214_CR0,0,214,317_AL_.jpg', quote:"Is there anyone handsomer than Cliff? If so I haven't met them!"}
      ]);
    });
};


/* Fake user for testing:
  {user_id: 5, name: 'Emma Watson', email: 'emma@elementarymydear.com', 
  img_url:'https://i.pinimg.com/originals/a3/e3/d6/a3e3d67e30105ca1688565e484370ab8.jpg',
  quote:"You don't need to be Sherlock to deduce how amazing Cliff is!"}

*/