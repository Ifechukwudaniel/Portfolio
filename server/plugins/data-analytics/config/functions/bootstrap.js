// const strapi = require("strapi");
module.exports = async () => {
  registerPermissionActions();
};
const registerPermissionActions = async () => {
  const actions = [
    {
      section: "plugins",
      displayName: "Data Analytics",
      uid: "read",
      pluginName: "data-analytics",
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
