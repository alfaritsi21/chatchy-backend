// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const helper = require("../../helper");

// const { checkUser, userActivation } = require("../../model/auth/login");

// module.exports = {
//   loginUser: async (request, response) => {
//     try {
//       const { user_email, user_password } = request.body;
//       if (user_email !== "" && user_password !== "") {
//         if (user_email.search("@") > 0) {
//           const check = await checkUser(user_email);
//           if (check.length > 0) {
//             if (check[0].user_status === 1) {
//               const checkPassword = bcrypt.compareSync(
//                 user_password,
//                 check[0].user_password
//               );
//               if (checkPassword) {
//                 console.log(check[0]);
//                 const {
//                   user_id,
//                   user_name,
//                   user_email,
//                   user_phone,
//                   user_image,
//                   user_status,
//                 } = check[0];

//                 let payload = {
//                   user_id,
//                   user_name,
//                   user_email,
//                   user_phone,
//                   user_image,
//                   user_status,
//                 };

//                 const token = jwt.sign(payload, "SECRETS", {
//                   expiresIn: "24h",
//                 });
//                 payload = { ...payload, token };
//                 return helper.response(
//                   response,
//                   200,
//                   `Login success!, Welcome ${user_name}`,
//                   payload
//                 );
//               } else {
//                 return helper.response(response, 400, "Wrong Password");
//               }
//             } else {
//               return helper.response(response, 400, "your account not active");
//             }
//           } else {
//             return helper.response(response, 400, "your email not registered");
//           }
//         } else {
//           return helper.response(response, 400, "please input invalid email");
//         }
//       } else {
//         return helper.response(response, 400, "input value first");
//       }
//     } catch (error) {
//       return helper.response(response, 400, "Bad Request", error);
//     }
//   },

//   userActivation: async (request, response) => {
//     try {
//       const { id } = request.params;

//       const setData = {
//         user_status: 1,
//       };
//       const result = await userActivation(setData, id);

//       return helper.response(response, 201, "Activated Succesfully", result);
//     } catch (error) {
//       return helper.response(response, 400, "Bad Request", error);
//     }
//   },
// };
