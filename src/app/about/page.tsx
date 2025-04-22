import MotionWrapper from "@/components/MotionWrapper";

export default function AboutPage() {
  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">О нас</h1>
        <p className="mb-4 text-gray-700">
          Q3 — это фабрика стартапов, где инновации рождаются из практики. Мы объединяем команду экспертов, продуктологов, инженеров и визионеров, чтобы запускать быстрые, тестируемые и масштабируемые цифровые продукты.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Наша миссия</h2>
        <p className="text-gray-700 mb-4">
          Создавать технологии, которые решают реальные проблемы. Быстро валидировать идеи и превращать их в устойчивые бизнесы.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Команда</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Александр К. — продукт и стратегия</li>
          <li>Наталья М. — дизайн и UX</li>
          <li>Игорь Л. — технологии и архитектура</li>
          <li>Мария З. — маркетинг и рост</li>
        </ul>
      </div>
    </MotionWrapper>
  );
}
