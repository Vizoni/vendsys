import './App.css';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { MicroMarketsView } from './components/MicroMarketsView';
import { MicroMarketsForm } from './components/MicroMarketsForm';
import { AssetsPointTable } from './components/AssetsPointTable';
import { type MicroMarketDetails, mockAssetPointsTableData } from './data/MicroMarketsData';

function App() {
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
      <section className='flex gap-4 p-4'>
        <Button variant='ghost' onClick={handleOnClickNewButton}>
          New
        </Button>
        <Button variant='ghost'>Delete</Button>
        <Button variant='default' disabled={!hasFormChanges} onClick={handleOnClickSaveButton}>
          Save
        </Button>
      </section>
      <section className='flex gap-4 p-4 flex-1'>
        <div className='w-1/2'>
          <MicroMarketsView
            onMarketDetailsChange={(details) => {
              setSelectedMarketDetails(details);
              setIsAddingMarket(false);
              setSelectedAssetId(undefined);
            }}
          />
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <MicroMarketsForm
            data={selectedMarketDetails}
            isAddingMarket={isAddingMarket}
            onFormChange={setHasFormChanges}
          />
          {selectedMarketDetails && (
            <div className='bg-card border border-border rounded-lg p-6'>
              <h3 className='text-base font-extrabold mb-4 text-foreground'>Assets</h3>
              <AssetsPointTable
                data={mockAssetPointsTableData.filter((asset) =>
                  asset.kioskId.startsWith(selectedMarketDetails.marketNumber)
                )}
                selectedId={selectedAssetId}
                onRowClick={setSelectedAssetId}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
