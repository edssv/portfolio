'use client';

export function DetailsSection() {
  const localTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="text-[13px] px-6 w-full flex justify-between font-bold">
      <div className="xl:flex hidden gap-4">
        <span>Место нахождения</span>
        <span className="text-gray-300">Великий Новгород 🇷🇺</span>
      </div>
      <div className="flex gap-4">
        <span className="hidden md:flex">Местное время</span>
        <span className="text-gray-300">{localTime}</span>
      </div>
    </div>
  );
}
