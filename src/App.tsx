import './App.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Button } from './components/ui/button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { MicroMarketsView } from './components/MicroMarketsView';
import { MicroMarketsForm } from './components/MicroMarketsForm';
import { AssetsPointTable } from './components/AssetsPointTable';
import { type MicroMarketDetails, mockAssetPointsTableData } from './data/MicroMarketsData';

function App() {
  const { t } = useTranslation();
  const [selectedMarketDetails, setSelectedMarketDetails] = useState<
    MicroMarketDetails | undefined
  >();
  const [hasFormChanges, setHasFormChanges] = useState(false);
  const [isAddingMarket, setIsAddingMarket] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState<string>();

  const handleOnClickNewButton = () => {
    // Estado "Novo registro": limpa seleção e ativa modo novo
    setSelectedMarketDetails(undefined);
    setHasFormChanges(false);
    setIsAddingMarket(true);
    setSelectedAssetId(undefined);
  };

  const handleOnClickSaveButton = () => {
    // TODO: Implementar lógica de save
    console.log('Salvando...');
  };

  return (
    <>
      <header
        className='flex gap-4 p-4 justify-between items-center border-b border-border'
        role='banner'
      >
        <nav className='flex gap-4' aria-label='Main actions'>
          <Button variant='outline' onClick={handleOnClickNewButton} aria-label={t('buttons.new')}>
            <PlusIcon className='size-5' aria-hidden='true' />
            {t('buttons.new')}
          </Button>
          <Button
            variant='outline'
            disabled={!selectedMarketDetails}
            aria-label={t('buttons.delete')}
          >
            <TrashIcon className='size-5' aria-hidden='true' />
            {t('buttons.delete')}
          </Button>
          <Button
            variant='save'
            disabled={!hasFormChanges}
            onClick={handleOnClickSaveButton}
            aria-label={t('buttons.save')}
          >
            <CheckIcon className='size-5' aria-hidden='true' />
            {t('buttons.save')}
          </Button>
        </nav>
        <LanguageSwitcher />
      </header>
      <main className='flex flex-col xl:flex-row gap-4 p-4 flex-1'>
        <section className='w-full xl:w-1/2' aria-label='Markets list'>
          <MicroMarketsView
            onMarketDetailsChange={(details) => {
              setSelectedMarketDetails(details);
              setIsAddingMarket(false);
              setSelectedAssetId(undefined);
            }}
          />
        </section>
        <section className='w-full xl:w-1/2 flex flex-col gap-4' aria-label='Market details'>
          <MicroMarketsForm
            data={selectedMarketDetails}
            isAddingMarket={isAddingMarket}
            onFormChange={setHasFormChanges}
          />
          {selectedMarketDetails && (
            <section
              className='bg-card border border-border rounded-lg p-6'
              aria-label='Assets section'
            >
              <h2 className='text-base font-extrabold mb-4 text-foreground'>{t('assets.title')}</h2>
              <AssetsPointTable
                data={mockAssetPointsTableData.filter((asset) =>
                  asset.kioskId.startsWith(selectedMarketDetails.marketNumber)
                )}
                selectedId={selectedAssetId}
                onRowClick={setSelectedAssetId}
              />
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
