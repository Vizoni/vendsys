import { useTranslation } from 'react-i18next';
import { type AssetListOption } from '../data/MicroMarketsData';
import { FieldLabel } from './ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface AssetListProps {
  assetOptions: AssetListOption[];
  selectedAssetId?: string;
  onAssetSelect?: (id: string) => void;
}

export function AssetList({ assetOptions, selectedAssetId, onAssetSelect }: AssetListProps) {
  const { t } = useTranslation();

  return (
    <div className='flex items-start gap-4' role='group'>
      <label htmlFor='asset-list-select' className='w-32 flex-shrink-0 pt-2'>
        <FieldLabel className='text-sm'>{t('assets.assetListTitle')}</FieldLabel>
      </label>
      <div className='flex-1'>
        <Select value={selectedAssetId || ''} onValueChange={onAssetSelect}>
          <SelectTrigger id='asset-list-select' aria-label={t('assets.assetListTitle')}>
            <SelectValue placeholder={t('assets.selectAssetPlaceholder')} />
          </SelectTrigger>
          <SelectContent>
            {assetOptions.length === 0 ? (
              <div className='px-2 py-1.5 text-sm text-neutral-600'>
                {t('assets.noAssetsFound')}
              </div>
            ) : (
              assetOptions.map((asset) => (
                <SelectItem key={asset.id} value={asset.id}>
                  {asset.assetNumber} - {asset.model}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
