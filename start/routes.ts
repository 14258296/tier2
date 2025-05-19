/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import EthereumController from '../app/controllers/EthereumController.js'

router.get('/api/ethereum', [EthereumController, 'fetch']);
