import { base } from './base'

class WineService {

	peticion = async function ( methodType, bodyContent, id )
	{
		let api = id === false ? base.api : base.api+'/'+id
		bodyContent = bodyContent === false ? false : JSON.stringify( bodyContent )
		headers = { 'Accept' : 'application/json', 'Content-Type' : 'application/json' }
		options = bodyContent === false ? { method : methodType, headers : headers } : { method : methodType, headers : headers , body : bodyContent}
		
		console.log(bodyContent)
		console.log(id)

		try
		{
			let response = await fetch( api, options )
			return await response.json()
		}
		catch ( error )
		{
			console.log( error )
		}

	}

	index = async function ()
	{
		return await this.peticion( 'GET', false, false )
	}

	store = async function ( wine )
	{
		return await this.peticion( 'POST', wine, false )
	}

	show = async function ( id )
	{
		return await this.peticion( 'GET', false, id )
	}

	update = async function ( id, wine )
	{
		return await this.peticion( 'PUT', wine, id )
	}

	destroy = async function ( id )
	{
		return await this.peticion( 'DELETE', false, id )
	}

}


export const wineService = new WineService()