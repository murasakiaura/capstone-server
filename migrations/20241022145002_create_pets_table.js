/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pets", function (table) {
    table.increments("id").primary();
    table.string("image_path");
    table.string("type").notNullable();
    table.string("species").notNullable();
    table.string("breed").notNullable();
    table.integer("age").notNullable();
    table.string("location").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.table("pets", function (table) {
    table.dropColumn("image_path");
  });
};
