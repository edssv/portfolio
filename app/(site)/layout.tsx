import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-2 justify-center my-6">
          <Image src={logo.src} alt="Лого" width={16} height={16} />
          <Link className="text-[13px] font-bold" href="/">
            © Эдуард Сысоев Портфолио 2023
          </Link>
        </div>
      </header>
      {children}
      <footer className="pt-24 px-6 pb-12 bg-black text-gray-300">
        <div className="mx-auto max-w-7xl flex justify-between text-[13px] font-bold">
          <span>© Эдуард Сысоев</span>
          <span>Портфолио 2023</span>
        </div>
      </footer>
    </>
  );
}
