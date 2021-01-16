exports.up = (knex) => {
  return knex.schema.createTable("offers", (table) => {
    table.increments("id").unsigned().primary().unique();

    table.string("url").notNullable();
    table.string("description", 500).notNullable();
    table.datetime("starts_at").notNullable();
    table.datetime("ends_at");
    table.boolean("premium").defaultTo(false);
    table.string("state").defaultTo("disabled");

    table.integer("advertiser_id");
    table
      .foreign("advertiser_id")
      .references("id")
      .inTable("advertisers")
      .onUpdate("CASCADE")
      .onDelete("SET NULL");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("offers");
};
