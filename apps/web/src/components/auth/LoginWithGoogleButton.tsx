import googleSvg from '@/../public/icons/google.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function LoginWithGoogleButton() {
  const t = useTranslations();

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/api/auth/oauth/google/login';
  };

  return (
    <Button
      className="flex w-full items-center gap-2"
      type="button"
      variant="outline"
      onClick={handleGoogleLogin}
    >
      <Image alt="Google Chrome logo" height={24} src={googleSvg} width={24} />
      {t('general.continue_with_google')}
    </Button>
  );
}
