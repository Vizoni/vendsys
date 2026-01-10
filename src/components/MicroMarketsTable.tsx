import { useTranslation } from 'react-i18next';
import { Checkbox } from './ui/checkbox';

export type MicroMarketRow = {
  id: string;
  marketNumber: string;
  account: string;
  active: boolean;
  provider: string;
};

type MicroMarketsTableProps = {
  data: MicroMarketRow[];
  selectedId?: string;
  onActiveChange?: (id: string, active: boolean) => void;
  onRowClick?: (id: string) => void;
};

export function MicroMarketsTable({
  data,
  selectedId,
  onActiveChange,
  onRowClick,
}: MicroMarketsTableProps) {
  const { t } = useTranslation();
  const handleCheckboxChange = (id: string, checked: boolean) => {
    onActiveChange?.(id, checked);
  };

  const handleRowClick = (id: string) => {
    onRowClick?.(id);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse' role='grid' aria-label='Micro markets list'>
        <thead>
          <tr className='border-b border-border'>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('microMarkets.marketNumber')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('microMarkets.account')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('microMarkets.active')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
              {t('microMarkets.provider')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleRowClick(row.id);
                }
              }}
              role='button'
              tabIndex={0}
              aria-selected={selectedId === row.id}
              className={`cursor-pointer border-b border-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                selectedId === row.id ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'
              }`}
            >
              <td className='py-3 px-4 text-body-sm'>{row.marketNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.account}</td>
              <td className='py-3 px-4'>
                <Checkbox
                  checked={row.active}
                  onCheckedChange={(checked) => handleCheckboxChange(row.id, checked as boolean)}
                  aria-label={`${t('microMarkets.active')} for ${row.marketNumber}`}
                />
              </td>
              <td className='py-3 px-4 text-body-sm'>{row.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
