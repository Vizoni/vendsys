// Dados da tabela - simula resposta de uma API que lista os mercados
export type MicroMarketRow = {
  id: string;
  marketNumber: string;
  account: string;
  active: boolean;
  provider: string;
};

export type Regions = 'north' | 'east' | 'west' | 'south';

export type MicroMarketInfo = {
  marketNumber: string;
  mgmtNumber: string;
  account: string;
  location: Regions;
};

export type MicroMarketCreditCard = {
  creditCardDollar: number;
  creditCardPercent: number;
  applyFeeToAccountTopUps: boolean;
  hasPriceTags: boolean;
};

export type MicroMarketProvider = {
  provider: string;
  providerConfig: string;
};

export type MicroMarketVDI = {
  lastMarketPush: string; // ISO date
  lastProductPush: string; // ISO date
  lastSaleReceived: string; // ISO date
  productsInQueue: number;
};

// Dados detalhados do formulário - simula resposta de uma API que traz detalhes de um mercado
export type MicroMarketDetails = {
  id: string;
  info: MicroMarketInfo;
  creditCard: MicroMarketCreditCard;
  provider: MicroMarketProvider;
  vdi: MicroMarketVDI;
};

// Mock dos dados da tabela (como se viesse de uma API LIST)
export const mockMicroMarketsTableData: MicroMarketRow[] = [
  {
    id: '1',
    marketNumber: 'MKT-001',
    account: 'Account A',
    active: true,
    provider: 'Provider X',
  },
  {
    id: '2',
    marketNumber: 'MKT-002',
    account: 'Account B',
    active: false,
    provider: 'Provider Y',
  },
  {
    id: '3',
    marketNumber: 'MKT-003',
    account: 'Account C',
    active: true,
    provider: 'Provider Z',
  },
  {
    id: '4',
    marketNumber: 'MKT-004',
    account: 'Account D',
    active: true,
    provider: 'Provider X',
  },
];

// Mock dos dados detalhados do formulário (como se viesse de uma API GET /:id)
export const mockMicroMarketsDetailedData: Record<string, MicroMarketDetails> = {
  '1': {
    id: '1',
    info: {
      marketNumber: 'MKT-001',
      mgmtNumber: 'MGMT-001',
      account: 'Account A',
      location: 'north',
    },
    creditCard: {
      creditCardDollar: 5000,
      creditCardPercent: 2.5,
      applyFeeToAccountTopUps: true,
      hasPriceTags: true,
    },
    provider: {
      provider: 'provider-x',
      providerConfig:
        'Standard configuration for Provider X\nEndpoint: https://api.providerx.com\nAuth: OAuth 2.0',
    },
    vdi: {
      lastMarketPush: '2025-01-08',
      lastProductPush: '2025-01-09',
      lastSaleReceived: '2025-01-10',
      productsInQueue: 15,
    },
  },
  '2': {
    id: '2',
    info: {
      marketNumber: 'MKT-002',
      mgmtNumber: 'MGMT-002',
      account: 'Account B',
      location: 'east',
    },
    creditCard: {
      creditCardDollar: 3000,
      creditCardPercent: 1.8,
      applyFeeToAccountTopUps: false,
      hasPriceTags: false,
    },
    provider: {
      provider: 'provider-y',
      providerConfig:
        'Custom configuration for Provider Y\nEndpoint: https://api.providery.com\nAuth: API Key',
    },
    vdi: {
      lastMarketPush: '2025-01-07',
      lastProductPush: '2025-01-08',
      lastSaleReceived: '2025-01-09',
      productsInQueue: 8,
    },
  },
  '3': {
    id: '3',
    info: {
      marketNumber: 'MKT-003',
      mgmtNumber: 'MGMT-003',
      account: 'Account C',
      location: 'west',
    },
    creditCard: {
      creditCardDollar: 7500,
      creditCardPercent: 3.2,
      applyFeeToAccountTopUps: true,
      hasPriceTags: true,
    },
    provider: {
      provider: 'provider-z',
      providerConfig:
        'Advanced configuration for Provider Z\nEndpoint: https://api.providerz.com\nAuth: JWT Token',
    },
    vdi: {
      lastMarketPush: '2025-01-09',
      lastProductPush: '2025-01-10',
      lastSaleReceived: '2025-01-10',
      productsInQueue: 32,
    },
  },
  '4': {
    id: '4',
    info: {
      marketNumber: 'MKT-004',
      mgmtNumber: 'MGMT-004',
      account: 'Account D',
      location: 'south',
    },
    creditCard: {
      creditCardDollar: 4200,
      creditCardPercent: 2.1,
      applyFeeToAccountTopUps: false,
      hasPriceTags: true,
    },
    provider: {
      provider: 'provider-x',
      providerConfig:
        'Standard configuration for Provider X\nEndpoint: https://api.providerx.com\nAuth: OAuth 2.0',
    },
    vdi: {
      lastMarketPush: '2025-01-06',
      lastProductPush: '2025-01-07',
      lastSaleReceived: '2025-01-08',
      productsInQueue: 5,
    },
  },
};
