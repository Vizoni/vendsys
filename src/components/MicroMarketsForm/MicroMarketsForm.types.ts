import React from 'react';
import { type MicroMarketDetails } from '@/data/MicroMarketsData';

export interface FormFieldProps {
  labelKey: string;
  descriptionKey: string;
  children: React.ReactNode;
  fieldId?: string;
}

export interface MicroMarketsFormProps {
  data?: MicroMarketDetails;
  isAddingMarket?: boolean;
  onFormChange?: (hasChanges: boolean) => void;
}
