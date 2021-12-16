"use strict";

const axios = require("axios").default;
/**
 * school-address-updater.js controller
 *
 * @description: A set of functions called "actions" of the `school-address-updater` plugin.
 */

const getSchoolInfo = async (name, apiKey) => {
  /**
   * Find the School Information
   *
   * @description: This function goes to google  find place  get the place id , and get the
   * address, phoneNumber
   */

  let findPlacesUrl = "https://maps.googleapis.com/maps/api/place";
  let emptyString = "";

  name = encodeURI(name);

  let { data } = await axios.get(
    `${findPlacesUrl}/findplacefromtext/json?input=${name}&inputtype=textquery&key=${apiKey}`
  );

  if (data.status === "ZERO_RESULTS")
    return {
      address: emptyString,
      phoneNumber: emptyString,
      state: emptyString,
      googleMapUrl: emptyString,
    };

  let { place_id } = data["candidates"][0];

  let place = await axios.get(
    `${findPlacesUrl}/details/json?place_id=${place_id}&key=${apiKey}`
  );

  let componentLength = place.data.result.address_components.length;
  let address = place.data.result.formatted_address || emptyString;
  let phoneNumber = place.data.result.formatted_phone_number || emptyString;
  let state =
    place.data.result.address_components[componentLength - 3].long_name ||
    emptyString;
  let googleMapUrl = place.data.result.url || emptyString;
  return { address, phoneNumber, state, googleMapUrl };
};

const updateSchoolFunction = async (
  schools,
  updatePhoneNumber,
  updateNgState,
  updateAddress,
  apiKey
) => {
  for (const school of schools) {
    /*
    check if there is good data

    if its good go to the next school

    */

    if (school["address"] && school["googleMapUrl"] && school["phoneNumber"])
      continue;

    try {
      let info = await getSchoolInfo(`${school.name}`, apiKey);
      strapi.log.info(school.name, "Updated", info);
      if (updatePhoneNumber && updateNgState && updateAddress) {
        await strapi.query("schools").update(
          { id: school.id },
          {
            phoneNumber: info.phoneNumber,
            address: info.address,
            state: info.state,
            googleMapUrl: info.googleMapUrl,
          }
        );
        continue;
      }
      if (updatePhoneNumber) {
        await strapi
          .query("schools")
          .update({ id: school.id }, { phoneNumber: info.phoneNumber });
      }
      if (updateAddress) {
        await strapi
          .query("schools")
          .update({ id: school.id }, { address: info.address });
      }
      if (updateNgState) {
        await strapi
          .query("schools")
          .update({ id: school.id }, { state: info.state });
      }
      await strapi
        .query("schools")
        .update({ id: school.id }, { googleMapUrl: info.googleMapUrl });
    } catch (error) {
      strapi.log.error(error);
    }
  }
};

module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    ctx.send({
      message: "ok",
    });
  },

  updateSchools: async (ctx) => {
    let schools = null;
    let { apiKey, updateAddress, updateNgState, updatePhoneNumber } =
      ctx.request.body;

    if (!apiKey) throw new Error("No Api Key", 500);
    schools = await strapi.query("schools").find({ _limit: -1 });

    ctx.send({ message: "Update Started" });

    updateSchoolFunction(
      schools,
      updatePhoneNumber,
      updateNgState,
      updateAddress,
      apiKey
    );
  },
};
