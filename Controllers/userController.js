const userModel = require('../model/userModel')

const createUser = async (req, res)=>{
const user = req.body

try {
    const createdUser = await userModel.create({
        username: user.username,
        email: user.email,
        dateOfBirth: user.dateOfBirth
    })

    res.status(200).json({
        message: 'Registered successfuly',
        createUser
        }
    )
    }

catch (error) {
    res.status(400).json({
        message: 'an error occured',
        data: error

    })
}
}
module.exports = {createUser,
}