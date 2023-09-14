export function DetailsSection() {
  const localTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="text-[13px] px-6 pt-6 w-full flex justify-between font-bold">
      <div className="flex gap-4">
        <span>Проживаю</span>
        <span className="text-gray-300">Великий Новгород 🇷🇺</span>
      </div>
      <div className="xl:flex hidden gap-4">
        <span>В настоящее время</span>
        <span className="text-gray-300">Великий Новгород 🇷🇺</span>
      </div>
      <div className="flex gap-4">
        <span>Местное время</span>
        <span className="text-gray-300">{localTime}</span>
      </div>
      <div className="xl:flex hidden gap-4">
        <span>Температура</span>
        <span className="text-gray-300">18°C</span>
      </div>
    </div>
  );
}
