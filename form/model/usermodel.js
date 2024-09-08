// import mongoose from "mongoose";

//  const userSchema=  new mongoose.Schema({
// Username:{
//     type :String,
//     required:true,
// },
// Age:{
// type:Number,
//  required:true,
// },
// Email:{
//     type:String,
//     required:true,
//     unique:true,
//     match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// },
// password:{
//     type:String,
//     required:true,
//     minlength:8,
//     select:false,
//  },
// }
//  )  
//   const User = mongoose.model('User',userSchema);
//   export default User;





import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Age: { type: Number, required: true },
  Email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);
