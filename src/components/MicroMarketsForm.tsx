import { useState, useEffect } from 'react';
import { FieldLabel, FieldDescription } from './ui/field';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { type MicroMarketDetails } from '../data/MicroMarketsData';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';

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

interface MicroMarketsFormProps {
  data?: MicroMarketDetails;
  isAddingMarket?: boolean;
  onFormChange?: (hasChanges: boolean) => void;
}

const emptyFormData: MicroMarketDetails = {
  id: '',
  isActive: false,
  info: {
    marketNumber: '',
    mgmtNumber: '',
    account: '',
    location: 'north',
  },
  creditCard: {
    creditCardDollar: 0,
    creditCardPercent: 0,
    applyFeeToAccountTopUps: false,
    hasPriceTags: false,
  },
  provider: {
    provider: 'provider-x',
    providerConfig: '',
  },
  vdi: {
    lastMarketPush: '',
    lastProductPush: '',
    lastSaleReceived: '',
    productsInQueue: 0,
  },
};

export function MicroMarketsForm({
  data,
  isAddingMarket = false,
  onFormChange,
}: MicroMarketsFormProps) {
  const [formData, setFormData] = useState<MicroMarketDetails>(emptyFormData);

  // Sincronizar dados quando data muda (item selecionado na tabela)
  useEffect(() => {
    if (data) {
      setFormData(data);
    } else {
      setFormData(emptyFormData);
    }
  }, [data]);

  const handleInputChange = (
    section: keyof Omit<MicroMarketDetails, 'id'>,
    field: string | null,
    value: unknown
  ) => {
    setFormData((prev) => {
      // Se field é null, significa que é uma propriedade de nível superior (como isActive)
      if (field === null) {
        return {
          ...prev,
          [section]: value,
        };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section as keyof Omit<MicroMarketDetails, 'id' | 'isActive'>],
          [field]: value,
        },
      };
    });
    onFormChange?.(true);
  };

  if (!data && !isAddingMarket) {
    return (
      <div className='bg-card border border-border rounded-lg p-6 min-h-[calc(100vh-200px)] flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-muted-foreground text-base'>
            Selecione um item da tabela ou clique em "New" para criar um novo registre
          </p>
        </div>
      </div>
    );
  }

  const isFormDisabled = !data && !isAddingMarket;

  return (
    <div className='bg-card border border-border rounded-lg p-6 min-h-[calc(100vh-200px)] overflow-y-auto'>
      <h2 className='text-lg font-semibold mb-6'>Market Details</h2>

      <div className='grid grid-cols-2 gap-8'>
        {/* Info Section */}
        <div>
          <h3 className='text-base font-semibold mb-4 text-foreground'>Info</h3>
          <div className='space-y-4'>
            <FormField label='Active' description='Status'>
              <div className='pt-1'>
                <Checkbox checked={formData.isActive} disabled />
              </div>
            </FormField>

            <FormField label='Market Number' description='Unique identifier'>
              <Input
                value={formData.info.marketNumber}
                onChange={(e) => handleInputChange('info', 'marketNumber', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Mgmt Number' description='Management number'>
              <Input
                value={formData.info.mgmtNumber}
                onChange={(e) => handleInputChange('info', 'mgmtNumber', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Account' description='Account name'>
              <Input
                value={formData.info.account}
                onChange={(e) => handleInputChange('info', 'account', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Location' description='Region/Location'>
              <Select
                disabled={isFormDisabled}
                value={formData.info.location}
                onValueChange={(value) =>
                  handleInputChange(
                    'info',
                    'location',
                    value as 'north' | 'east' | 'west' | 'south'
                  )
                }
              >
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
          <h3 className='text-base font-semibold mb-4 text-foreground'>Credit Card</h3>
          <div className='space-y-4'>
            <FormField label='Credit Card $' description='Dollar amount'>
              <Input
                type='number'
                value={formData.creditCard.creditCardDollar}
                onChange={(e) =>
                  handleInputChange(
                    'creditCard',
                    'creditCardDollar',
                    parseFloat(e.target.value) || 0
                  )
                }
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Credit Card %' description='Percentage amount'>
              <Input
                type='number'
                value={formData.creditCard.creditCardPercent}
                onChange={(e) =>
                  handleInputChange(
                    'creditCard',
                    'creditCardPercent',
                    parseFloat(e.target.value) || 0
                  )
                }
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Apply fee' description='Apply to top-ups'>
              <div className='pt-1'>
                <Checkbox
                  checked={formData.creditCard.applyFeeToAccountTopUps}
                  onCheckedChange={(checked) =>
                    handleInputChange('creditCard', 'applyFeeToAccountTopUps', checked)
                  }
                  disabled={isFormDisabled}
                />
              </div>
            </FormField>

            <FormField label='Price Tags' description='Has price tags'>
              <div className='pt-1'>
                <Checkbox
                  checked={formData.creditCard.hasPriceTags}
                  onCheckedChange={(checked) =>
                    handleInputChange('creditCard', 'hasPriceTags', checked)
                  }
                  disabled={isFormDisabled}
                />
              </div>
            </FormField>
          </div>
        </div>

        {/* Provider Section */}
        <div>
          <h3 className='text-base font-semibold mb-4 text-foreground'>Provider</h3>
          <div className='space-y-4'>
            <FormField label='Provider' description='Service provider'>
              <Select
                disabled={isFormDisabled}
                value={formData.provider.provider}
                onValueChange={(value) => handleInputChange('provider', 'provider', value)}
              >
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
              <Textarea
                value={formData.provider.providerConfig}
                onChange={(e) => handleInputChange('provider', 'providerConfig', e.target.value)}
                disabled={isFormDisabled}
                className='min-h-24 resize-none'
              />
            </FormField>
          </div>
        </div>

        {/* VDI Section */}
        <div>
          <h3 className='text-base font-semibold mb-4 text-foreground'>VDI</h3>
          <div className='space-y-4'>
            <FormField label='Last Market push' description='Date'>
              <Input
                type='date'
                value={formData.vdi.lastMarketPush}
                onChange={(e) => handleInputChange('vdi', 'lastMarketPush', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Last product push' description='Date'>
              <Input
                type='date'
                value={formData.vdi.lastProductPush}
                onChange={(e) => handleInputChange('vdi', 'lastProductPush', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Last sale received' description='Date'>
              <Input
                type='date'
                value={formData.vdi.lastSaleReceived}
                onChange={(e) => handleInputChange('vdi', 'lastSaleReceived', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField label='Products in queue' description='Count'>
              <div className='flex gap-2 items-center'>
                <div className='w-1/2'>
                  <Input
                    type='number'
                    value={formData.vdi.productsInQueue}
                    onChange={(e) =>
                      handleInputChange('vdi', 'productsInQueue', parseInt(e.target.value) || 0)
                    }
                    disabled={isFormDisabled}
                  />
                </div>
                <div className='w-1/2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant='outline' className='w-full'>
                        Show queue
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Not implemented yet</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
