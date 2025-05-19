import axios from 'axios';

export default class EthereumService {
  private static alchemyUrl = process.env.ALCHEMY_URL!;

  public static async getEthereumData(address: string) {
    const gasPrice = await this.getGasPrice();
    const blockNumber = await this.getBlockNumber();
    const balance = await this.getBalance(address);

    return {
      gasPrice,
      blockNumber,
      balance,
      address,
    };
  }

  private static async getGasPrice() {
    const response = await axios.post(this.alchemyUrl, {
      jsonrpc: '2.0',
      method: 'eth_gasPrice',
      params: [],
      id: 1,
    });
    return parseInt(response.data.result, 16);
  }

  private static async getBlockNumber() {
    const response = await axios.post(this.alchemyUrl, {
      jsonrpc: '2.0',
      method: 'eth_blockNumber',
      params: [],
      id: 1,
    });
    return parseInt(response.data.result, 16);
  }

  private static async getBalance(address: string) {
    const response = await axios.post(this.alchemyUrl, {
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [address, 'latest'],
      id: 1,
    });
    return parseInt(response.data.result, 16) / 1e18;
  }
}
