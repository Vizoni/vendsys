export interface AssetListProps {
  assetOptions: Array<{
    id: string;
    assetNumber: string;
    model: string;
  }>;
  selectedAssetId?: string;
  onAssetSelect?: (id: string) => void;
}
