import { useTranslation } from 'react-i18next';
import { type AssetPointRow } from '../data/MicroMarketsData';
import { Checkbox } from './ui/checkbox';

interface AssetsPointTableProps {
  data: AssetPointRow[];
  selectedId?: string;
  onRowClick?: (id: string) => void;
}

export function AssetsPointTable({ data, selectedId, onRowClick }: AssetsPointTableProps) {
  const { t } = useTranslation();
  if (data.length === 0) {
    return (
      <div className='text-center py-8 text-muted-foreground text-body-sm'>
        {t('assets.noAssetsFound')}
      </div>
    );
  }

  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse' role='grid' aria-label='Assets list'>
        <thead>
          <tr className='border-b border-border'>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.assetNumber')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.kioskId')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.serialNumber')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.category')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.model')}
            </th>
            <th className='text-center text-body-md font-semibold py-3 px-4' scope='col'>
              {t('microMarkets.active')}
            </th>
            <th className='text-center text-body-md font-semibold py-3 px-4' scope='col'>
              {t('assets.isCash')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onRowClick?.(row.id);
                }
              }}
              role='button'
              tabIndex={0}
              aria-selected={selectedId === row.id}
              className={`border-b border-border cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                selectedId === row.id ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'
              }`}
            >
              <td className='py-3 px-4 text-body-sm'>{row.assetNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.kioskId}</td>
              <td className='py-3 px-4 text-body-sm'>{row.serialNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.category}</td>
              <td className='py-3 px-4 text-body-sm'>{row.model}</td>
              <td className='py-3 px-4 text-center'>
                <Checkbox
                  checked={row.active}
                  disabled
                  aria-label={`${t('microMarkets.active')} for ${row.assetNumber}`}
                />
              </td>
              <td className='py-3 px-4 text-center'>
                <Checkbox
                  checked={row.isCash}
                  disabled
                  aria-label={`${t('assets.isCash')} for ${row.assetNumber}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
