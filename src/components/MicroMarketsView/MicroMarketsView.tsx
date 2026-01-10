import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Field, FieldGroup, FieldSet } from '../ui/field';
import { Checkbox } from '../ui/checkbox';
import { MicroMarketsTable, type MicroMarketRow } from '../MicroMarketsTable';
import { type MicroMarketsViewProps } from './MicroMarketsView.types';
import { mockMicroMarketsTableData, mockMicroMarketsDetailedData } from '@/data/MicroMarketsData';

export function MicroMarketsView({ onMarketDetailsChange }: MicroMarketsViewProps) {
  const { t } = useTranslation();
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
      <section className='gap-4 p-4 flex flex-row items-center border-b border-border'>
        <div className='flex flex-row items-center gap-2'>
          <label htmlFor='region-filter' className='text-body-sm font-medium'>
            {t('microMarkets.region')}
          </label>
          <Select defaultValue=''>
            <SelectTrigger
              id='region-filter'
              className='w-48'
              aria-label={t('microMarkets.region')}
            >
              <SelectValue placeholder={t('microMarkets.locations.selectPlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='north'>{t('microMarkets.locations.north')}</SelectItem>
              <SelectItem value='east'>{t('microMarkets.locations.east')}</SelectItem>
              <SelectItem value='west'>{t('microMarkets.locations.west')}</SelectItem>
              <SelectItem value='south'>{t('microMarkets.locations.south')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <FieldSet className='flex flex-row items-center gap-2 whitespace-nowrap'>
          <label
            htmlFor='include-inactive-filter'
            className='whitespace-nowrap text-body-sm font-medium'
          >
            {t('microMarkets.includeInactive')}
          </label>
          <FieldGroup>
            <Field orientation='horizontal'>
              <Checkbox
                id='include-inactive-filter'
                defaultChecked
                aria-label={t('microMarkets.includeInactive')}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </section>
      <section className='p-4'>
        <h2 className='sr-only'>{t('microMarkets.region')}</h2>
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
