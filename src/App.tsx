import './App.css';
import { Button } from './components/ui/button';
import { MicroMarketsView } from './components/MicroMarketsView';
import { MicroMarketsForm } from './components/MicroMarketsForm';

function App() {
  return (
    <>
      <section className='flex gap-4 p-4'>
        <Button variant='ghost'>New</Button>
        <Button variant='ghost'>Delete</Button>
      </section>
      <section className='flex gap-4 p-4 flex-1'>
        <div className='w-1/2'>
          <MicroMarketsView />
        </div>
        <div className='w-1/2'>
          <MicroMarketsForm />
        </div>
      </section>
    </>
  );
}

export default App;
