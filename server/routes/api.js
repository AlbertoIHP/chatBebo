//Importar los modulos principales
var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')

//Conectamos a la BD
mongoose.connect("mongodb://localhost/vinos")

var vinosSchema = { nombre: String, uva: String, descripcion: String}


//Inicializar el modelo en la BD
var Vinos = mongoose.model('vinos', vinosSchema)

//Definir las rutas

router.get('/', obtenerTodos)

router.get('/:id', obtenerId)

router.post('/', agregarVino)

router.put('/:id', actualizarId)

router.delete('/:id', borrarId)




//Funciones de callback
function obtenerTodos( req, res, next )
{
	Vinos.find( function( error, vinos )
	{
		res.send(vinos)
	})
}


function obtenerId( req, res, next )
{
	Vinos.findOne( {"_id" : req.params.id } , function( error, vinos)
	{
		res.send(vinos)
	})
}


function agregarVino( req, res, next )
{
	var infoOrdenada = 
	{ 
		nombre: req.body.nombre, 
		uva: req.body.uva, 
		descripcion: req.body.descripcion 
	}

	var nuevoVino = new Vinos(infoOrdenada)


	nuevoVino.save( function( error )
	{
		if( error )
		{
			res.send(500)
		}
		else
		{
			res.send( JSON.stringify( infoOrdenada ) )
		}
	})
}

function actualizarId( req, res, next )
{
	var infoAcutalizada = 
	{ 
		nombre: req.body.nombre, 
		uva: req.body.uva, 
		descripcion: req.body.descripcion 
	}

	Vinos.update( { "_id" : req.params.id }, infoAcutalizada, function( error )
	{
		if( error )
		{
			res.send(500)
		}
		else
		{
			res.send( JSON.stringify( infoOrdenada ) )
		}		
	})	
}

function borrarId( req, res, next )
{
	Vinos.remove( { "_id" : req.params.id }, function( error )
	{
		if( error )
		{
			res.send(500)
		}
		else
		{
			res.send( 200 )
		}		
	})
}

module.exports = router