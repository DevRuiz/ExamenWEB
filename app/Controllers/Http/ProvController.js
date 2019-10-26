'use strict'

const Prov = use('App/Models/Prov');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with provs
 */
class ProvController {
  /**
   * Show a list of all provs.
   * GET provs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    let provers = await Product.all();

    return response.json(provers);
  }

  /**
   * Render a form to be used for creating a new prov.
   * GET provs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new prov.
   * POST provs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const proved = new Prov()
    
    proved.nombre = request.input('nombre')
 
    await proved.save()

    return response.json(proved);

  }

  /**
   * Display a single prov.
   * GET provs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing prov.
   * GET provs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update prov details.
   * PUT or PATCH provs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const proved = await Prov.find(params.id)

    proved.nombre = request.input('nombre')


    await proved.save()
    return response.json(proved)
  }

  /**
   * Delete a prov with id.
   * DELETE provs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const provedor = await Product.find(params.id);
    console.log();
    await provedor.delete();
    return response.json()
  }
}

module.exports = ProvController
