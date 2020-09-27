const bcrypt = require("bcrypt");
const helper = require("../helper");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const {
  postUser,
  checkUser,
  checkUsername,
  checkUserphone,
  userActivation,
  getUserById,
  searchUserName,
  searchUserNickName,
  searchUserPhone,
  editUser,
  deleteUser,
  resetPasswordUser,
} = require("../model/user");
const mailer = require("../utilities/mailer");
const mailTemplate = require("../utilities/mailTemplate");

const checkPassword = (user_password) => {
  let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (user_password.match(decimal)) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = (user_email) => {
  let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (user_email.match(valid)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  registerUser: async (request, response) => {
    const { user_name, user_email, user_password, user_phone } = request.body;
    const checkEmail = await checkUser(user_email);
    const checkName = await checkUsername(user_name);
    const checkPhone = await checkUserphone(user_phone);

    if (!validateEmail(user_email)) {
      return helper.response(response, 400, "Invalid Email");
    } else if (!checkEmail.length < 1) {
      return helper.response(response, 400, "Email already registered");
    } else if (!checkPassword(user_password)) {
      return helper.response(
        response,
        400,
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
      );
    } else if (!checkPhone.length < 1) {
      return helper.response(response, 400, "Phone number has been registered");
    } else if (!checkName.length < 1) {
      return helper.response(
        response,
        400,
        "Username has been taken, try another username"
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const encryptPassword = bcrypt.hashSync(user_password, salt);

    const setData = {
      user_name,
      user_email,
      user_password: encryptPassword,
      user_phone,
      user_status: 0,
      user_created_at: new Date(),
    };
    try {
      const result = await postUser(setData);
      const id = result.result.user_id;
      const link = `http://127.0.0.1:3001/user/activation/${id}`;
      mailer.send(
        "arqeezy.gg@gmail.com",
        "Activate your account now",
        "Haiiiiii",
        mailTemplate.activation(link)
      );
      return helper.response(response, 200, "Success Register User", setData);
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },

  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body;
      const checkDataUser = await checkUser(user_email);
      if (checkDataUser.length >= 1) {
        const checkPassword = bcrypt.compareSync(
          user_password,
          checkDataUser[0].user_password
        );
        if (checkPassword) {
          const {
            user_id,
            user_nickname,
            user_name,
            user_email,
            user_phone,
            user_image,
            user_bio,
          } = checkDataUser[0];
          let payload = {
            user_id,
            user_nickname,
            user_name,
            user_email,
            user_phone,
            user_image,
            user_bio,
          };
          const token = jwt.sign(payload, "RAHASIA", { expiresIn: "24h" });
          payload = { ...payload, token };
          return helper.response(response, 200, "Success Login !", payload);
        } else {
          return helper.response(response, 400, "Wrong Password !");
        }
      } else {
        return helper.response(
          response,
          400,
          "Email / Account not registered !"
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request");
    }
  },

  userActivation: async (request, response) => {
    try {
      const { id } = request.params;

      const setData = {
        user_status: 1,
      };
      const result = await userActivation(setData, id);

      return helper.response(response, 201, "Activated Succesfully", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  getUserById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getUserById(id);
      if (result.length > 0) {
        // client.set(`getuserbyid:${id}`, JSON.stringify(result));

        return helper.response(response, 200, "Success Get User by ID", result);
      } else {
        return helper.response(response, 404, `User Id : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  searchUserName: async (request, response) => {
    try {
      const { user_name } = request.body;
      const result = await searchUserName(user_name);

      if (result.length > 0) {
        return helper.response(
          response,
          200,
          "Success Search Username",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Username : ${user_name} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  searchUserNickName: async (request, response) => {
    try {
      const { user_nickname } = request.body;
      const result = await searchUserNickName(user_nickname);

      if (result.length > 0) {
        return helper.response(
          response,
          200,
          "Success Search Nickname",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Nickname : ${user_nickname} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  searchUserPhone: async (request, response) => {
    try {
      const { user_phone } = request.body;
      const result = await searchUserPhone(user_phone);

      if (result.length > 0) {
        return helper.response(
          response,
          200,
          "Success Search Phone Number",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Phone Number: ${user_phone} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  editUser: async (request, response) => {
    try {
      const { id } = request.params;
      const {
        user_nickname,
        user_name,
        user_email,
        user_phone,
        user_image,
        user_bio,
        user_status,
      } = request.body;

      const checkId = await getUserById(id);

      if (checkId.length > 0) {
        const setData = {
          user_nickname: user_nickname
            ? user_nickname
            : checkId[0].user_nickname,
          user_name: user_name ? user_name : checkId[0].user_name,
          user_email: user_email ? user_email : checkId[0].user_email,

          user_phone: user_phone ? user_phone : checkId[0].user_phone,
          user_image: request.file === undefined ? "" : request.file.filename,
          user_bio: user_bio ? user_bio : checkId[0].user_bio,
          user_updated_at: new Date(),
          user_status: 1,
        };
        const result = await editUser(setData, id);
        const fsUnlink = fs.unlink(
          `./uploads/${checkId[0].user_image}`,
          () => {}
        );
        // client.set(`getuserbyid:${id}`, JSON.stringify(result));
        // client.flushall((error, result) => {
        //   console.log(result);
        // });

        return helper.response(response, 201, "User Updated", result);
      } else {
        return helper.response(response, 404, `User : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  deleteUser: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteUser(id);
      if (result) {
        return helper.response(response, 201, "User Deleted", id);
      } else {
        return helper.response(response, 404, `User : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  resetPassword: async (request, response) => {
    const { user_email, user_password, re_password } = request.body;

    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(user_password, salt);

    const setData = {
      user_password: password_encrypt,
    };
    try {
      if (!checkPassword(user_password)) {
        return helper.response(
          response,
          400,
          "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        );
      } else if (user_password != re_password) {
        return helper.response(response, 400, "Password doesn't match");
      } else {
        const result = await resetPasswordUser(setData, user_email);

        return helper.response(
          response,
          201,
          "Succesfully change password",
          user_email
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
