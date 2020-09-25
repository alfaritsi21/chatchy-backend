const bcrypt = require("bcrypt");
const helper = require("../helper");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const {
  getMessageChat,
  sendMessage,
  deleteMessage,
  searchMessage,
} = require("../model/message");

module.exports = {
  getMessageChat: async (request, response) => {
    try {
      const { sender, receiver } = request.body;
      const result = await getMessageChat(sender, receiver);
      if (result.length > 0) {
        // client.set(`getuserbyid:${id}`, JSON.stringify(result));

        return helper.response(response, 200, "Success Get Message", result);
      } else {
        return helper.response(response, 404, `Message Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  sendMessage: async (request, response) => {
    const { message_sender, message_receiver, message_chat } = request.body;
    const setData = {
      message_sender,
      message_receiver,
      message_chat,
      message_created_at: new Date(),
      message_status: 1,
    };
    try {
      const result = await sendMessage(setData);
      return helper.response(response, 200, "Message has been sent", setData);
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },

  deleteMessage: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteMessage(id);
      if (result) {
        return helper.response(response, 201, "Message Deleted", id);
      } else {
        return helper.response(response, 404, `Message : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  searchMessage: async (request, response) => {
    try {
      const { message_chat, sender, receiver } = request.body;
      const result = await searchMessage(message_chat, sender, receiver);

      if (result.length > 0) {
        return helper.response(response, 200, "Success Search Message", result);
      } else {
        return helper.response(
          response,
          404,
          `Search Result For ${message_chat} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
