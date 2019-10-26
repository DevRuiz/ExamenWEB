'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('productos', 'ProductController.index');
Route.post('productos/crearProducto','ProductController.store'); 
Route.get('productos/editarProducto/:id', 'ProductController.update') 
Route.get('productos/delete/:id','ProductController.destroy');

Route.get('proveedors/crearProveedor', 'ProvController.store')
Route.get('proveedors/editarProveedor/:id', 'ProvController.update') 
Route.get('proveedors/delete/:id','ProvController.destroy'); 

Route.get('inventarios/crearInventario', 'InventaryController.store')
Route.get('inventarios/editarInventario/:id', 'InventaryController.update') 
Route.get('inventarios/delete/:id','InventaryController.destroy'); 





