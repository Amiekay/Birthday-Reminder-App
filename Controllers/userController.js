const userModel = require('../model/userModel')

const createUser = async (req, res)=>{
const user = req.body

try {
    const existingUser = await userModel.findOne({email: user.email})
    if(existingUser){
        return res.status(409).json({
            message: 'user already created'
        })
    }
    const createdUser = await userModel.create({
        username: user.username,
        email: user.email,
        dateOfBirth: user.dateOfBirth
    })

    res.status(200).json({
        message: 'Registered successfuly',
        data: {
            username: user.username,
            email: user.email,
            dateOfBirth: user.dateOfBirth
        }
        })
    }

catch (error) {
    res.status(400).json({
        message: 'an error occured',
        data: error

    })
}
}
const getAllUsers = async(req, res)=>{
    try {
        const {username, email, dateOfBirth} = req.body
        const users = await userModel.find(dateOfBirth)
        console.log(users)
        const date = users.dateOfBirth

        console.log(date)

       res.status(200).json({
           users: {
            username: users.username,
            email: users.email,
            dateOfBirth: users.dateOfBirth
           } 
        })
    } 
        catch (error) {
            res.status(400).json({
                message: 'an error occured',
                data: error
        
            })  
    }
    
}
module.exports = {createUser,
    getAllUsers
}