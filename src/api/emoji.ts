import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Emoji {
  constructor(private client: Client) { }

  /**
   * List available Emoji */
  async emoji<T = Models.Emoji>(parameters?: Parameters.Emoji, callback?: Callback<T>): Promise<void>;
  /**
   * List available Emoji */
  async emoji<T = Models.Emoji>(parameters?: Parameters.Emoji, callback?: undefined): Promise<T>;
  async emoji<T = Models.Emoji>(parameters?: Parameters.Emoji, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/emoji',
      method: 'GET',
      params: {
        locale: parameters?.locale,
        spritesheets: parameters?.spritesheets,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'emoji' });
  }
}
