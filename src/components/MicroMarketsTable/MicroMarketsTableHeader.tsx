import { useTranslation } from 'react-i18next';

export function MicroMarketsTableHeader() {
  const { t } = useTranslation();

  return (
    <thead>
      <tr className='border-b border-border'>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('microMarkets.marketNumber')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('microMarkets.account')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('microMarkets.active')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('microMarkets.provider')}
        </th>
      </tr>
    </thead>
  );
}
