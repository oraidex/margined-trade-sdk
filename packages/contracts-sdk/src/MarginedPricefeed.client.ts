/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, Addr} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, OwnerResponse} from "./MarginedPricefeed.types";
export interface MarginedPricefeedReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  getOwner: () => Promise<OwnerResponse>;
  getPrice: ({
    key
  }: {
    key: string;
  }) => Promise<Uint128>;
  getPreviousPrice: ({
    key,
    numRoundBack
  }: {
    key: string;
    numRoundBack: number;
  }) => Promise<Uint128>;
  getTwapPrice: ({
    interval,
    key
  }: {
    interval: number;
    key: string;
  }) => Promise<Uint128>;
}
export class MarginedPricefeedQueryClient implements MarginedPricefeedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.getOwner = this.getOwner.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.getPreviousPrice = this.getPreviousPrice.bind(this);
    this.getTwapPrice = this.getTwapPrice.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  getOwner = async (): Promise<OwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_owner: {}
    });
  };
  getPrice = async ({
    key
  }: {
    key: string;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_price: {
        key
      }
    });
  };
  getPreviousPrice = async ({
    key,
    numRoundBack
  }: {
    key: string;
    numRoundBack: number;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_previous_price: {
        key,
        num_round_back: numRoundBack
      }
    });
  };
  getTwapPrice = async ({
    interval,
    key
  }: {
    interval: number;
    key: string;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_twap_price: {
        interval,
        key
      }
    });
  };
}
export interface MarginedPricefeedInterface extends MarginedPricefeedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  appendPrice: ({
    key,
    price,
    timestamp
  }: {
    key: string;
    price: Uint128;
    timestamp: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  appendMultiplePrice: ({
    key,
    prices,
    timestamps
  }: {
    key: string;
    prices: Uint128[];
    timestamps: number[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarginedPricefeedClient extends MarginedPricefeedQueryClient implements MarginedPricefeedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.appendPrice = this.appendPrice.bind(this);
    this.appendMultiplePrice = this.appendMultiplePrice.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
  }

  appendPrice = async ({
    key,
    price,
    timestamp
  }: {
    key: string;
    price: Uint128;
    timestamp: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      append_price: {
        key,
        price,
        timestamp
      }
    }, $fee, $memo, $funds);
  };
  appendMultiplePrice = async ({
    key,
    prices,
    timestamps
  }: {
    key: string;
    prices: Uint128[];
    timestamps: number[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      append_multiple_price: {
        key,
        prices,
        timestamps
      }
    }, $fee, $memo, $funds);
  };
  updateOwner = async ({
    owner
  }: {
    owner: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_owner: {
        owner
      }
    }, $fee, $memo, $funds);
  };
}