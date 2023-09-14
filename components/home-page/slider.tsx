'use client';

import slideImage from '@/assets/images/iPad Gallery.jpg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function HomeSlider() {
  return (
    <Marquee>
      <Image
        priority
        src={slideImage.src}
        width={0}
        sizes="100vw"
        height={0}
        className="min-w-[100vw] max-w-[100vw] h-auto"
        alt="Slide"
      />

      <Image
        priority
        src={slideImage.src}
        width={0}
        sizes="100vw"
        height={0}
        className="min-w-[100vw] max-w-[100vw] h-auto"
        alt="Slide"
      />
    </Marquee>
  );
}
