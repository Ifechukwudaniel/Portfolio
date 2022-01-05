const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;
    let populate = ["articles", "articles.author"];

    const entity = await strapi.services.category.findOne(
      { slug },
      { path: "articles", populate: { path: "author" } }
    );
    return sanitizeEntity(entity, { model: strapi.models.category });
  },
};
