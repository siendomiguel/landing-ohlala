'use client';

import { useRouter } from 'next/navigation';

const Iconoir = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#ffffff"
  >
    <path
      d="M11 6L5 12L11 18"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M19 6L13 12L19 18"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);
const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed bottom-4 right-4 bg-purple-700 text-white p-30 rounded-full shadow-md hover:bg-purple-600 transition"
    >
      <Iconoir />
    </button>
  );
};

export default BackButton;
