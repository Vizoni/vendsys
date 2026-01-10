import type { MicroMarketDetails } from '@/data/MicroMarketsData';

export const emptyFormData: MicroMarketDetails = {
  id: '',
  marketNumber: '',
  isActive: false,
  info: {
    marketNumber: '',
    mgmtNumber: '',
    account: '',
    location: 'north',
  },
  creditCard: {
    creditCardDollar: 0,
    creditCardPercent: 0,
    applyFeeToAccountTopUps: false,
    hasPriceTags: false,
  },
  provider: {
    provider: 'provider-x',
    providerConfig: '',
  },
  vdi: {
    lastMarketPush: '',
    lastProductPush: '',
    lastSaleReceived: '',
    productsInQueue: 0,
  },
};
