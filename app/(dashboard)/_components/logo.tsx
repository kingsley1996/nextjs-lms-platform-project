'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push('/');
  };
  return (
    <Image
      onClick={onClickLogo}
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
    />
  );
};

export default Logo;
