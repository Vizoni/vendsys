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
  onActiveChange?: (id: string, active: boolean) => void;
};

export function MicroMarketsTable({ data, onActiveChange }: MicroMarketsTableProps) {
  const handleCheckboxChange = (id: string, checked: boolean) => {
    onActiveChange?.(id, checked);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b border-border'>
            <th className='text-left font-semibold py-3 px-4'>Market #</th>
            <th className='text-left font-semibold py-3 px-4'>Account</th>
            <th className='text-left font-semibold py-3 px-4'>Active</th>
            <th className='text-left font-semibold py-3 px-4'>Provider</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className='border-b border-border hover:bg-muted/50 transition-colors'>
              <td className='py-3 px-4'>{row.marketNumber}</td>
              <td className='py-3 px-4'>{row.account}</td>
              <td className='py-3 px-4'>
                <Checkbox
                  checked={row.active}
                  onCheckedChange={(checked) => handleCheckboxChange(row.id, checked as boolean)}
                />
              </td>
              <td className='py-3 px-4'>{row.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
