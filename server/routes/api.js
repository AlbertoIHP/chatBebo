//Importar los modulos principales
var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')

//Conectamos a la BD
mongoose.connect("mongodb://root:bebote34@ds137256.mlab.com:37256/heroku_l1zxh974/vinos")

var vinosSchema = { nombre: String, uva: String }


//Inicializar el modelo en la BD
var Vinos = mongoose.model('vinos', vinosSchema)

//CORS
var cors = require('cors')



//Definir las rutas

router.get('/', cors(), obtenerTodos)

router.get('/:id', cors(), obtenerId)

router.post('/', cors(), agregarVino)

router.put('/:id', cors(), actualizarId)

router.delete('/:id', cors(), borrarId)




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
		uva: req.body.uva
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
		uva: req.body.uva
	}



	Vinos.update( { "_id" : req.params.id }, infoAcutalizada, function( error )
	{
		if( error )
		{
			res.send(500)
		}
		else
		{
			res.send( JSON.stringify( infoAcutalizada ) )
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