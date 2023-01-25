const { Schema , model ,Types} = require('mongoose');
const { User } = require('./User');


const BlogSchema = new Schema ({
    title: {type: String ,required : true},
    content: {type: String ,required : true},
    islive: {type: Boolean ,required : true ,default:false}, // 임시저장용 islive를 지정하지않으면 false
    user : {type:Types.ObjectId , required: true, ref: "user"},
},
{timestamps:true}
);

const Blog = model('blog', BlogSchema);

module.export = { User };