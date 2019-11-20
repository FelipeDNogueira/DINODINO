const mongoose = require('mongoose'); 
 
const userSchema = new mongoose.Schema({ 
//variaveis do scheema 
    fullname: String, 
    /*uid:{ 
        type: String, 
    },*/ 
    email: { 
        type: String, 
        lowercase: true 
    }, 
    password: String, 
    debitcard: Number, 
    rg: String, 
    cpf: Number 
     
}, { timestamps: true, static: false }); 
const UserModel = mongoose.model('User', userSchema); 
//funções do scheema 
class User { 
    static getAll(){ //retorna um array de cada usuário 
        return new Promise((resolve, reject) => { 
            UserModel.find({}).exec().then((results) => { 
                resolve(results); 
        }).catch((err) => { 
            reject(err); 
        }); 
    }); 
    } 
    static create(user){ //retorna um array de cada usuário 
        return new Promise((resolve, reject) => { 
            UserModel.create(user).then((results) => { 
                resolve(results._id); 
        }).catch((err) => { 
            reject(err); 
        }); 
    }); 
    } 
} 
module.exports = User; 
