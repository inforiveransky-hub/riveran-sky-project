import { useRouteError, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark to-gray-900 flex items-center justify-center p-8">
      <div className="text-center max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
        <div className="w-24 h-24 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-Black mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Sorry, we couldn't find this page.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full px-8 py-4 bg-primary-light text-primary-dark rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            ← Go Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="w-full px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
