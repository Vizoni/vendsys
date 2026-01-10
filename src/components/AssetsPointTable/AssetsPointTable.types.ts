import { type AssetPointRow } from '@/data/MicroMarketsData';

export type AssetsPointTableProps = {
  data: AssetPointRow[];
  selectedId?: string;
  onRowClick?: (id: string) => void;
};
