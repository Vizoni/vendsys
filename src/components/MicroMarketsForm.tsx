import { FieldLabel, FieldDescription } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

interface FormFieldProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

function FormField({ label, description, children }: FormFieldProps) {
  return (
    <div className='flex items-start gap-4'>
      <div className='w-32 flex-shrink-0 pt-2'>
        <FieldLabel className='text-sm'>{label}</FieldLabel>
        <FieldDescription className='text-xs'>{description}</FieldDescription>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
}

export function MicroMarketsForm() {
  return (
    <div className='bg-card border border-border rounded-lg p-6 max-h-[calc(100vh-200px)] overflow-y-auto'>
      <h2 className='text-lg font-semibold mb-6'>Market Details</h2>

      <div className='grid grid-cols-2 gap-8'>
        {/* Info Section */}
        <div>
          <h3 className='text-sm font-semibold mb-4 text-foreground'>Info</h3>
          <div className='space-y-4'>
            <FormField label='Market Number' description='Unique identifier'>
              <Input placeholder='MKT-001' disabled />
            </FormField>

            <FormField label='Mgmt Number' description='Management number'>
              <Input placeholder='MGMT-001' disabled />
            </FormField>

            <FormField label='Account' description='Account name'>
              <Input placeholder='Account A' disabled />
            </FormField>

            <FormField label='Location' description='Region/Location'>
              <Select disabled defaultValue=''>
                <SelectTrigger>
                  <SelectValue placeholder='Select location' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='north'>North</SelectItem>
                  <SelectItem value='east'>East</SelectItem>
                  <SelectItem value='west'>West</SelectItem>
                  <SelectItem value='south'>South</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>
        </div>

        {/* Credit Card Section */}
        <div>
          <h3 className='text-sm font-semibold mb-4 text-foreground'>Credit Card</h3>
          <div className='space-y-4'>
            <FormField label='Credit Card $' description='Dollar amount'>
              <Input placeholder='1000.00' type='number' />
            </FormField>

            <FormField label='Credit Card %' description='Percentage amount'>
              <Input placeholder='5.5' type='number' />
            </FormField>

            <FormField label='Apply fee' description='Apply to top-ups'>
              <div className='pt-1'>
                <Checkbox />
              </div>
            </FormField>

            <FormField label='Price Tags' description='Has price tags'>
              <div className='pt-1'>
                <Checkbox />
              </div>
            </FormField>
          </div>
        </div>

        {/* Provider Section */}
        <div>
          <h3 className='text-sm font-semibold mb-4 text-foreground'>Provider</h3>
          <div className='space-y-4'>
            <FormField label='Provider' description='Service provider'>
              <Select defaultValue=''>
                <SelectTrigger>
                  <SelectValue placeholder='Select provider' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='provider-x'>Provider X</SelectItem>
                  <SelectItem value='provider-y'>Provider Y</SelectItem>
                  <SelectItem value='provider-z'>Provider Z</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label='Config' description='Provider configuration'>
              <Textarea placeholder='Provider configuration...' className='min-h-24 resize-none' />
            </FormField>
          </div>
        </div>

        {/* VDI Section */}
        <div>
          <h3 className='text-sm font-semibold mb-4 text-foreground'>VDI</h3>
          <div className='space-y-4'>
            <FormField label='Last Market push' description='Date'>
              <Input type='date' disabled />
            </FormField>

            <FormField label='Last product push' description='Date'>
              <Input type='date' disabled />
            </FormField>

            <FormField label='Last sale received' description='Date'>
              <Input type='date' disabled />
            </FormField>

            <FormField label='Products in queue' description='Count'>
              <Input type='number' placeholder='0' disabled />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
