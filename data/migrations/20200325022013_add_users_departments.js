exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users.string("departments", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", users => {
    users.dropColumn("departments");
  });
};
