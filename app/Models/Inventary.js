'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventary extends Model {

    static get table(){
        return 'inventarios'
    }
}

module.exports = Inventary
