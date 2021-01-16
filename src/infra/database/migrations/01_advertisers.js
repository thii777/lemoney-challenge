exports.up = (knex) => {
  return knex.schema.createTable("advertisers", (table) => {
    table.increments("id").unsigned().primary().unique();

    table.string("advertiser_name").notNullable().unique();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("advertisers");
};
