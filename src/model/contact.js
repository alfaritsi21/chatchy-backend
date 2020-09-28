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
  addToContact: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO contact SET ?",
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

  deleteContact: (owner, saved) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM contact WHERE contact_owner = ? AND contact_saved = ?",
        [owner, saved],
        (error, result) => {
          if (!error) {
            resolve(result.affectedRows);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};
