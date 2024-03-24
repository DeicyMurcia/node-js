//Importacion de modulos
import  express  from "express"
import {dirname, join} from 'path'
import { fileURLToPath } from "url"
import indexRoutes  from './routes/index.js'

//const de direccionamiento
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000


//console.log(join(__dirname, 'views'))

//set de vistas
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//enrutamiento
app.use(indexRoutes)
app.use(express.static(join(__dirname,'public')))
//enrutamiento
app.get('/',(req,res)=>res.render('index'))
app.get('/about',(req,res)=>res.render('about'))
app.get('/contact',(req,res)=>res.render('contact'))

//escucha del server
app.listen(process.env.PORT || port)
console.log("App online on port:", port,"🥸")
