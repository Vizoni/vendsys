import './App.css';
import { Button } from './components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from './components/ui/field';
import { Checkbox } from './components/ui/checkbox';

function App() {
  return (
    <>
      <section className='flex gap-4 p-4'>
        <Button variant='ghost'>New</Button>
        <Button variant='ghost'>Delete</Button>
      </section>
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
    </>
  );
}

export default App;
