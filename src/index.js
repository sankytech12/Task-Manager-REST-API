const express=require('express');
require('./db/mongoose');


const app=express();
const port=process.env.PORT || 3000

app.use(express.json())

const userRouter=require('./routers/users');
const taskRouter=require('./routers/tasks');

app.get('/',(req,res)=>{
    res.json({
        message:"Server running..."
    })
})

//********************************USER ROUTES******************************* */

app.use(userRouter);

//********************************TASK ROUTES******************************* */

app.use(taskRouter);


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})