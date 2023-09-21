const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/task-manager-api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(res=>console.log("Connected to database..."))
.catch(err=> console.log("Something went wrong while connecting to database..."));



