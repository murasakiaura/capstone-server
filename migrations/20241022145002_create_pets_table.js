/**
 * Add the image path to the pets table created by the first migration.
 *
 * This migration assumes a fresh database using the repository's
 * initial migration sequence. Do not rewrite applied migrations
 * in an existing production database.
 */
exports.up = function (knex) {
  return knex.schema.alterTable("pets", function (table) {
    table.string("image_path");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("pets", function (table) {
    table.dropColumn("image_path");
  });
};
