import React from 'react';
import { NeonCube } from './components/NeonCube';
import { Navigation } from './components/Navigation';
import { RevealOnScroll } from './components/RevealOnScroll';
import { MenuItem, SectionId } from './types';

// Data Definitions
const MENUS: MenuItem[] = [
  {
    title: "もみほぐし整体",
    price: "¥3,300〜",
    description: "全身のバランスを整えて、本来の体へ調整します"
  },
  {
    title: "足ツボ",
    price: "¥3,300〜",
    description: "足裏から巡りを整える、本格足ツボ"
  },
  {
    title: "O2カプセル",
    price: "¥2,200〜",
    description: "酸素の力で、疲れを内側からリセット"
  },
  {
    title: "CRECIA スペシャル",
    price: "¥7,700〜",
    description: "鍼灸とマッサージを組み合わせた、至高のオーダーメイドコース。"
  }
];

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section id={SectionId.TOP} className="relative h-screen flex flex-col items-center justify-center">
        <NeonCube />
        <div className="z-10 text-center px-6">
          <RevealOnScroll delay={200}>
            <p className="text-sm md:text-base tracking-[0.4em] mb-6 text-brand-gray font-serif">広島・流川の隠れ家整体院</p>
          </RevealOnScroll>
          <RevealOnScroll delay={500}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
              整う、<br className="md:hidden" />満ちる。
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={800}>
            <p className="text-xs md:text-sm tracking-widest text-brand-gray font-light">
              SCIENTIFIC & TRADITIONAL THERAPY
            </p>
          </RevealOnScroll>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-brand-gold/50 mx-auto"></div>
          <p className="text-[10px] tracking-widest text-brand-gold mt-2 uppercase">Scroll</p>
        </div>
      </section>

      {/* Concept Section */}
      <section id={SectionId.CONCEPT} className="py-24 md:py-32 bg-brand-light relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <RevealOnScroll>
                <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] shadow-2xl">
                  <img 
                    src="https://picsum.photos/800/1200?grayscale" 
                    alt="Interior" 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply"></div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <RevealOnScroll delay={200}>
                <span className="block text-brand-gold tracking-widest text-xs mb-6 font-bold uppercase">Concept</span>
                <h3 className="text-3xl md:text-4xl font-serif leading-relaxed mb-10">
                  喧騒を離れ、<br />
                  本来の自分へ還る<br />
                  静寂の時間。
                </h3>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <p className="text-brand-gray leading-loose mb-8 font-light text-justify">
                  広島一の繁華街、流川。その喧騒の中にひっそりと佇む「CRECIA」は、
                  選ばれた大人のためのプライベート治療院です。
                  東洋医学の叡智と現代の解剖学に基づいた確かな技術で、
                  お一人おひとりの身体と心の声に耳を傾けます。
                  痛みを取り除くだけでなく、内側から溢れ出る活力を。
                </p>
                <a href="#menu" className="inline-block border-b border-brand-dark pb-1 text-sm tracking-widest hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
                  当院の施術について
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id={SectionId.MENU} className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="block text-brand-gold tracking-widest text-xs mb-4 font-bold uppercase">Menu</span>
              <h3 className="text-3xl font-serif">施術メニュー</h3>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {MENUS.map((menu, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="group p-8 md:p-10 border border-gray-100 bg-brand-light hover:shadow-xl hover:border-brand-gold/30 transition-all duration-500 cursor-default">
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-xl font-serif group-hover:text-brand-gold transition-colors duration-300">{menu.title}</h4>
                    <span className="font-serif text-lg">{menu.price}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-brand-gold/50 mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-sm text-brand-gray mb-4 font-light">{menu.description}</p>
                  <p className="text-xs tracking-widest text-brand-dark/50 text-right">{menu.time}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <RevealOnScroll delay={400}>
              <button className="bg-brand-dark text-white px-10 py-4 font-serif tracking-widest text-sm hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Web予約はこちら
              </button>
             </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery / Atmosphere */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
             <div className="flex flex-col md:flex-row gap-8 items-end">
               <div className="w-full md:w-2/3">
                 <img src="https://picsum.photos/1200/800?grayscale&blur=2" alt="Atmosphere 1" className="w-full h-auto shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-700" />
               </div>
               <div className="w-full md:w-1/3 space-y-8">
                  <img src="https://picsum.photos/600/600?grayscale" alt="Atmosphere 2" className="w-full h-auto shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-700" />
                  <div className="p-6 bg-white shadow-sm border-l-2 border-brand-gold">
                    <p className="font-serif text-lg mb-2">完全個室</p>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      プライバシーに配慮した完全個室で、周りを気にせずリラックスしていただけます。
                    </p>
                  </div>
               </div>
             </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Access Section */}
      <section id={SectionId.ACCESS} className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2">
               <RevealOnScroll>
                <span className="block text-brand-gold tracking-widest text-xs mb-6 font-bold uppercase">Access</span>
                <h3 className="text-3xl font-serif mb-8">アクセス</h3>
                
                <div className="space-y-6 font-light">
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Address</p>
                    <p>〒730-0028<br />広島県広島市中区流川町X-X CRECIAビル 3F</p>
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Open</p>
                    <p>13:00 - 22:00 (最終受付 21:00)</p>
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Closed</p>
                    <p>日曜日・祝日</p>
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Tel</p>
                    <p className="font-serif text-xl">082-XXX-XXXX</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="w-full md:w-1/2 h-80 md:h-auto bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
               {/* Google Map Placeholder */}
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="map" 
                marginHeight={0} 
                marginWidth={0} 
                scrolling="no" 
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Nagarekawa,Hiroshima&ie=UTF8&t=&z=15&iwloc=B&output=embed"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif tracking-widest mb-8 text-brand-gold">CRECIA</h2>
          <div className="flex justify-center space-x-8 mb-12 text-sm tracking-wider opacity-70">
            <a href={`#${SectionId.TOP}`} className="hover:text-brand-gold transition-colors">TOP</a>
            <a href={`#${SectionId.CONCEPT}`} className="hover:text-brand-gold transition-colors">CONCEPT</a>
            <a href={`#${SectionId.MENU}`} className="hover:text-brand-gold transition-colors">MENU</a>
            <a href={`#${SectionId.ACCESS}`} className="hover:text-brand-gold transition-colors">ACCESS</a>
          </div>
          <p className="text-xs text-brand-gray font-light tracking-widest">
            &copy; {new Date().getFullYear()} CRECIA. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;