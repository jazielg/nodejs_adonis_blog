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

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/create', 'PostController.create')
Route.get('/posts/:id/edit', 'PostController.edit')
Route.get('/posts/:id', 'PostController.show')

Route.post('/posts', 'PostController.store')
Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.destroy')
// Route.get('/test', () => 'Hello World')
