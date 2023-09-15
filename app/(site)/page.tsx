import Image from 'next/image';

import macImage from '@/assets/images/mac.png';
import todayPhoto from '@/assets/images/IMG_20211019_160406630.jpg';
import schoolPhoto from '@/assets/images/IMG_20150522_123204.jpg';

import { cn } from '@/lib/utils';
import { HomeSlider } from '@/components/home-page/slider';
import Link from 'next/link';
import { SocialLinks } from '@/components/home-page/social-links';
import { DetailsSection } from '@/components/home-page/details-section';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/home-page/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full items-center">
        <section className="flex flex-col w-full items-center mt-[7vh] gap-y-[7vh] mb-8">
          <div className="text-center px-6">
            <span>🏃🌍🏋🏻🏍️🇷🇺</span>
            <h1 className="lg:text-7xl max-w-4xl text-4xl lg:leading-[80px] font-bold text-center">
              Фронтенд разработчик + Просто добрый человек
            </h1>
          </div>
          <HomeSlider />
        </section>
        <section className="text-gray-100 py-6 bg-black w-full flex justify-center">
          <div className="max-w-7xl flex w-full items-center flex-col gap-y-16 md:gap-y-28 xl:gap-y-[200px]">
            <DetailsSection />
            <div className="text-center flex items-center flex-col">
              <Image src={macImage.src} width={148} height={148} alt="Ретро мак" />
              <h2 className={cn('font-pacifico text-6xl leading-[1.5] lg:text-[120px]')}>Привет</h2>
            </div>
            <div className="w-full max-w-7xl">
              <div className="grid xl:grid-cols-2 gap-4">
                <Card>
                  <div className="flex flex-col h-full justify-center">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-6">Почему я полюбил программирование?</h3>
                    <p className="text-sm xl:text-lg leading-4 xl:leading-[21px] text-gray-300">
                      Когда-то давно, я случайно попал на курс по основам программирования. На тот момент я не знал
                      ничего о кодировании и даже не представлял, что это такое. Однако, с самого первого урока, я
                      понял, что это занятие мне нравится.
                      <br />
                      <br />
                      Мне всегда нравилось творить и создавать что-то новое, но раньше я не знал, как это можно
                      применить в реальной жизни. Однако, программирование дало мне возможность делать именно это.
                      Каждый раз, когда я пишу новый код или создаю новую программу, я чувствую себя настоящим творцом.
                      <br />
                      <br />
                      Одно из главных преимуществ программирования для меня - возможность работать из дома. Я люблю
                      комфорт домашней обстановки и не зависеть от офиса или графика работы. Благодаря программированию,
                      я могу выбирать удобное для себя время и место работы. Это позволяет мне быть более продуктивным и
                      эффективным.
                      <br />
                      <br />
                      Кроме того, программирование предоставляет мне огромные возможности для саморазвития. Я всегда
                      стремлюсь узнать что-то новое и совершенствоваться в своих навыках. В мире программирования всегда
                      есть что-то новое для изучения, новые технологии и языки программирования, которые можно освоить.
                      Это постоянно мотивирует меня становиться лучше и лучше.
                      <br />
                      <br />
                      Таким образом, программирование стало моим любимым занятием из-за свободы творчества, возможности
                      работать из дома и неограниченных возможностей для саморазвития. Я рад, что случайно открыл для
                      себя это увлекательное и практичное занятие, которое принесло мне столько радости и
                      удовлетворения.
                    </p>
                  </div>
                </Card>
                <Card className="!py-[140px]">
                  <div className="relative">
                    <Image
                      src={todayPhoto.src}
                      alt="Пробежка на стадионе"
                      className="rounded-xl w-auto h-auto rotate-6 shadow-xl"
                      sizes="50vw"
                      width="0"
                      height="0"
                    />
                    <span className="text-xl font-bold -top-14 left-12 absolute rotate-6 text-gray-300">
                      На стадионе после пробежки
                    </span>
                  </div>
                  <div className="relative">
                    <Image
                      src={schoolPhoto.src}
                      alt="Школьная фотография"
                      className="rounded-xl w-auto h-auto -rotate-6 shadow-xl"
                      sizes="50vw"
                      width="0"
                      height="0"
                    />
                    <span className="text-xl font-bold -bottom-12 right-2 absolute -rotate-6 text-gray-300">
                      Мой последний звонок в школе - 2015
                    </span>
                  </div>
                </Card>
                <Card>
                  <h3 className="text-2xl lg:text-4xl font-bold mb-6">Мое первое видео</h3>
                  <p className="text-lg max-w-md text-gray-300">
                    Я записал небольшое видео для тебя, в котором я расскажу о небольшой CSS фишке.
                  </p>
                  <Link
                    target="_blank"
                    className="mt-8 hover:text-red-500 flex gap-2 transition-colors"
                    href="https://www.youtube.com/watch?v=dYZL8q_769M"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <path
                        d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>{' '}
                    Смотреть на YouTube
                  </Link>
                </Card>

                <Card>
                  <h3 className="text-2xl lg:text-4xl font-bold mb-6">5 Фактов обо мне</h3>
                  <div className="text-md xl:text-lg font-normal text-gray-300">
                    Я обожаю путешествовать и исследовать новые места 🌍
                    <br />
                    <br />
                    Я занимаюсь в тренажерном зале 🏋🏻
                    <br />
                    <br />
                    Бег - мой секрет вдохновения 🏃
                    <br />
                    <br />Я люблю мотоциклы и технику 🏍️
                    <br />
                    <br />Я живу в древнейшем городе России - Великий Новгород 🇷🇺
                  </div>
                </Card>
              </div>
              <div className="px-6 xl:px-0 flex mt-8 gap-6 justify-between">
                <SocialLinks />
                <Link
                  target="_blank"
                  className="flex gap-2 text-lg font-bold hover:text-pink-700 transition-colors"
                  href={siteConfig.links.github}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                      d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Смотреть код приложения
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
