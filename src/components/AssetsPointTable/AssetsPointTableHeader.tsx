import { useTranslation } from 'react-i18next';

export function AssetsPointTableHeader() {
  const { t } = useTranslation();

  return (
    <thead>
      <tr className='border-b border-border'>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.assetNumber')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.kioskId')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.serialNumber')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.category')}
        </th>
        <th className='text-left text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.model')}
        </th>
        <th className='text-center text-body-md font-semibold py-3 px-4' scope='col'>
          {t('microMarkets.active')}
        </th>
        <th className='text-center text-body-md font-semibold py-3 px-4' scope='col'>
          {t('assets.isCash')}
        </th>
      </tr>
    </thead>
  );
}
