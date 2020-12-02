const controller = {};
const mysql = require('mysql');
var http = require('http');
var ws = require('express-ws');


controller.mimqtt = (req, res) => {
    console.log("conectando a broker...");
    //res.write('<h1>Mensage recibido</h1>'); 
    var mqtt = require('mqtt');
    let client = mqtt.connect('mqtt://192.168.100.39:443');//Este sub.js deberia ponerlo en un metodo de la app y pasarle como parametro el topico.
    let topik = 'topik1';                                   //con la direccion del broker hosteado que solo deberia llevar la parte de broker.js

    client.on('message', (topik, message) => {
        message = message.toString();
        console.log(message);                
    });

    client.on('connect', () => {
        client.subscribe(topik);
    });


    
};



module.exports = controller;