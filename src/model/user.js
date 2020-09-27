const connection = require("../config/mysql");

module.exports = {
  postUser: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user SET ?", setData, (error, result) => {
        if (!error) {
          const res = { result };
          resolve(res);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  checkUser: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE user_email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT user_id, user_name, user_email, user_password, user_phone, user_status FROM user WHERE user_name = ?",
        username,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkUserphone: (phone) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT user_id, user_name, user_email, user_password, user_phone, user_status FROM user WHERE user_phone = ?",
        phone,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  userActivation: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET ? WHERE user_id = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              user_id: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  searchUserName: (user_name) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user  WHERE user_name LIKE '${user_name}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  searchUserNickName: (user_nickname) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user  WHERE user_nickname LIKE '%${user_nickname}%'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  searchUserPhone: (user_phone) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user  WHERE user_phone LIKE '${user_phone}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  editUser: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET ? WHERE user_id = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              user_id: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET user_status = 0 WHERE user_id = ?",
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

  resetPasswordUser: (setData, email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET ? WHERE user_email = ?",
        [setData, email],
        (error, result) => {
          if (!error) {
            const newResult = {
              user_email: email,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};
