exports.up = (knex) => {
  return knex.schema.createTable("offers", (table) => {
    table.increments("id").unsigned().primary().unique();

    table.string("advertiser_name").notNullable().unique();
    table.string("url").notNullable();
    table.string("description", 500).notNullable();
    table.datetime("starts_at").notNullable().defaultTo(knex.fn.now());
    table.datetime("ends_at").defaultTo(knex.fn.now());
    table.boolean("premium").defaultTo(false);
    table.string("state").defaultTo("disabled");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("offers");
};
