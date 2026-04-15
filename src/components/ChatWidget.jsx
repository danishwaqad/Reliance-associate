import React from 'react';

const WHATSAPP_NUMBER = '923417006667';
const DEFAULT_MESSAGE = encodeURIComponent(
  'Hello Reliance Associate, I would like to inquire about your real estate and consultancy services. Please share the details.'
);

const ChatWidget = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105 hover:bg-[#1ebd5a]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.02 0C5.41 0 .03 5.38.03 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62A11.9 11.9 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.5-8.52Zm-8.5 18.5c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.87 9.87 0 0 1 2.03 12c0-5.51 4.48-10 9.99-10 2.67 0 5.18 1.04 7.06 2.93A9.92 9.92 0 0 1 22.02 12c0 5.52-4.49 9.99-10 9.99Zm5.48-7.49c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.08-.3-.15-1.24-.46-2.37-1.46-.87-.77-1.46-1.72-1.63-2.02-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.2-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.22 1.36.19 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
    </a>
  );
};

export default ChatWidget;
