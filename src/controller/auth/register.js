// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const helper = require("../../helper");
// const mailer = require("../../utilities/mailer");
// const mailTemplate = require("../../utilities/mailTemplate");

// const {
//   checkUsername,
//   checkEmail,
//   checkPhone,
//   checkPassword,
//   createUser,
// } = require("../../model/auth/register");

// module.exports = {
//   registerUser: async (request, response) => {
//     const { name, email, phone, password } = request.body;
//     const salt = bcrypt.genSaltSync(10);
//     const password_encrypt = bcrypt.hashSync(password, salt);
//     const formData = {
//       user_name: name,
//       user_email: email,
//       user_phone: phone,
//       user_password: password_encrypt,
//       user_status: 0,
//       user_created_at: new Date(),
//     };
//     try {
//       if (formData.user_name === "") {
//         return helper.response(response, 400, "Name must be filled");
//       } else if (
//         formData.user_email === "" ||
//         formData.user_email.search("@") < 0
//       ) {
//         return helper.response(
//           response,
//           400,
//           "Email must be filled and must valid email"
//         );
//       } else if (formData.user_phone === null) {
//         return helper.response(response, 400, "Phone Number must be filled");
//       } else {
//         const check_email = await check_email_worker(formData.user_email);
//         const check_phone = await check_phone_worker(formData.user_phone);
//         if (checkEmail.length > 0) {
//           return helper.response(response, 400, "Email has already registered");
//         } else if (checkPhone.length > 0) {
//           return helper.response(
//             response,
//             400,
//             "Phone Number has already registered"
//           );
//         } else if (password.length < 8) {
//           return helper.response(
//             response,
//             400,
//             "Password must up to 8 character"
//           );
//         } else {
//           const data_result = await createUser(formData);
//           const id = data_result.result.insertId;
//           const link = `http://127.0.0.1:3001/activation/${id}`;
//           mailer.send(
//             "arqi.alfaritsi21@gmail.com",
//             "Activate Your Account Now",
//             "Haiiiiii",
//             mailTemplate.activation(link)
//           );
//           return helper.response(response, 200, "Register Success", formData);
//         }
//       }
//     } catch (error) {
//       return helper.response(response, 400, "Bad Request");
//     }
//   },
// };
