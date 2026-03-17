"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado!</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Pedimos desculpas pelo inconveniente. Ocorreu um erro inesperado no site.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
