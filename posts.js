var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomSentence = faker.lorem.sentence();
  var randomDate = faker.date.past();
  var randomImage = faker.image.image();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomSentence,
    fecha: randomDate,
    imagen: randomImage
  }

}

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.listen(3000);