import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FieldLabel, FieldDescription } from '../ui/field';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { type MicroMarketDetails } from '@/data/MicroMarketsData';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { type FormFieldProps, type MicroMarketsFormProps } from './MicroMarketsForm.types';
import { emptyFormData } from './MicroMarketsForm.constants';

function FormField({ labelKey, descriptionKey, children, fieldId }: FormFieldProps) {
  const { t } = useTranslation();
  return (
    <div className='flex items-start gap-4' role='group'>
      <label htmlFor={fieldId} className='w-32 flex-shrink-0 pt-2'>
        <FieldLabel className='text-sm'>{t(labelKey)}</FieldLabel>
        {descriptionKey && (
          <FieldDescription className='text-xs'>{t(descriptionKey)}</FieldDescription>
        )}
      </label>
      <div className='flex-1'>{children}</div>
    </div>
  );
}

export function MicroMarketsForm({
  data,
  isAddingMarket = false,
  onFormChange,
}: MicroMarketsFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<MicroMarketDetails>(emptyFormData);

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
      if (field === null) {
        return {
          ...prev,
          [section]: value,
        };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section as keyof Omit<MicroMarketDetails, 'id' | 'isActive' | 'marketNumber'>],
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
          <p className='text-muted-foreground text-base'>{t('microMarkets.noMarketSelected')}</p>
        </div>
      </div>
    );
  }

  const isFormDisabled = !data && !isAddingMarket;

  return (
    <form
      className='bg-card border border-border rounded-lg p-6 min-h-[calc(100vh-200px)] overflow-y-auto'
      aria-label='Market details form'
    >
      <h2 className='text-title-3xs font-extrabold tracking-title mb-6'>
        {t('microMarkets.marketDetails')}
      </h2>

      <fieldset disabled={isFormDisabled} className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <legend className='sr-only'>{t('microMarkets.marketDetails')}</legend>
        {/* Info Section */}
        <div>
          <h3 className='text-title-4xs font-semibold tracking-title mb-4 text-foreground'>
            {t('microMarkets.info')}
          </h3>
          <div className='space-y-4'>
            <FormField labelKey='microMarkets.formLabels.active' descriptionKey=''>
              <div className='pt-1'>
                <Checkbox checked={formData.isActive} disabled />
              </div>
            </FormField>

            <FormField labelKey='microMarkets.formLabels.marketNumber' descriptionKey=''>
              <Input
                value={formData.info.marketNumber}
                onChange={(e) => handleInputChange('info', 'marketNumber', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.mgmtNumber' descriptionKey=''>
              <Input
                value={formData.info.mgmtNumber}
                onChange={(e) => handleInputChange('info', 'mgmtNumber', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.account' descriptionKey=''>
              <Input
                value={formData.info.account}
                onChange={(e) => handleInputChange('info', 'account', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.location' descriptionKey=''>
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
                  <SelectValue placeholder={t('microMarkets.locations.selectPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='north'>{t('microMarkets.locations.north')}</SelectItem>
                  <SelectItem value='east'>{t('microMarkets.locations.east')}</SelectItem>
                  <SelectItem value='west'>{t('microMarkets.locations.west')}</SelectItem>
                  <SelectItem value='south'>{t('microMarkets.locations.south')}</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>
        </div>

        {/* Credit Card Section */}
        <div>
          <h3 className='text-title-4xs font-semibold tracking-title mb-4 text-foreground'>
            {t('microMarkets.creditCard')}
          </h3>
          <div className='space-y-4'>
            <FormField labelKey='microMarkets.formLabels.creditCardDollar' descriptionKey=''>
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

            <FormField labelKey='microMarkets.formLabels.creditCardPercent' descriptionKey=''>
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

            <FormField labelKey='microMarkets.formLabels.applyFee' descriptionKey=''>
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

            <FormField labelKey='microMarkets.formLabels.priceTags' descriptionKey=''>
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
          <h3 className='text-title-4xs font-semibold tracking-title mb-4 text-foreground'>
            {t('microMarkets.provider')}
          </h3>
          <div className='space-y-4'>
            <FormField labelKey='microMarkets.formLabels.provider' descriptionKey=''>
              <Select
                disabled={isFormDisabled}
                value={formData.provider.provider}
                onValueChange={(value) => handleInputChange('provider', 'provider', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('microMarkets.providers.selectPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='provider-x'>
                    {t('microMarkets.providers.providerX')}
                  </SelectItem>
                  <SelectItem value='provider-y'>
                    {t('microMarkets.providers.providerY')}
                  </SelectItem>
                  <SelectItem value='provider-z'>
                    {t('microMarkets.providers.providerZ')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField labelKey='microMarkets.formLabels.config' descriptionKey=''>
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
          <h3 className='text-title-4xs font-semibold tracking-title mb-4 text-foreground'>
            {t('microMarkets.vdi')}
          </h3>
          <div className='space-y-4'>
            <FormField labelKey='microMarkets.formLabels.lastMarketPush' descriptionKey=''>
              <Input
                type='date'
                value={formData.vdi.lastMarketPush}
                onChange={(e) => handleInputChange('vdi', 'lastMarketPush', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.lastProductPush' descriptionKey=''>
              <Input
                type='date'
                value={formData.vdi.lastProductPush}
                onChange={(e) => handleInputChange('vdi', 'lastProductPush', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.lastSaleReceived' descriptionKey=''>
              <Input
                type='date'
                value={formData.vdi.lastSaleReceived}
                onChange={(e) => handleInputChange('vdi', 'lastSaleReceived', e.target.value)}
                disabled={isFormDisabled}
              />
            </FormField>

            <FormField labelKey='microMarkets.formLabels.productsInQueue' descriptionKey=''>
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
                        {t('microMarkets.formLabels.showQueue')}
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
      </fieldset>
    </form>
  );
}
