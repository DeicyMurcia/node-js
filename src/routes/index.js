import { Router } from "express"
const router = Router()


router.get('/',(req,res)=>res.render('index',{ title: 'Bienvenido - Home'}))
router.get('/about',(req,res)=>res.render('about', { title: ' about '}))
router.get('/contact',(req,res)=>res.render('contact', { title: 'contact'}))

export default router