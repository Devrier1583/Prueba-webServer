/*const express = require('express')
const path = require('path')*/

import express from "express";
import path from "path";


export const iniciarServidor = (opcion)=>{
    const {port, public_path = 'public'} = opcion
    /*console.log(port)
    console.log(public_path)*/
    const app = express()

    app.use(express.static(public_path))

    app.get('/', (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
        console.log(`Ejecutando en el puerto del servidor ${port}`)
    })
}

/*.exports = {
    iniciarServidor
}*/