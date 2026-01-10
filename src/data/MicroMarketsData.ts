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
  lastMarketPush: string;
  lastProductPush: string;
  lastSaleReceived: string;
  productsInQueue: number;
};

export type MicroMarketDetails = {
  id: string;
  marketNumber: string;
  isActive: boolean;
  info: MicroMarketInfo;
  creditCard: MicroMarketCreditCard;
  provider: MicroMarketProvider;
  vdi: MicroMarketVDI;
};

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

export const mockMicroMarketsDetailedData: MicroMarketDetails[] = [
  {
    id: '1',
    marketNumber: 'MKT-001',
    isActive: true,
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
  {
    id: '2',
    marketNumber: 'MKT-002',
    isActive: false,
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
  {
    id: '3',
    marketNumber: 'MKT-003',
    isActive: true,
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
  {
    id: '4',
    marketNumber: 'MKT-004',
    isActive: true,
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
];

/* ========== ASSET POINTS DATA ========== */

export type AssetPointRow = {
  id: string;
  assetNumber: string;
  kioskId: string;
  serialNumber: string;
  category: string;
  model: string;
  active: boolean;
  isCash: boolean;
};

export const mockAssetPointsTableData: AssetPointRow[] = [
  {
    id: 'AP-1-001',
    assetNumber: 'AST-001',
    kioskId: 'MKT-001-KIOSK-001',
    serialNumber: 'SN-20250001',
    category: 'Vending Machine',
    model: 'VM-3000',
    active: true,
    isCash: true,
  },
  {
    id: 'AP-1-002',
    assetNumber: 'AST-002',
    kioskId: 'MKT-001-KIOSK-002',
    serialNumber: 'SN-20250002',
    category: 'Vending Machine',
    model: 'VM-3000',
    active: true,
    isCash: false,
  },
  {
    id: 'AP-1-003',
    assetNumber: 'AST-003',
    kioskId: 'MKT-001-KIOSK-003',
    serialNumber: 'SN-20250003',
    category: 'Payment Terminal',
    model: 'PT-500',
    active: true,
    isCash: false,
  },
  {
    id: 'AP-3-001',
    assetNumber: 'AST-006',
    kioskId: 'MKT-003-KIOSK-001',
    serialNumber: 'SN-20250006',
    category: 'Vending Machine',
    model: 'VM-3000',
    active: true,
    isCash: true,
  },
  {
    id: 'AP-3-002',
    assetNumber: 'AST-007',
    kioskId: 'MKT-003-KIOSK-002',
    serialNumber: 'SN-20250007',
    category: 'Vending Machine',
    model: 'VM-3000',
    active: true,
    isCash: false,
  },
  {
    id: 'AP-3-003',
    assetNumber: 'AST-008',
    kioskId: 'MKT-003-KIOSK-003',
    serialNumber: 'SN-20250008',
    category: 'Payment Terminal',
    model: 'PT-500',
    active: true,
    isCash: false,
  },
  {
    id: 'AP-3-004',
    assetNumber: 'AST-009',
    kioskId: 'MKT-003-KIOSK-004',
    serialNumber: 'SN-20250009',
    category: 'Cooler',
    model: 'COOLER-100',
    active: true,
    isCash: false,
  },
  {
    id: 'AP-4-001',
    assetNumber: 'AST-010',
    kioskId: 'MKT-004-KIOSK-001',
    serialNumber: 'SN-20250010',
    category: 'Vending Machine',
    model: 'VM-3000',
    active: true,
    isCash: true,
  },
];

/* ========== ASSET LIST DATA ========== */

export type AssetListOption = {
  id: string;
  assetNumber: string;
  model: string;
};

export const mockAssetListOptions: AssetListOption[] = [
  {
    id: 'AP-1-001',
    assetNumber: 'AST-001',
    model: 'VM-3000',
  },
  {
    id: 'AP-1-002',
    assetNumber: 'AST-002',
    model: 'VM-3000',
  },
  {
    id: 'AP-1-003',
    assetNumber: 'AST-003',
    model: 'PT-500',
  },
  {
    id: 'AP-3-001',
    assetNumber: 'AST-006',
    model: 'VM-3000',
  },
  {
    id: 'AP-3-002',
    assetNumber: 'AST-007',
    model: 'VM-3000',
  },
];
