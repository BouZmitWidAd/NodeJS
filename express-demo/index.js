const express = require('express');//va recevoir la valeur via express
const mongoose= require('mongoose');
const app =express();//creation d'une variable et on a l associer un construct d'expresse


     mongoose.connect('mongodb://localhost/school')
    .then(()=>console.log('mongodb is connected....'))
    .catch((err) =>console.log(err.message))

//creation d'un schema ce dernier ca doit etre communiquer avec un modele
const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    price: Number
});
//creation d'un modele
const Course = mongoose.model('Course' ,courseSchema )

//creation d'un middleware un systeme qui s execute entre la demande et la reponse n'importe quel requette sur http convertit vers l json
app.use(express.json())

//creation des api
courses =['laravel', 'VusJS' ,'symfony' ];
app.get('/api/courses', async (req ,res) =>{
//recuperer tous les informations sur la collection courses de donnees en utilisant le modele
    const courses = await Course.find();

    res.send(courses);//aafficher le contenu de get
})
//la persistance avec l'architecture RestFULL
app.post('/api/course' , async (req , res) => {
    const course=new Course({

        name: req.body.name,
        author: req.body.author,
        price: req.body.price
    })
    //persister dans la base de donner avec une objet

    //recuperer l objet
    const newCourse = await course.save();
//afficher dans le client
    res.send(newCourse);
})

app.put('/api/courses/:id', async (req , res)=>{
    //recuperer sur l objet params
    const id = req.params.id;//recuperer l id
    const course =await Course.findById(id); //recupere l id dans la collection course
    course.name= req.body.name;
    course.author= req.body.author;
    course.price = req.body.price;
const result = await course.save();
res.send(result); //afficher la modification sur variable result
});


app.delete('/api/courses/:id' , async(req , res )=>{

    const id = req.params.id;
    const course = await Course.findOne({_id: id});

    const result = await course.delete();
    res.send(result);



})

















//creation d'un seerveur
const  PORT= process.env.PORT || 3000;
// prend la valeur qui existe dans l'environement si n exsite pas prend 3000'
app.listen(PORT, () => console.log(`application running on ${PORT} port`));
