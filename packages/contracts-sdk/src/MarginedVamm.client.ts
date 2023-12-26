/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Uint128, Direction, Addr, Boolean, Integer} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, CalcFeeResponse, ConfigResponse, OwnerResponse, StateResponse} from "./MarginedVamm.types";
export interface MarginedVammReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  state: () => Promise<StateResponse>;
  getOwner: () => Promise<OwnerResponse>;
  inputPrice: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  outputPrice: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  inputAmount: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  outputAmount: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  inputTwap: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  outputTwap: ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }) => Promise<Uint128>;
  spotPrice: () => Promise<Uint128>;
  twapPrice: ({
    interval
  }: {
    interval: number;
  }) => Promise<Uint128>;
  underlyingPrice: () => Promise<Uint128>;
  underlyingTwapPrice: ({
    interval
  }: {
    interval: number;
  }) => Promise<Uint128>;
  calcFee: ({
    quoteAssetAmount
  }: {
    quoteAssetAmount: Uint128;
  }) => Promise<CalcFeeResponse>;
  isOverSpreadLimit: () => Promise<Boolean>;
  isOverFluctuationLimit: ({
    baseAssetAmount,
    direction
  }: {
    baseAssetAmount: Uint128;
    direction: Direction;
  }) => Promise<Boolean>;
}
export class MarginedVammQueryClient implements MarginedVammReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.state = this.state.bind(this);
    this.getOwner = this.getOwner.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
    this.outputPrice = this.outputPrice.bind(this);
    this.inputAmount = this.inputAmount.bind(this);
    this.outputAmount = this.outputAmount.bind(this);
    this.inputTwap = this.inputTwap.bind(this);
    this.outputTwap = this.outputTwap.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.twapPrice = this.twapPrice.bind(this);
    this.underlyingPrice = this.underlyingPrice.bind(this);
    this.underlyingTwapPrice = this.underlyingTwapPrice.bind(this);
    this.calcFee = this.calcFee.bind(this);
    this.isOverSpreadLimit = this.isOverSpreadLimit.bind(this);
    this.isOverFluctuationLimit = this.isOverFluctuationLimit.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  state = async (): Promise<StateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      state: {}
    });
  };
  getOwner = async (): Promise<OwnerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_owner: {}
    });
  };
  inputPrice = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      input_price: {
        amount,
        direction
      }
    });
  };
  outputPrice = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      output_price: {
        amount,
        direction
      }
    });
  };
  inputAmount = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      input_amount: {
        amount,
        direction
      }
    });
  };
  outputAmount = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      output_amount: {
        amount,
        direction
      }
    });
  };
  inputTwap = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      input_twap: {
        amount,
        direction
      }
    });
  };
  outputTwap = async ({
    amount,
    direction
  }: {
    amount: Uint128;
    direction: Direction;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      output_twap: {
        amount,
        direction
      }
    });
  };
  spotPrice = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      spot_price: {}
    });
  };
  twapPrice = async ({
    interval
  }: {
    interval: number;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      twap_price: {
        interval
      }
    });
  };
  underlyingPrice = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      underlying_price: {}
    });
  };
  underlyingTwapPrice = async ({
    interval
  }: {
    interval: number;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      underlying_twap_price: {
        interval
      }
    });
  };
  calcFee = async ({
    quoteAssetAmount
  }: {
    quoteAssetAmount: Uint128;
  }): Promise<CalcFeeResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      calc_fee: {
        quote_asset_amount: quoteAssetAmount
      }
    });
  };
  isOverSpreadLimit = async (): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_over_spread_limit: {}
    });
  };
  isOverFluctuationLimit = async ({
    baseAssetAmount,
    direction
  }: {
    baseAssetAmount: Uint128;
    direction: Direction;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_over_fluctuation_limit: {
        base_asset_amount: baseAssetAmount,
        direction
      }
    });
  };
}
export interface MarginedVammInterface extends MarginedVammReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    baseAssetHoldingCap,
    fluctuationLimitRatio,
    initialMarginRatio,
    insuranceFund,
    marginEngine,
    openInterestNotionalCap,
    pricefeed,
    spotPriceTwapInterval,
    spreadRatio,
    tollRatio
  }: {
    baseAssetHoldingCap?: Uint128;
    fluctuationLimitRatio?: Uint128;
    initialMarginRatio?: Uint128;
    insuranceFund?: string;
    marginEngine?: string;
    openInterestNotionalCap?: Uint128;
    pricefeed?: string;
    spotPriceTwapInterval?: number;
    spreadRatio?: Uint128;
    tollRatio?: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwner: ({
    owner
  }: {
    owner: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  swapInput: ({
    baseAssetLimit,
    canGoOverFluctuation,
    direction,
    positionId,
    quoteAssetAmount
  }: {
    baseAssetLimit: Uint128;
    canGoOverFluctuation: boolean;
    direction: Direction;
    positionId: number;
    quoteAssetAmount: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  swapOutput: ({
    baseAssetAmount,
    direction,
    positionId,
    quoteAssetLimit
  }: {
    baseAssetAmount: Uint128;
    direction: Direction;
    positionId: number;
    quoteAssetLimit: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  settleFunding: (_fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setOpen: ({
    open
  }: {
    open: boolean;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  migrateLiquidity: ({
    fluctuationLimitRatio,
    liquidityMultiplier
  }: {
    fluctuationLimitRatio?: Uint128;
    liquidityMultiplier: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MarginedVammClient extends MarginedVammQueryClient implements MarginedVammInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
    this.swapInput = this.swapInput.bind(this);
    this.swapOutput = this.swapOutput.bind(this);
    this.settleFunding = this.settleFunding.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.migrateLiquidity = this.migrateLiquidity.bind(this);
  }

  updateConfig = async ({
    baseAssetHoldingCap,
    fluctuationLimitRatio,
    initialMarginRatio,
    insuranceFund,
    marginEngine,
    openInterestNotionalCap,
    pricefeed,
    spotPriceTwapInterval,
    spreadRatio,
    tollRatio
  }: {
    baseAssetHoldingCap?: Uint128;
    fluctuationLimitRatio?: Uint128;
    initialMarginRatio?: Uint128;
    insuranceFund?: string;
    marginEngine?: string;
    openInterestNotionalCap?: Uint128;
    pricefeed?: string;
    spotPriceTwapInterval?: number;
    spreadRatio?: Uint128;
    tollRatio?: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        base_asset_holding_cap: baseAssetHoldingCap,
        fluctuation_limit_ratio: fluctuationLimitRatio,
        initial_margin_ratio: initialMarginRatio,
        insurance_fund: insuranceFund,
        margin_engine: marginEngine,
        open_interest_notional_cap: openInterestNotionalCap,
        pricefeed,
        spot_price_twap_interval: spotPriceTwapInterval,
        spread_ratio: spreadRatio,
        toll_ratio: tollRatio
      }
    }, _fee, _memo, _funds);
  };
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
  swapInput = async ({
    baseAssetLimit,
    canGoOverFluctuation,
    direction,
    positionId,
    quoteAssetAmount
  }: {
    baseAssetLimit: Uint128;
    canGoOverFluctuation: boolean;
    direction: Direction;
    positionId: number;
    quoteAssetAmount: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      swap_input: {
        base_asset_limit: baseAssetLimit,
        can_go_over_fluctuation: canGoOverFluctuation,
        direction,
        position_id: positionId,
        quote_asset_amount: quoteAssetAmount
      }
    }, _fee, _memo, _funds);
  };
  swapOutput = async ({
    baseAssetAmount,
    direction,
    positionId,
    quoteAssetLimit
  }: {
    baseAssetAmount: Uint128;
    direction: Direction;
    positionId: number;
    quoteAssetLimit: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      swap_output: {
        base_asset_amount: baseAssetAmount,
        direction,
        position_id: positionId,
        quote_asset_limit: quoteAssetLimit
      }
    }, _fee, _memo, _funds);
  };
  settleFunding = async (_fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      settle_funding: {}
    }, _fee, _memo, _funds);
  };
  setOpen = async ({
    open
  }: {
    open: boolean;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_open: {
        open
      }
    }, _fee, _memo, _funds);
  };
  migrateLiquidity = async ({
    fluctuationLimitRatio,
    liquidityMultiplier
  }: {
    fluctuationLimitRatio?: Uint128;
    liquidityMultiplier: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      migrate_liquidity: {
        fluctuation_limit_ratio: fluctuationLimitRatio,
        liquidity_multiplier: liquidityMultiplier
      }
    }, _fee, _memo, _funds);
  };
}