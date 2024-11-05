import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Lire la langue depuis le cookie `NEXT_LOCALE`, ou revenir à "fr" si non défini
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
