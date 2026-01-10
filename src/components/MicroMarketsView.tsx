import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Field, FieldGroup, FieldSet, FieldLabel } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { MicroMarketsTable, type MicroMarketRow } from './MicroMarketsTable';
import {
  mockMicroMarketsTableData,
  mockMicroMarketsDetailedData,
  type MicroMarketDetails,
} from '../data/MicroMarketsData';

interface MicroMarketsViewProps {
  onMarketDetailsChange?: (details: MicroMarketDetails | undefined) => void;
}

export function MicroMarketsView({ onMarketDetailsChange }: MicroMarketsViewProps) {
  const [tableData, setTableData] = useState<MicroMarketRow[]>(mockMicroMarketsTableData);
  const [selectedMarketId, setSelectedMarketId] = useState<string>();

  const handleActiveChange = (id: string, active: boolean) => {
    setTableData((prevData) => prevData.map((row) => (row.id === id ? { ...row, active } : row)));
  };

  const handleRowClick = (id: string) => {
    setSelectedMarketId(id);
    const details = mockMicroMarketsDetailedData.find((m) => m.id === id);
    if (details) {
      onMarketDetailsChange?.(details);
    }
  };

  return (
    <>
      <section className='gap-4 p-4 flex flex-row items-center'>
        <div className='flex flex-row items-center gap-2'>
          <FieldLabel htmlFor='region' className='text-body-sm'>Region</FieldLabel>
          <Select defaultValue=''>
            <SelectTrigger id='region' className='w-48'>
              <SelectValue placeholder='Choose region' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='north'>North</SelectItem>
              <SelectItem value='east'>East</SelectItem>
              <SelectItem value='west'>West</SelectItem>
              <SelectItem value='south'>South</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FieldSet className='flex flex-row items-center gap-2 whitespace-nowrap'>
          <FieldLabel htmlFor='include-inactive' className='whitespace-nowrap text-body-sm'>
            Include Inactive
          </FieldLabel>
          <FieldGroup>
            <Field orientation='horizontal'>
              <Checkbox id='include-inactive' defaultChecked />
            </Field>
          </FieldGroup>
        </FieldSet>
      </section>
      <section className='p-4'>
        <MicroMarketsTable
          data={tableData}
          selectedId={selectedMarketId}
          onActiveChange={handleActiveChange}
          onRowClick={handleRowClick}
        />
      </section>
    </>
  );
}
