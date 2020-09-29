const bcrypt = require("bcrypt");
const helper = require("../helper");
const jwt = require("jsonwebtoken");

const {
  getContactByOwner,
  deleteContact,
  addToContact,
} = require("../model/contact");

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
  deleteUserContact: async (request, response) => {
    try {
      const { owner, saved } = request.body;
      console.log(request.body);
      const result = await deleteContact(owner, saved);
      if (result) {
        return helper.response(response, 201, "Contact Deleted", result);
      } else {
        return helper.response(response, 404, "Contact  Not Found");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  addContact: async (request, response) => {
    try {
      const { owner, saved } = request.body;
      const result = await addToContact(owner, saved);
      if (result) {
        return helper.response(response, 201, "Contact Added", result);
      } else {
        return helper.response(response, 404, "Contact  Not Found");
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
