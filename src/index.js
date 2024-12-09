import app from './app.js';
import { connectDB } from './db/index.js';
import dotenv from 'dotenv';

dotenv.config(
    {
        path: '../.env'
    }
);

connectDB()
    .then(
        () => {
            app.on("error", (error) => {
                console.log(`Error: ${error.message}`);
            })
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server is running on port ${process.env.PORT || 8000}`);
            })
        }
    )
    .catch(
        (error) => {
            console.log(`Error: ${error.message}`);
            process.exit(1);
        }
    );