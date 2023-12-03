import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose"

const UserSchema = new Schema({ //!define un esquema
    name: {
      type: String,
      require: true,
      unique: true,
    } ,
    email: {
        type: String,
        require: true,
      }, 
    password: {
        type: String,
        require: true,
      } ,
    isAdmin: {
        type: Boolean,
       default: false,
      },
     },
       {
        timestamps: true,
      
}) 


const UserModel = model("User", UserSchema)


const loginNewUser = async ({ name, email, password }) => {
 try {    
     const hashedPassword = await bcrypt.hash(password, 10); //! metodo de bcrypt para generar textos encriptados
     
     const newUserInfo = {
         name,
         email,
         password: hashedPassword,
         isAdmin: name === "Sandra",
        };
        
        const user = await userModel.create(newUserInfo);
        
        return user;

    } catch (error) {
       console.log(error);
    }
    };
    
    
const callAllUsers = async () => {
   try{
       const allUsers = await userModel.find()
       return(user)
       
    } catch (error) {
        console.log(error);
    }
    }


const callUserById = async ( { id } ) => {
try{ 
  const user = await userModel.findById(id)

  return user;
} catch (error) {
    console.log(error);
}
}


const callUserByEmail = async ( { emailmail } ) => {
 try { 
    const user = await userModel.findOne( { email } );

  return user;
} catch (error) {
    console.log(error);
}
}

const login = async ({ email, password}) => {
 try{ 
    const user = findByEmail({ email })

    if (!user) {
        return null
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
return null
    }
    return user
} catch (error) {
    console.log(error);
}
}


const updateUser = async (id, data) => {
try {
    const user = await userModel.findByIdAndUpdate(id, data, {new: true})
return user
} catch (error) {
    console.log(error);
}
};


const deleteUser = async (id) => {
    try {
      await userModel.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
};


export const userModel = {
  create: loginNewUser,
  allUsers: callAllUsers,
  findOne: callUserById,
  findByEmail: callUserByEmail,
  update: updateUser,
  destroy: deleteUser
};
