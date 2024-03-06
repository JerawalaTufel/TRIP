"use strict";
const Bcrypt  = require('bcrypt');
module.exports = {

    toUpperCase: (str) => {
        if (str.length > 0) {
          const newStr = str
            .toLowerCase()
            .replace(/_([a-z])/, (m) => m.toUpperCase())
            .replace(/_/, "");
          return str.charAt(0).toUpperCase() + newStr.slice(1);
        }
    
        return "";
      },
    

  /**
   * @description This function use for create validation unique key
   * @param apiTag
   * @param error
   * @returns {*}
   */
  validationMessageKey: (apiTag, error) => {
    let key = module.exports.toUpperCase(error.details[0].context.key);
    let type = error.details[0].type.split(".");
    type = module.exports.toUpperCase(type[1]);
    key = apiTag + key + type;
    return key;
  },

  generatePassword : (password) => {
    return new Promise((resolve , reject) => {
        Bcrypt.hash(password , 10 ,(err , hash) => {
          if(err) reject(err);
          resolve(hash)
        })
    })
  }
};
