import { type AssetPointRow } from '../data/MicroMarketsData';
import { Checkbox } from './ui/checkbox';

interface AssetsPointTableProps {
  data: AssetPointRow[];
  selectedId?: string;
  onRowClick?: (id: string) => void;
}

export function AssetsPointTable({ data, selectedId, onRowClick }: AssetsPointTableProps) {
  if (data.length === 0) {
    return (
      <div className='text-center py-8 text-muted-foreground text-body-sm'>
        Nenhum ativo registrado para este mercado
      </div>
    );
  }

  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b border-border'>
            <th className='text-left text-body-md font-semibold py-3 px-4'>Asset #</th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>Kiosk Id</th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>Serial #</th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>Category</th>
            <th className='text-left text-body-md font-semibold py-3 px-4'>Model</th>
            <th className='text-center text-body-md font-semibold py-3 px-4'>Active</th>
            <th className='text-center text-body-md font-semibold py-3 px-4'>Is Cash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row.id)}
              className={`border-b border-border cursor-pointer transition-colors ${
                selectedId === row.id ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-muted/50'
              }`}
            >
              <td className='py-3 px-4 text-body-sm'>{row.assetNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.kioskId}</td>
              <td className='py-3 px-4 text-body-sm'>{row.serialNumber}</td>
              <td className='py-3 px-4 text-body-sm'>{row.category}</td>
              <td className='py-3 px-4 text-body-sm'>{row.model}</td>
              <td className='py-3 px-4 text-center'>
                <Checkbox checked={row.active} disabled />
              </td>
              <td className='py-3 px-4 text-center'>
                <Checkbox checked={row.isCash} disabled />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
