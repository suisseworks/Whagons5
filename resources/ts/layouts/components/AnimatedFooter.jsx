import React from 'react';
import { Check } from 'lucide-react';

const AnimatedFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-slate-600">© 2024 Whagons 5</span>
        <span className="text-sm text-slate-600">El Lagar</span>
        <span className="text-sm text-slate-600"> </span>
        <div className="flex items-center gap-1">
          <Check size={12} className="text-green-500" />
          <span className="text-sm text-green-600">All systems normal</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="animated-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
        <span className="text-sm text-slate-600">v1.0.0</span>
      </div>

      {/* Keeping exactly the same CSS that was working */}
      <style jsx>{`
        .animated-dots {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot {
          width: 6px;
          height: 6px;
          margin: 0 2px;
          background-color: currentColor;
          border-radius: 50%;
          opacity: 0;
          animation: fade 1.4s infinite;
        }

        .dot:nth-child(1) {
          animation-delay: 0s;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes fade {
          0%, 80%, 100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;