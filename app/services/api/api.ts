// modules
import {
  ApisauceInstance,
  create,
} from "apisauce"

// config
import Config from "app/config"

// type
import type {
  ApiConfig,
} from "./api.types"

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

export class Api {
  apiSauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apiSauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

}

// Singleton instance of the API for convenience
export const api = new Api()
