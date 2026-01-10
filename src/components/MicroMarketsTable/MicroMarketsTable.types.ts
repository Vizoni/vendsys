export type MicroMarketRow = {
  id: string;
  marketNumber: string;
  account: string;
  active: boolean;
  provider: string;
};

export type MicroMarketsTableProps = {
  data: MicroMarketRow[];
  selectedId?: string;
  onActiveChange?: (id: string, active: boolean) => void;
  onRowClick?: (id: string) => void;
};
