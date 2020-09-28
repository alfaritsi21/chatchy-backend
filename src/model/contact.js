const connection = require("../config/mysql");

module.exports = {
  getContactByOwner: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM contact LEFT JOIN user on  contact.contact_saved = user.user_id WHERE contact_owner = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};
