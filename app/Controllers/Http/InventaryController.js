'use strict'

const Inventary = use('App/Models/Inventary');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inventaries
 */
class InventaryController {
  /**
   * Show a list of all inventaries.
   * GET inventaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new inventary.
   * GET inventaries/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new inventary.
   * POST inventaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const invent = new Inventary()
    
    invent.producto_id = request.input('producto_id')
    invent.fecha = request.input('fecha')
    

    await invent.save()

    return response.json(invent);
  }

  /**
   * Display a single inventary.
   * GET inventaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing inventary.
   * GET inventaries/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update inventary details.
   * PUT or PATCH inventaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const invent = await Inventary.find(params.id)

    invent.producto_id = request.input('producto_id')
    invent.fecha = request.input('fecha')
    
    await invent.save()
    return response.json(invent)
  }

  /**
   * Delete a inventary with id.
   * DELETE inventaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const inventario = await Inventary.find(params.id);
    console.log();
    await inventario.delete();
    return response.json();
  }
}

module.exports = InventaryController
