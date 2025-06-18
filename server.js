import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Routing
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

const app = express()

//Basice Middlewares
app.use(cors()) //Allow cross domains access
app.use(morgan('dev')) //Show logs
app.use(express.json()) //To read body

//Routing GET, POST, PUT, PATCH, DELETE
// http://localhost:8000
// app.get('/', (req, res)=>{
//   //code body
//   res.json({message: "Hello CC20"})
// })
app.use('/api', userRouter)
app.use('/auth', authRouter)

const PORT = 8000
// Start Server
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))