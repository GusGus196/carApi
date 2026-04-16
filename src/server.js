import express from 'express'
import router from './router/router.js'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url"

console.log("Primer programa");

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const app = express()

app.use(cors());
app.use(express.json())
app.use(router);
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT )
})
