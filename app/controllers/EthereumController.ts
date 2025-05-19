import type { HttpContextContract } from '../../contracts/http.ts'
import EthereumService from '../Services/EthereumService.js'


export default class EthereumController {
  public async fetch({ request, response }: HttpContextContract) {
    const address = request.input('address')

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return response.status(400).json({ error: 'Invalid Ethereum address' })
    }

    try {
      const data = await EthereumService.getEthereumData(address)
      return response.json(data)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch Ethereum data' })
    }
  }
}
