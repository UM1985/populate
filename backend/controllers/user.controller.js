const { createModel} = require("../utils/CommonModel");
const { plainToHash } = require("../utils/password");
const otpGenerator = require('otp-generator')

exports.signup = async (req, res) => {
  const { name , email,password,mobile, } = req.body;
  const hash_pass = await plainToHash(password);
  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets :false })
  const result = await createModel(
    user,
   { name , email,password:hash_pass,otp ,mobile, },
    "User Added"
  );
  res.json(result)
};


