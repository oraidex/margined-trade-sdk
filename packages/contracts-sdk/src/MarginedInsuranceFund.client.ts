/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, AssetInfo, Addr} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, AllVammResponse, AllVammStatusResponse, OwnerResponse, VammStatusResponse, VammResponse} from "./MarginedInsuranceFund.types";
export interface MarginedInsuranceFundReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  getOwner: () => Promise<OwnerResponse>;
  isVamm: ({
    vamm
  }: {
    vamm: string;
  }) => Promise<VammResponse>;
  getAllVamm: ({
    limit
  }: {
    limit?: number;
  }) => Promise<AllVammResponse>;
  getAllVammStatus: ({
    limit
  }: {
    limit?: number;
  }) => Promise<AllVammStatusResponse>;
  getVammStatus: ({
    vamm
  }: {
    vamm: string;
  }) => Promise<VammStatusResponse>;
}
export class MarginedInsuranceFundQueryClient implements MarginedInsuranceFundReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.getOwner = this.getOwner.bind(this);
    this.isVamm = this.isVamm.bind(this);
    this.getAllVamm = this.getAllVamm.bind(this);
    this.getAllVammStatus = this.getAllVammStatus.bind(this);
    this.getVammStatus = this.getVammStatus.bind(this);
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
  isVamm = async ({
    vamm
  }: {
    vamm: string;
  }): Promise<VammResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_vamm: {
        vamm
      }
    });
  };
  getAllVamm = async ({
    limit
  }: {
    limit?: number;
  }): Promise<AllVammResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_all_vamm: {
        limit
      }
    });
  };
  getAllVammStatus = async ({
    limit
  }: {
    limit?: number;
  }): Promise<AllVammStatusResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_all_vamm_status: {
        limit
      }
    });
  };
  getVammStatus = async ({
    vamm
  }: {
    vamm: string;
  }): Promise<VammStatusResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_vamm_status: {
        vamm
      }
    });
  };
}
export interface MarginedInsuranceFundInterface extends MarginedInsuranceFundReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  addVamm: ({
    vamm
  }: {
    vamm: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  removeVamm: ({
    vamm
  }: {
    vamm: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  withdraw: ({
    amount,
    token
  }: {
    amount: Uint128;
    token: AssetInfo;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  shutdownVamms: ($fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarginedInsuranceFundClient extends MarginedInsuranceFundQueryClient implements MarginedInsuranceFundInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateOwner = this.updateOwner.bind(this);
    this.addVamm = this.addVamm.bind(this);
    this.removeVamm = this.removeVamm.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.shutdownVamms = this.shutdownVamms.bind(this);
  }

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
  addVamm = async ({
    vamm
  }: {
    vamm: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_vamm: {
        vamm
      }
    }, $fee, $memo, $funds);
  };
  removeVamm = async ({
    vamm
  }: {
    vamm: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_vamm: {
        vamm
      }
    }, $fee, $memo, $funds);
  };
  withdraw = async ({
    amount,
    token
  }: {
    amount: Uint128;
    token: AssetInfo;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {
        amount,
        token
      }
    }, $fee, $memo, $funds);
  };
  shutdownVamms = async ($fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      shutdown_vamms: {}
    }, $fee, $memo, $funds);
  };
}