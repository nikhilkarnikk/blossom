import React from 'react';
import { Mic, Music, Brain, LineChart } from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link from React Router


const LandingPage = () => {
  const features = [
    {
      title: "Personalized Affirmations",
      description: "Record affirmations in your voice to rewire your beliefs.",
      icon: <Mic className="w-8 h-8 text-white" />
    },
    {
      title: "Custom Meditations",
      description: "Tailor meditations to your goals using our guided templates.",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Hertz Music Integration",
      description: "Experience the power of sound frequencies to deepen your subconscious alignment.",
      icon: <Music className="w-8 h-8 text-white" />
    },
    {
      title: "Progress Tracking",
      description: "Track your journey to see how your mindset evolves.",
      icon: <LineChart className="w-8 h-8 text-white" />
    }
  ];

  const scrollToOverview = () => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 scroll-smooth snap-y snap-mandatory">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden snap-start">
      <div className="absolute inset-0">
        <img
          src="/assets/hero1.jpg"
          alt="Hero Background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Logo at top center */}
      <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20">
        <button className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
          Blossom
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-[85%] sm:w-auto sm:max-w-2xl mx-4">
          <div className="bg-white bg-opacity-80 p-8 sm:p-6 md:p-8 flex flex-col h-[60vh] sm:h-auto justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-wide font-montserrat mb-6">
              TRANSFORM YOUR MIND, TRANSFORM YOUR REALITY
            </h1>
            <p className="text-lg sm:text-xl text-black tracking-wide font-montserrat font-light mb-8">
              Unlock the power of your subconscious mind to live the life you desire.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSemS89YoB0pQdWbBH_VgzAHxmOMJNnnIXNAsyTM7Y55m9kJ6g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-light text-lg sm:text-xl font-montserrat tracking-wide hover:text-gray-700 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-200"
              >
                Sign Up For Early Access
              </a>
              <a
                href="mailto:blake@blossom-now.com"
                className="text-black font-light text-lg sm:text-xl font-montserrat tracking-wide hover:text-gray-700 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Feature boxes - only shown on larger screens (>= 1024px) */}
        <div className="hidden xl:block absolute bottom-6 left-0 right-0 z-10 px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {[
              {
                title: "Personalization",
                description: "Unlike generic apps, Blossom empowers users to create content tailored to their unique goals."
              },
              {
                title: "Science-Backed",
                description: "Blossom combines neuroscience, psychology, and sound healing for proven growth techniques."
              },
              {
                title: "Accessible & Intuitive",
                description: "Easy-to-use interface and quick tools make Blossom perfect for all experience levels."
              },
              {
                title: "All-in-One Platform",
                description: "Combines affirmations, meditations, and sound therapy in one app—no multiple tools needed."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-80 p-3 flex flex-col justify-center h-full"
              >
                <h3 className="text-xs sm:text-sm font-bold text-black mb-1">{feature.title}</h3>
                <p className="text-xs text-black text-opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section className="min-h-screen bg-[#68917b] p-4 sm:p-6 md:p-8">
      {/* Top text */}
      <div className="w-full mb-12 pt-8">
        <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto text-center px-4">
          Blossom is more than just an app—it's a personal growth tool designed to help users reprogram
          their subconscious mind, align with abundance, and create the life they desire.
        </p>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left side - Image */}
        <div className="w-full aspect-[3/4] relative">
          <img
            src="/assets/ov1.jpg"
            alt="Meditation by waterfall"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="flex items-center">
          <h2 className="text-white font-semibold" style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: '1.2'
          }}>
            Do you often find yourself dwelling on the past, scared of the future, or unsatisfied with your day-to-day life?
          </h2>
        </div>
      </div>
    </section>


      {/* Introduction Section */}
      <section className="min-h-screen bg-[#d1aa6c] p-4 sm:p-6 md:p-8">
      <div className="w-full h-full bg-white min-h-[90vh] flex flex-col md:grid md:grid-cols-2">
        {/* Text content */}
        <div className="w-full flex flex-col justify-center px-4 sm:px-8 py-8">
          <div className="w-full">
            <h2 className="font-bold text-gray-900 mb-6" style={{
              fontSize: 'clamp(2rem, 7vw, 3.5rem)',
              lineHeight: '1.1'
            }}>
              Reprogram Your Subconscious to Co-Create the Life You Deserve
            </h2>
            <p className="text-gray-700 mb-8 md:mb-0" style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
              lineHeight: '1.4'
            }}>
              Your beliefs and thoughts shape your reality. By reprogramming your subconscious mind,
              you can align with abundance, confidence, and joy to manifest your ideal life.
            </p>
          </div>

          {/* Video for mobile - shown below text */}
          <div className="md:hidden w-full mt-8">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/NM-7QsSbrcA?end=52"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Video container - desktop only */}
        <div className="hidden md:flex items-center justify-center p-4">
          <div className="w-full max-w-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/NM-7QsSbrcA?end=52"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#8da479] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Your Tool for Lasting Transformation
              </h2>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-black p-6 flex flex-col">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Science Section */}
      <section id="science" className="min-h-screen bg-white snap-start">
        <div className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              The Science of Changing Your Reality
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="mb-6">
                  <Brain className="w-16 h-16 text-purple-600 mx-auto" />
                </div>
                <p className="text-gray-600">
                  Neuroscience shows that the brain's neuroplasticity allows it to rewire itself based on
                  repeated thoughts and beliefs.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Music className="w-16 h-16 text-yellow-400 mx-auto" />
                </div>
                <p className="text-gray-600">
                  Studies confirm that meditation can reduce stress, improve focus, and create a sense of
                  well-being by altering brainwave patterns.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <LineChart className="w-16 h-16 text-blue-500 mx-auto" />
                </div>
                <p className="text-gray-600">
                  Sound frequencies, like those used in Hertz music, have been shown to promote relaxation,
                  healing, and mental clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Science images - hide on mobile */}
        <div className="w-full bg-gray-100 py-24 hidden md:block">
          <div className="w-11/12 mx-auto">
            <div className="flex items-center gap-24">
              <div className="w-1/3">
                <h3 className="text-4xl font-bold text-black">
                  Credible Scientific Articles
                </h3>
              </div>

              <div className="w-2/3 grid grid-cols-3 gap-12">
                {["science1", "science2", "science3"].map((img, index) => (
                  <a key={index} href="#" className="group">
                    <img
                      src={`/assets/${img}.webp`}
                      alt={`Science Article ${index + 1}`}
                      className="w-full h-64 object-cover mb-2"
                    />
                    <div className="h-1 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA and Footer Section Combined */}
      <section id="cta-footer" className="bg-white flex flex-col">
        {/* CTA Content */}
        <div className="h-auto md:h-screen flex flex-col md:flex-row items-center md:items-stretch">
          {/* Left side content */}
          <div className="w-full md:w-1/2 px-8 md:px-24 py-12">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
              Take the First Step Toward Your Best Life
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              By changing your subconscious beliefs, you can co-create a life of abundance,
              success, and joy. Sign up now to begin your journey with Blossom.
            </p>
            <button className="px-12 py-4 md:py-6 bg-blue-50 text-gray-900 text-xl md:text-2xl font-semibold transition-colors duration-200 hover:bg-blue-100">
              Join the Waitlist
            </button>
          </div>

          {/* Right side image - hidden on mobile */}
          <div className="hidden md:block md:w-1/2">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/assets/hero4.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
          </div>
        </div>

        {/* Footer with light blue background */}
        <footer className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">TikTok</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact</h3>
                <p className="text-gray-600">contact@blossomapp.com</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">&copy; 2025 Blossom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
