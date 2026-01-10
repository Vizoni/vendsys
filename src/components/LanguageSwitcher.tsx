import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLangLabel = i18n.language === 'en' ? 'English' : 'Português (Brasil)';
  const nextLangLabel = i18n.language === 'en' ? 'Português (Brasil)' : 'English';

  return (
    <Button
      variant='outline'
      onClick={toggleLanguage}
      aria-label={`Change language from ${currentLangLabel} to ${nextLangLabel}`}
      title={`Switch to ${nextLangLabel}`}
    >
      {i18n.language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
}
