const { Schema, model } = require("mongoose");
const { commonString, commonNumber } = require("./common");

const userSchema = new Schema(
  {
   
    name:commonString,
    email:{...commonString,
        unique:[true,"Email ID Already Exist"]
    },
    mobile:{...commonString,
        unique:[true,"Mobile Number Already Exist"]
    },
    password:commonString,
    opt:commonString,
    verify: {
      type: Boolean,
      default: false,
      required:true
    }
  },
  { timestamps: true }
);

const user = model("user", productSchema);
module.exports = user;
    