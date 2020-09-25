// const connection = require("../../config/mysql");

// module.exports = {
//   checkUser: (email) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "SELECT * FROM user WHERE user_email = ?",
//         email,
//         (error, result) => {
//           !error ? resolve(result) : reject(new Error(error));
//         }
//       );
//     });
//   },

//   userActivation: (setData, id) => {
//     return new Promise((resolve, reject) => {
//       connection.query(
//         "UPDATE user SET ? WHERE user_id = ?",
//         [setData, id],
//         (error, result) => {
//           if (!error) {
//             const newResult = {
//               product_id: id,
//               ...setData,
//             };
//             resolve(newResult);
//           } else {
//             reject(new Error(error));
//           }
//         }
//       );
//     });
//   },
// };
