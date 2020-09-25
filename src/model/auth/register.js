// const connection = require("../../config/mysql");

// module.exports = {
//   checkUsername: (username) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT user_name FROM user WHERE user_name = ?",
//         username,
//         (error, result) => {
//           !error ? resolve(result) : reject(new Error(error));
//         }
//       );
//     });
//   },

//   checkEmail: (email) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT user_email FROM user WHERE user_email = ?",
//         email,
//         (error, result) => {
//           !error ? resolve(result) : reject(new Error(error));
//         }
//       );
//     });
//   },

//   checkPhone: (phone) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT user_phone FROM user WHERE user_phone = ?",
//         phone,
//         (error, result) => {
//           !error ? resolve(result) : reject(new Error(error));
//         }
//       );
//     });
//   },

//   checkPassword: (phone) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT user_phone FROM user WHERE user_phone = ?",
//         phone,
//         (error, result) => {
//           !error ? resolve(result) : reject(new Error(error));
//         }
//       );
//     });
//   },

//   createUser: (formData) => {
//     return new Promise((resolve, reject) => {
//       connection.query("INSERT INTO user SET ?", formData, (error, result) => {
//         if (!error) {
//           const res = { result };
//           resolve(res);
//         } else {
//           reject(new Error(error));
//         }
//       });
//     });
//   },
// };
