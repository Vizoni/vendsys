import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Field, FieldGroup, FieldLegend, FieldSet, FieldLabel } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { MicroMarketsTable, type MicroMarketRow } from './MicroMarketsTable';
import { mockMicroMarketsTableData } from '../data/MicroMarketsData';

export function MicroMarketsView() {
  const [tableData, setTableData] = useState<MicroMarketRow[]>(mockMicroMarketsTableData);

  const handleActiveChange = (id: string, active: boolean) => {
    setTableData((prevData) => prevData.map((row) => (row.id === id ? { ...row, active } : row)));
  };

  return (
    <>
      <section className='p-4 gap-4 flex flex-row'>
        <Field className='flex-row items-center'>
          <FieldLabel htmlFor='region'>Region</FieldLabel>
          <Select defaultValue=''>
            <SelectTrigger id='region'>
              <SelectValue placeholder='Choose region' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='north'>North</SelectItem>
              <SelectItem value='east'>East</SelectItem>
              <SelectItem value='west'>West</SelectItem>
              <SelectItem value='south'>South</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <FieldSet className='flex flex-row'>
          <FieldLegend>Include Inactive</FieldLegend>
          <FieldGroup>
            <Field orientation='horizontal'>
              <Checkbox id='include-inactive' defaultChecked />
            </Field>
          </FieldGroup>
        </FieldSet>
      </section>
      <section className='p-4'>
        <MicroMarketsTable data={tableData} onActiveChange={handleActiveChange} />
      </section>
    </>
  );
}
