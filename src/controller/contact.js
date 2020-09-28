const bcrypt = require("bcrypt");
const helper = require("../helper");
const jwt = require("jsonwebtoken");

const { getContactByOwner } = require("../model/contact");

module.exports = {
  getContact: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getContactByOwner(id);
      if (result.length > 0) {
        // client.set(`getuserbyid:${id}`, JSON.stringify(result));

        return helper.response(response, 200, "Success Get Contact", result);
      } else {
        return helper.response(response, 404, `Contact : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
