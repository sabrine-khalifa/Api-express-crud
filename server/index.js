
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


import Etudiant from './routes/etudiant'
const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})
const DB='mongodb+srv://mern:mern@cluster0.ip3kl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB,  { useNewUrlParser:true, 
    useUnifiedTopology:true})
.then(() =>{
    console.log('Database connected..')
})
.catch((error)=>console.log(error.message));


app.get("/etudiant",async(req,res)=>{
    try{
        await Etudiant.find({})
        .then(result=>{
            res.send(result)
        })
    }
    catch(err){
        console.log(err)
    }
})
app.post('/ajouter_etudiant',async(req,res)=>{
    try{
    let new_etudiant=new Etudiant({
        cin:req.body.cin,
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email
    });
    await new_etudiant.save()
    res.send('save effectue ave succes')
}
catch(err){
    console.log(err)
}
});

app.delete('/delete:id',async(req,res)=>{
    try{
        await Etudiant.findOneAndDelete({id:req.params.id})
        res.send("supprime avec success")
    }
    catch(err){
        res.send(err)
    }
});
app.put('/maj/:id', async(req,res)=>{
    try{
await Etudiant.findOneAndUpdate({_id:req.params.id},
    {email:req.body.email })
    res.send('mie a jour avec succées')
    
}
    catch(err){
        res.send(err)
    }
})