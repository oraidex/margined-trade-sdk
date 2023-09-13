/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, Addr, AssetInfo} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, OwnerResponse, TokenLengthResponse, AllTokenResponse, TokenResponse} from "./MarginedFeePool.types";
export interface MarginedFeePoolReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  getOwner: () => Promise<OwnerResponse>;
  isToken: ({
    token
  }: {
    token: string;
  }) => Promise<TokenResponse>;
  getTokenLength: () => Promise<TokenLengthResponse>;
  getTokenList: ({
    limit
  }: {
    limit?: number;
  }) => Promise<AllTokenResponse>;
}
export class MarginedFeePoolQueryClient implements MarginedFeePoolReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.getOwner = this.getOwner.bind(this);
    this.isToken = this.isToken.bind(this);
    this.getTokenLength = this.getTokenLength.bind(this);
    this.getTokenList = this.getTokenList.bind(this);
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
  isToken = async ({
    token
  }: {
    token: string;
  }): Promise<TokenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_token: {
        token
      }
    });
  };
  getTokenLength = async (): Promise<TokenLengthResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_token_length: {}
    });
  };
  getTokenList = async ({
    limit
  }: {
    limit?: number;
  }): Promise<AllTokenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_token_list: {
        limit
      }
    });
  };
}
export interface MarginedFeePoolInterface extends MarginedFeePoolReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addToken: ({
    token
  }: {
    token: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeToken: ({
    token
  }: {
    token: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  sendToken: ({
    amount,
    recipient,
    token
  }: {
    amount: Uint128;
    recipient: string;
    token: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarginedFeePoolClient extends MarginedFeePoolQueryClient implements MarginedFeePoolInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateOwner = this.updateOwner.bind(this);
    this.addToken = this.addToken.bind(this);
    this.removeToken = this.removeToken.bind(this);
    this.sendToken = this.sendToken.bind(this);
  }

  updateOwner = async ({
    owner
  }: {
    owner: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_owner: {
        owner
      }
    }, _fee, _memo, _funds);
  };
  addToken = async ({
    token
  }: {
    token: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_token: {
        token
      }
    }, _fee, _memo, _funds);
  };
  removeToken = async ({
    token
  }: {
    token: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_token: {
        token
      }
    }, _fee, _memo, _funds);
  };
  sendToken = async ({
    amount,
    recipient,
    token
  }: {
    amount: Uint128;
    recipient: string;
    token: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      send_token: {
        amount,
        recipient,
        token
      }
    }, _fee, _memo, _funds);
  };
}