const { registerValidation } = require("../validation/authValidation");

// const {User,Sequelize} = require('../models')
const {User,Role,roleUser ,Sequelize} = require('../models');
const { generatePassword } = require("../services/Helper");
const register = (req , res) => {
    const reqParam = req.body;   
    registerValidation(reqParam , res , async (valid) => {
        if(valid) {

            reqParam.password = await generatePassword(reqParam.password) 

            const createUser = await User.create(reqParam);
            const findRoleId = await Role.findOne({
                where : {
                    name : reqParam.role
                }
            });

            const roleuser = {
                user_id : createUser.id,
                role_id : findRoleId.id
            }
            const data = await roleUser.create(roleuser)

        }
    })
}


module.exports = {
    register
}