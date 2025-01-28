import React from 'react';
import { Mic, Music, Brain, LineChart } from 'lucide-react';

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
      <section
  id="hero"
  className="min-h-screen relative flex flex-col items-start overflow-hidden snap-start"
>
  {/* Always show the hero image across all breakpoints */}
  <div className="absolute inset-0">
    <img
      src="/assets/hero1.jpg"
      alt="Hero Background"
      className="h-full w-full object-cover object-left"
    />
  </div>

  {/* Logo at top center */}
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
    <button className="text-3xl font-montserrat font-bold text-white">
      Blossom
    </button>
  </div>

  {/* Main content */}
  <div className="relative z-10 mt-20 md:mt-28 lg:mt-36 mx-4 md:ml-12 lg:ml-24 max-w-2xl">
    <div className="bg-white bg-opacity-80 p-5 md:p-7 lg:p-10 space-y-4 md:space-y-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-wide font-montserrat">
        TRANSFORM YOUR MIND, TRANSFORM YOUR REALITY
      </h1>
      <p className="text-lg md:text-xl text-black tracking-wide font-montserrat font-light">
        Unlock the power of your subconscious mind to live the life you desire.
      </p>
      {/* Buttons side by side for all screen sizes */}
      <div className="flex items-center space-x-6">
        <button className="text-black font-light text-lg md:text-xl font-montserrat tracking-wide hover:text-gray-700 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-200">
          Sign Up For Early Access
        </button>
        <button
          onClick={() =>
            document
              .getElementById("overview")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-black font-light text-lg md:text-xl font-montserrat tracking-wide hover:text-gray-700 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Four feature boxes: hidden on screens below md */}
  <div className="hidden md:block absolute bottom-6 left-0 right-0 z-10 px-4 lg:px-12">
    <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
      {[
        {
          title: "Personalization",
          description:
            "Unlike generic apps, Blossom empowers users to create content tailored to their unique goals."
        },
        {
          title: "Science-Backed",
          description:
            "Blossom combines neuroscience, psychology, and sound healing for proven growth techniques."
        },
        {
          title: "Accessible & Intuitive",
          description:
            "Easy-to-use interface and quick tools make Blossom perfect for all experience levels."
        },
        {
          title: "All-in-One Platform",
          description:
            "Combines affirmations, meditations, and sound therapy in one app—no multiple tools needed."
        }
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-80 p-4 flex flex-col justify-center h-full"
        >
          <h3 className="text-sm font-bold text-black mb-1">{feature.title}</h3>
          <p className="text-xs text-black text-opacity-90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Overview Section */}
      <section
        id="overview"
        className="h-screen relative flex items-center justify-center bg-[#68917b] snap-start"
      >
        <div className="absolute top-0 left-0 w-full text-center py-4 px-4 md:px-0">
          <p className="text-lg sm:text-xl font-light text-white">
            Blossom is more than just an app—it's a personal growth tool designed to help users reprogram
            their subconscious mind, align with abundance, and create the life they desire.
          </p>
        </div>

        {/* Left image - hide on mobile */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center w-1/2 px-8">
          <div className="w-2/3 my-8">
            <div className="h-[38rem]">
              <img
                src="/assets/ov1.JPG"
                alt="Overview Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="absolute md:right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 px-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
            {`Do you often find yourself dwelling on the past, scared of the future, or unsatisfied with your day-to-day life?`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="inline-block relative group hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition duration-300"
                >
                  {word}
                  {index <
                    `Do you often find yourself dwelling on the past, scared of the future, or unsatisfied with your day-to-day life?`.split(" ")
                      .length -
                      1 && <span className="inline">&nbsp;</span>}
                </span>
              ))}
          </h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="h-screen relative flex items-center bg-[#d1aa6c] p-12 snap-start">
        <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-4 md:px-16 space-y-6 md:space-y-12">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
              Reprogram Your Subconscious to Co-Create the Life You Deserve
            </h2>
            <p className="text-xl md:text-4xl text-gray-700">
              Your beliefs and thoughts shape your reality. By reprogramming your subconscious mind,
              you can align with abundance, confidence, and joy to manifest your ideal life.
            </p>
          </div>

          {/* YouTube video - hidden on mobile */}
          <div className="hidden md:flex items-center justify-center pr-4 md:pr-16">
            <div className="w-full max-w-4xl aspect-video">
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
      <section id="features" className="h-auto md:h-screen flex items-center justify-center bg-white snap-start">
        <div className="w-11/12 mx-auto my-12">
          <div className="bg-[#8da479] p-6 md:p-12 h-auto md:h-[700px] flex flex-col md:flex-row items-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6 md:mb-0 md:w-1/3">
              Your Tool for Lasting Transformation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-8 md:w-1/2 md:ml-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-black p-6 h-64">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white">{feature.description}</p>
                </div>
              ))}
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
