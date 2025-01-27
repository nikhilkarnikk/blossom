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
      <section id="hero" className="h-screen relative flex items-center overflow-hidden snap-start">
       <div className="absolute inset-0">
         <img 
           src="/src/assets/hero1.png" 
           alt="Hero Background" 
           className="h-full w-full object-cover object-left"
         />
       </div>

       <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
         <button className="text-3xl font-montserrat font-medium">
           Blossom
         </button>
       </div>

       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-24 mt-32">
         <div className="bg-white bg-opacity-80 p-12 text-center space-y-8 max-w-3xl">
             <h1 className="text-4xl sm:text-6xl font-medium text-black mb-8 tracking-wide font-montserrat">
               TRANSFORM YOUR MIND, TRANSFORM YOUR REALITY
             </h1>
             <p className="text-lg sm:text-xl text-black tracking-wide font-montserrat font-light">
               Unlock the power of your subconscious mind to live the life you desire.
             </p>
           <div className="flex items-center justify-center space-x-8">
             <button className="text-black font-light text-2xl font-montserrat tracking-wide hover:text-gray-800 border-b-2 border-transparent hover:border-black pb-2 transition-all duration-200 px-4 flex flex-col">
               <span>Sign Up For</span>
               <span>Early Access</span>
             </button>
             <button 
               onClick={scrollToOverview}
               className="text-black font-light text-2xl font-montserrat tracking-wide hover:text-gray-800 border-b-2 border-transparent hover:border-black pb-2 transition-all duration-200 px-4 self-center"
             >
               Learn More
             </button>
           </div>
         </div>
       </div>
     </section>





      {/* Overview Section */}
      <section id="overview" className="h-screen relative flex items-center justify-center bg-[#68917b] snap-start">
       <div className="absolute top-0 left-0 w-full text-center py-4">
         <p className="text-lg sm:text-xl font-light text-white">
           Blossom is more than just an app—it's a personal growth tool designed to help users reprogram their subconscious mind, align with abundance, and create the life they desire.
         </p>
       </div>

       <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center w-1/2 px-8">
         <div className="w-2/3 mb-4">
           <img 
             src="/src/assets/ov1.jpg" 
             alt="Overview Image 1" 
             className="w-full h-auto object-cover shadow-lg" 
           />
         </div>
         <div className="w-2/3">
           <img 
             src="/src/assets/ov2.jpg" 
             alt="Overview Image 2" 
             className="w-full h-auto object-cover shadow-lg " 
           />
         </div>
       </div>

       <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 px-8">
         <h2 className="text-4xl sm:text-6xl font-semibold text-white leading-tight">
           {`Do you often find yourself dwelling on the past, scared of the future, or unsatisfied with your day-to-day life?`
             .split(" ")
             .map((word, index) => (
               <span
                 key={index}
                 className="inline-block relative group hover:underline hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition duration-300"
               >
                 {word}
                 {index < `Do you often find yourself dwelling on the past, scared of the future, or unsatisfied with your day-to-day life?`.split(" ").length - 1 && (
                   <span className="inline">&nbsp;</span>
                 )}
               </span>
             ))}
         </h2>
       </div>
     </section>




      {/* Introduction Section */}
      <section id="intro" className="h-screen relative flex items-center bg-[#d1aa6c] p-12 snap-start">
        <div className="w-full h-full bg-white grid grid-cols-2">
          <div className="flex flex-col justify-center px-16 space-y-12">
            <h2 className="text-6xl font-bold text-gray-900">
              Reprogram Your Subconscious to Co-Create the Life You Deserve
            </h2>
            <p className="text-4xl text-gray-700">
              Your beliefs and thoughts shape your reality. By reprogramming your subconscious mind, 
              you can align with abundance, confidence, and joy to manifest your ideal life.
            </p>
          </div>
          <div className="flex items-center justify-center pr-16">
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
      <section id="features" className="h-screen flex items-center justify-center bg-white snap-start">
      <div className="w-11/12 mx-auto my-12">
        <div className="bg-[#8da479] p-12 h-[700px] flex items-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-black w-1/3">
            Your Tool for Lasting Transformation
          </h2>
          <div className="grid grid-cols-2 gap-8 w-1/2 ml-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-black p-6 h-64">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-3xl font-semibold text-white mb-2">{feature.title}</h3>
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
                  Neuroscience shows that the brain's neuroplasticity allows it to rewire itself 
                  based on repeated thoughts and beliefs.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Music className="w-16 h-16 text-yellow-400 mx-auto" />
                </div>
                <p className="text-gray-600">
                  Studies confirm that meditation can reduce stress, improve focus, and create a 
                  sense of well-being by altering brainwave patterns.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <LineChart className="w-16 h-16 text-blue-500 mx-auto" />
                </div>
                <p className="text-gray-600">
                  Sound frequencies, like those used in Hertz music, have been shown to promote 
                  relaxation, healing, and mental clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 py-24">
          <div className="w-11/12 mx-auto">
            <div className="flex items-center gap-24">
              <div className="w-1/3">
                <h3 className="text-4xl font-bold text-black">
                  Credible Scientific Articles
                </h3>
              </div>

              <div className="w-2/3 grid grid-cols-3 gap-12">
                {['science1', 'science2', 'science3'].map((img, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="group"
                  >
                    <img 
                      src={`/src/assets/${img}.webp`}
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
      <section id="cta-footer" className="h-screen bg-white snap-start flex flex-col">
        {/* CTA Content */}
        <div className="flex-1 flex items-center">
          {/* Left side content */}
          <div className="w-1/2 px-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Take the First Step Toward Your Best Life
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
              By changing your subconscious beliefs, you can co-create a life of abundance, 
              success, and joy. Sign up now to begin your journey with Blossom.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 shadow-lg">
              Join the Waitlist
            </button>
          </div>
          
          {/* Right side image */}
          <div className="w-1/2 p-8 flex items-center justify-center">
            <div 
              className="w-full h-[600px] bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(/src/assets/hero4.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-purple-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-white">Instagram</a>
                  <a href="#" className="text-white/80 hover:text-white">TikTok</a>
                  <a href="#" className="text-white/80 hover:text-white">Facebook</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <p className="text-white/80">contact@blossomapp.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white/80">&copy; 2025 Blossom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;