import { type MicroMarketDetails } from '@/data/MicroMarketsData';

export interface MicroMarketsViewProps {
  onMarketDetailsChange?: (details: MicroMarketDetails | undefined) => void;
}
