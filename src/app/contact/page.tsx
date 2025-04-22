import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";

export default function ContactPage() {
  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Контакты</h1>
        <p className="mb-4 text-gray-700">
          Свяжитесь с нами, если у вас есть идея, желание присоединиться или вы хотите стать партнёром.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>📧 Email: <a href="mailto:hello@q3labs.com" className="text-blue-600 underline">hello@q3labs.com</a></li>
          <li>💬 Telegram: <a href="https://t.me/q3labs" className="text-blue-600 underline">@q3labs</a></li>
          <li>🌐 GitHub: <a href="https://github.com/q3labs" className="text-blue-600 underline">github.com/q3labs</a></li>
        </ul>
      </div>
    </MotionWrapper>
  );
}
