import { paymentsUseCase } from "./payments.js";
import { gamingUseCase } from "./gaming.js";
import { nftsUseCase } from "./nfts.js";
import { govtUseCase } from "./govtSolutions.js";
import { defiUseCase } from "./defi.js";

export const USECASE_MAP = {
  payments: paymentsUseCase,
  gaming: gamingUseCase,
  nfts: nftsUseCase,
  government: govtUseCase,
  defi: defiUseCase,
};
