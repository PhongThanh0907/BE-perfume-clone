import express from 'express'
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleWare';
import { PORT } from './utils/config';
import * as Colors from 'colors.ts'

const productRoute = require('./routes/Product')
const userRoute = require('./routes/User')
Colors.colors('', '')

connectDB()

const app = express();

app.use(express.json());

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));