const connection = require("../config/mysql");

module.exports = {
  getMessageChat: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM message WHERE message_sender = ${sender} AND message_receiver = ${receiver} OR message_sender = ${receiver} AND message_receiver = ${sender} ORDER BY message_created_at ASC`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  sendMessage: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO message SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const res = { result };
            resolve(res);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  deleteMessage: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE message SET message_status = 0 WHERE message_id = ?",
        id,
        (error, result) => {
          if (!error) {
            resolve(result.changedRows);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  searchMessage: (chat, sender, receiver) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM message  WHERE message_chat LIKE '%${chat}%' AND (message_sender = ${sender} AND message_receiver = ${receiver} OR message_sender = ${receiver} AND message_receiver = ${sender})`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
