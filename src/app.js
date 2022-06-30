import express from 'express';
import responseTime from 'response-time';

const app = express();
app.use(responseTime);
app.get('/',async (req,res)=>{
    res.json({message: 'Hello'})
})

//Middlewares
app.use(express.json());

export default app;