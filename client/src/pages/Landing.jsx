import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Header Badge */}

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 animate-fadeIn delay-100">
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Potato Disease
          </span>
          <br />
          <span className="text-white">Detection System</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 text-center max-w-3xl mb-16 animate-fadeIn delay-200">
          Protect your crops with cutting-edge AI technology. Upload a leaf photo and get instant disease diagnosis with confidence scores.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-16 w-full px-4 animate-fadeIn delay-300">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Instant Analysis',
              desc: 'Get results in seconds with our advanced CNN model',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'High Accuracy',
              desc: 'Trained on thousands of images for reliable detection',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Early Detection',
              desc: 'Catch diseases early to prevent crop loss',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="text-green-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/detect')}
          className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold text-lg text-white shadow-lg shadow-green-500/50 hover:shadow-green-500/70 hover:scale-105 transition-all duration-300 animate-fadeIn delay-400 mb-20"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Detection
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
        </button>

        {/* Disease types */}
        <div className="flex flex-wrap justify-center gap-5 animate-fadeIn delay-500">
          <span className="px-5 py-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
            Early Blight
          </span>
          <span className="px-5 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium">
            Late Blight
          </span>
          <span className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
            Healthy
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default Landing;