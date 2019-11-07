exports.up = function(knex) {
  return knex.schema
    .createTable("species", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl
        .integer("species_id")
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
    })
    .createTable("zoos", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("address", 255);
    })
    .createTable("animals_zoos", tbl => {
      tbl.increments();
      tbl
        .integer("zoo_id")
        .unsigned()
        .references("id")
        .inTable("zoos")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      tbl
        .integer("animal_id")
        .unsigned()
        .references("id")
        .inTable("animals")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      tbl.date("from").notNullable();
      tbl.date("to");
    });
};

exports.down = function(knex) {};
