import './App.css';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { MicroMarketsView } from './components/MicroMarketsView';
import { MicroMarketsForm } from './components/MicroMarketsForm';
import { type MicroMarketDetails } from './data/MicroMarketsData';

function App() {
  const [selectedMarketDetails, setSelectedMarketDetails] = useState<
    MicroMarketDetails | undefined
  >();
  const [hasFormChanges, setHasFormChanges] = useState(false);
  const [isAddingMarket, setIsAddingMarket] = useState(false);

  const handleOnClickNewButton = () => {
    // Estado "Novo registro": limpa seleção e ativa modo novo
    setSelectedMarketDetails(undefined);
    setHasFormChanges(false);
    setIsAddingMarket(true);
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
            }}
          />
        </div>
        <div className='w-1/2'>
          <MicroMarketsForm
            data={selectedMarketDetails}
            isAddingMarket={isAddingMarket}
            onFormChange={setHasFormChanges}
          />
        </div>
      </section>
    </>
  );
}

export default App;
