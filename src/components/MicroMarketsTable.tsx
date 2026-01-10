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
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b border-border'>
            <th className='text-left text-body-md font-semibold py-3 px-4'>
              {t('microMarkets.marketNumber')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>
              {t('microMarkets.account')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>
              {t('microMarkets.active')}
            </th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>
              {t('microMarkets.provider')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row.id)}
              className={`cursor-pointer border-b border-border transition-colors ${
                selectedId === row.id ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'
              }`}
            >
              <td className='py-3 px-4 text-body-sm'>{row.marketNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.account}</td>
              <td className='py-3 px-4'>
                <Checkbox
                  checked={row.active}
                  onCheckedChange={(checked) => handleCheckboxChange(row.id, checked as boolean)}
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
