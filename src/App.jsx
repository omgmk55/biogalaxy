import React, { useState, useEffect } from 'react';
import { Leaf, Coffee, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Menu, X, CheckCircle, Target, Award, ShieldCheck, ArrowRight, Heart, Sparkles, Wallet } from 'lucide-react';


const navigation = [
  { name: 'Accueil', id: 'home' },
  { name: 'Nos Produits', id: 'products' },
  { name: 'Préparation', id: 'prep' },
  { name: 'À Propos', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

const products = [
  {
    name: "Bulukutu Téa",
    category: "the",
    image: "/bulukutu-tea.png",
    benefits: ["Anti-grippal, réduit la fièvre", "Aide à la digestion", "Calme les douleurs menstruelles", "Coupe-faim (perte de poids)"]
  },
  {
    name: "Bulukutu Gingembre",
    category: "the",
    image: "/bulukutu-gingembre.png",
    benefits: ["Effet amincissant", "Réduit la fatigue", "Puissant aphrodisiaque", "Santé cardiovasculaire"]
  },
  {
    name: "Sinda Infusion",
    category: "the",
    image: "/sinda-infusion.png",
    benefits: ["Tisane détox", "Lutte contre le stress", "Prévient le cancer", "Soulage les rhumatismes"]
  },
  {
    name: "Mbonze Bio",
    category: "the",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80",
    benefits: ["Renforce le système immunitaire", "Propriétés anti-inflammatoires", "Riche en antioxydants", "Améliore la circulation"]
  },
  {
    name: "Gingembre Téa",
    category: "the",
    image: "/gingembre-tea.png",
    benefits: ["Combat la fatigue générale", "Antibiotique naturel", "Prévient les tumeurs", "Aide contre les hémorroïdes"]
  },
  {
    name: "Jus Galaxy Gingembre",
    category: "jus",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80",
    benefits: ["Concentré d'énergie", "Saveur intense", "100% Naturel", "Sans conservateurs"]
  },
  {
    name: "Jus Galaxy Ananas",
    category: "jus",
    image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6d54?auto=format&fit=crop&q=80",
    benefits: ["Riche en vitamines", "Goût tropical exquis", "Rafraîchissant", "Zéro sucre ajouté"]
  },
  {
    name: "Jus Galaxy Bisap",
    category: "jus",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80", // Hibiscus placeholder
    benefits: ["Riche en vitamine C", "Propriétés diurétiques", "Aide à la digestion", "Couleur naturelle vibrante"]
  },
  {
    name: "Jus Galaxy Baobab",
    category: "jus",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80",
    benefits: ["Super-aliment", "Énergie durable", "Riche en fibres", "Goût unique acidulé"]
  },
  {
    name: "MayoGalaxy",
    category: "patisserie", // Classified as patisserie/food as requested
    image: "https://images.unsplash.com/photo-1516075300171-46bb912b7793?auto=format&fit=crop&q=80",
    benefits: ["Mayonnaise onctueuse", "Faite maison", "Ingrédients frais", "Goût authentique"]
  },
  {
    name: "Beurre de Cacahuète (Mwamba)",
    category: "patisserie", // Classified as patisserie/food as requested
    image: "https://images.unsplash.com/photo-1518177995663-1250325433ea?auto=format&fit=crop&q=80",
    benefits: ["100% Arachides grillées", "Riche en protéines", "Sans huile de palme", "Texture crémeuse"]
  },
  {
    name: "Gâteau Cake Sucré",
    category: "patisserie",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    benefits: ["Moelleux et savoureux", "Idéal pour le goûter", "Fait avec amour", "Recette traditionnelle"]
  },
  {
    name: "Croissant",
    category: "patisserie",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80",
    benefits: ["Pâte feuilletée au beurre", "Croustillant et doré", "Petit-déjeuner parfait", "Fait main"]
  },
  {
    name: "Crêpes",
    category: "patisserie",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80",
    benefits: ["Légères et fines", "Garniture au choix", "Douceur sucrée", "Plaisir immédiat"]
  }
];

const HomePage = ({ setActivePage }) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <section className="relative h-[650px] flex items-center justify-center text-white bg-green-950 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80')] bg-cover bg-center scale-105 transition-transform duration-10000 hover:scale-100"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Leaf className="text-yellow-500 w-12 h-12" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white uppercase">BIO GALAXY</h1>
        <p className="text-xl md:text-2xl mb-8 font-medium italic text-green-100">"Un thé de table essentiel pour un très bon déjeuner relaxateur"</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActivePage('products')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            Voir la Gamme <ArrowRight size={20} />
          </button>
          <button
            onClick={() => setActivePage('about')}
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl"
          >
            Notre Histoire
          </button>
        </div>
      </div>
    </section>

    {/* Featured Section with Logo */}
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-[#358f31] p-0 rounded-full border-4 border-green-800 shadow-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
              <img src="/logo.jpg" alt="Bio Galaxy Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-black text-green-900 mb-6 uppercase leading-tight">100% Organic, <br /><span className="text-yellow-600">100% Congolais</span></h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Sans conservateurs chimiques, sans arômes artificiels, sans colorants artificiels ni exhausteurs de goût. Nos tisanes en poudre naturelle protègent et renforcent votre immunité.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <span className="font-bold text-sm">Bio-Certifié (LAMAN)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <span className="font-bold text-sm">Vitalité Durable</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Nos Valeurs Section */}
    <section className="py-20 bg-green-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">NOS VALEURS</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Ce qui nous définit</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* L'authenticité */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">L'Authenticité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nos combinaisons de valeurs et de goûts uniques. Chaque produit Bio Galaxy est le fruit d'un savoir-faire artisanal congolais authentique.
            </p>
          </div>

          {/* La durabilité */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">La Durabilité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nous sommes issus de l'agriculture biologique, normées et approuvées par le laboratoire de microbiologie appliquée et nutrition (LAMAN) Faculté de sciences de l'Université de Kinshasa/RDC.
            </p>
          </div>

          {/* L'accessibilité */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Wallet className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">L'Accessibilité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nos paquets de thé sont très économiques et accessibles à toutes les bourses. La santé naturelle ne devrait pas être un luxe.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Products Preview Section */}
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">NOS PRODUITS</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">La Gamme Galaxy</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bulukutu Téa */}
          <div className="group cursor-pointer" onClick={() => setActivePage('products')}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img
                src="/bulukutu-tea.png"
                alt="Bulukutu Téa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-black uppercase text-lg">Découvrir</span>
              </div>
            </div>
            <h3 className="text-xl font-black text-green-950 mt-4 text-center uppercase">Bulukutu Téa</h3>
            <p className="text-gray-500 text-sm text-center font-medium">Anti-grippal & Digestif</p>
          </div>

          {/* Bulukutu Gingembre */}
          <div className="group cursor-pointer" onClick={() => setActivePage('products')}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img
                src="/bulukutu-gingembre.png"
                alt="Bulukutu Gingembre"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-black uppercase text-lg">Découvrir</span>
              </div>
            </div>
            <h3 className="text-xl font-black text-green-950 mt-4 text-center uppercase">Bulukutu Gingembre</h3>
            <p className="text-gray-500 text-sm text-center font-medium">Amincissant & Énergisant</p>
          </div>

          {/* Sinda Infusion */}
          <div className="group cursor-pointer" onClick={() => setActivePage('products')}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img
                src="/sinda-infusion.png"
                alt="Sinda Infusion"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-black uppercase text-lg">Découvrir</span>
              </div>
            </div>
            <h3 className="text-xl font-black text-green-950 mt-4 text-center uppercase">Sinda Infusion</h3>
            <p className="text-gray-500 text-sm text-center font-medium">Détox & Anti-stress</p>
          </div>

          {/* Gingembre Téa */}
          <div className="group cursor-pointer" onClick={() => setActivePage('products')}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img
                src="/gingembre-tea.png"
                alt="Gingembre Téa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-black uppercase text-lg">Découvrir</span>
              </div>
            </div>
            <h3 className="text-xl font-black text-green-950 mt-4 text-center uppercase">Gingembre Téa</h3>
            <p className="text-gray-500 text-sm text-center font-medium">Anti-fatigue & Prévention</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setActivePage('products')}
            className="bg-green-950 hover:bg-green-800 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-xl inline-flex items-center gap-3"
          >
            Voir Tous Les Produits <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>

    {/* Chiffres Clés Section */}
    <section className="py-20 bg-green-950 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-900 rounded-full blur-[150px] opacity-30 -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-[150px] opacity-20 -mr-48 -mb-48"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-white text-center mb-4 uppercase tracking-tighter">NOS CHIFFRES CLÉS</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm">Notre Impact</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
            <span className="block text-5xl font-black text-yellow-500 mb-2">4+</span>
            <span className="text-green-300 font-bold uppercase text-sm tracking-widest">Variétés de Thé</span>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
            <span className="block text-5xl font-black text-yellow-500 mb-2">100%</span>
            <span className="text-green-300 font-bold uppercase text-sm tracking-widest">Biologique</span>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
            <span className="block text-5xl font-black text-yellow-500 mb-2">2021</span>
            <span className="text-green-300 font-bold uppercase text-sm tracking-widest">Année de Création</span>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
            <span className="block text-5xl font-black text-yellow-500 mb-2">10+</span>
            <span className="text-green-300 font-bold uppercase text-sm tracking-widest">Points de Vente</span>
          </div>
        </div>
      </div>
    </section>

    {/* Où Nous Trouver Section */}
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">OÙ NOUS TROUVER</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Nos Points de Vente</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Kin-Marché", "Food-Market", "GG-Market", "Swiss-Market"].map((store, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 text-center group hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-900 transition-colors">
                <MapPin className="text-green-900 w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-green-950 uppercase">{store}</h3>
              <p className="text-gray-500 text-sm font-medium mt-2">Kinshasa, RDC</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg font-medium">
          Et dans bien d'autres supermarchés à travers <span className="font-black text-green-900">Kinshasa</span> !
        </p>
      </div>
    </section>

    {/* Témoignages Section */}
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">TÉMOIGNAGES</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Ce que disent nos clients</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-[2rem] p-10 relative">
            <div className="absolute -top-4 left-10 text-6xl text-green-200 font-serif">"</div>
            <p className="text-gray-700 leading-relaxed font-medium mb-6 relative z-10">
              Depuis que j'ai découvert Bulukutu Téa, je n'ai plus de problèmes de digestion. Un produit 100% naturel et efficace !
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center text-white font-black">MK</div>
              <div>
                <span className="font-black text-green-950 block">Marie K.</span>
                <span className="text-sm text-gray-500">Cliente fidèle</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-[2rem] p-10 relative">
            <div className="absolute -top-4 left-10 text-6xl text-yellow-200 font-serif">"</div>
            <p className="text-gray-700 leading-relaxed font-medium mb-6 relative z-10">
              Le Gingembre Téa m'aide énormément contre la fatigue. Je le recommande à toute ma famille. Merci Bio Galaxy !
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-black">JB</div>
              <div>
                <span className="font-black text-green-950 block">Jean-Baptiste M.</span>
                <span className="text-sm text-gray-500">Client régulier</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-[2rem] p-10 relative">
            <div className="absolute -top-4 left-10 text-6xl text-green-200 font-serif">"</div>
            <p className="text-gray-700 leading-relaxed font-medium mb-6 relative z-10">
              Sinda Infusion est devenu mon allié détox quotidien. Un goût authentique et des bienfaits visibles. J'adore !
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center text-white font-black">GN</div>
              <div>
                <span className="font-black text-green-950 block">Grace N.</span>
                <span className="text-sm text-gray-500">Cliente satisfaite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Leaf className="text-yellow-500 w-16 h-16 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
          Prêt à Découvrir<br />
          <span className="text-yellow-500">La Vitalité Naturelle ?</span>
        </h2>
        <p className="text-green-200 text-xl mb-10 font-medium max-w-2xl mx-auto">
          Rejoignez des milliers de Congolais qui ont choisi Bio Galaxy pour leur bien-être quotidien.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActivePage('contact')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-2xl inline-flex items-center justify-center gap-3"
          >
            Commander Maintenant <ArrowRight size={20} />
          </button>
          <button
            onClick={() => setActivePage('products')}
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all"
          >
            Explorer la Gamme
          </button>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = ({ setActivePage }) => (
  <div className="animate-fadeIn">
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black text-green-950 mb-6">NOTRE ADN</h1>
        <p className="text-xl text-green-800 font-medium">
          Première jeune Entreprise Congolaise à proposer des tisanes antioxydantes innovantes depuis 2021.
        </p>
      </div>
    </section>

    {/* Qui Sommes Nous Section */}
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-green-100 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full blur-[100px] opacity-20 -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-8 uppercase tracking-tighter">QUI SOMMES-NOUS ?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
              <span className="font-bold text-green-800">TMK Congo Bio Entreprenariat</span> est bien plus qu'une simple entreprise. Nous sommes une initiative <span className="text-yellow-600 font-bold">100% Congolaise</span>, née de la volonté de valoriser notre patrimoine naturel exceptionnel.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Spécialisés dans la production et la transformation de produits agricoles biologiques, nous nous engageons à offrir à nos consommateurs des produits sains, naturels et thérapeutiques. De nos thés antioxydants à nos jus naturels, chaque produit raconte l'histoire de notre terre et de notre engagement pour la santé publique et le développement durable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full z-0 opacity-20 animate-pulse"></div>
          <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80" alt="Production" className="relative z-10 rounded-3xl shadow-2xl" />
        </div>
        <div>
          <div className="flex items-center gap-3 text-yellow-600 mb-4 font-black uppercase tracking-[0.3em] text-sm">
            <Target size={20} /> Mission
          </div>
          <h2 className="text-4xl font-black text-green-950 mb-8 uppercase leading-tight">Ressusciter la vitalité du corps</h2>
          <div className="space-y-6 text-gray-700 text-lg">

            <p>
              Nous luttons contre le gaspillage post-récolte en assurant la disponibilité de nos tisanes même pendant les saisons de rareté, tout en promouvant un mode de vie écologique.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            <div className="text-center">
              <span className="block text-3xl font-black text-green-800">100%</span>
              <span className="text-xs uppercase font-bold text-gray-400">Naturel</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-black text-green-800">2021</span>
              <span className="text-xs uppercase font-bold text-gray-400">Fondé en</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-black text-green-800">0%</span>
              <span className="text-xs uppercase font-bold text-gray-400">Chimique</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Nos Valeurs Section */}
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">NOS VALEURS</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Ce qui nous définit</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* L'authenticité */}
          <div className="bg-green-50 rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">L'Authenticité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nos combinaisons de valeurs et de goûts uniques. Chaque produit Bio Galaxy est le fruit d'un savoir-faire artisanal congolais authentique.
            </p>
          </div>

          {/* La durabilité */}
          <div className="bg-green-50 rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">La Durabilité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nous sommes issus de l'agriculture biologique, normées et approuvées par le laboratoire de microbiologie appliquée et nutrition (LAMAN) Faculté de sciences de l'Université de Kinshasa/RDC.
            </p>
          </div>

          {/* L'accessibilité */}
          <div className="bg-green-50 rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Wallet className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-green-950 mb-4 uppercase">L'Accessibilité</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Nos paquets de thé sont très économiques et accessibles à toutes les bourses. La santé naturelle ne devrait pas être un luxe.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Le Fondateur Section */}
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">LE FONDATEUR</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Visionnaire Congolais</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-900 rounded-3xl z-0"></div>
            <div className="relative z-10 bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-12 text-center">
              <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black text-green-950">
                SK
              </div>
              <h3 className="text-3xl font-black text-white uppercase mb-2">Silas KABAMBA</h3>
              <p className="text-green-300 font-bold uppercase tracking-widest text-sm">Fondateur & CEO</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-green-950 mb-6 uppercase">Une Vision, Une Passion</h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-green-800">Licencié en Économie industrielle</span>, Silas KABAMBA a fondé Bio Galaxy en 2021 avec une mission claire : transformer les richesses agricoles de la RDC en solutions de santé accessibles à tous.
              </p>
              <p>
                Sa vision ? Créer une entreprise congolaise de référence dans le domaine des tisanes biologiques, tout en luttant contre le gaspillage post-récolte et en promouvant l'agriculture durable.
              </p>
              <p>
                Aujourd'hui, Bio Galaxy est la première jeune entreprise congolaise à proposer des tisanes antioxydantes innovantes, certifiées par le laboratoire LAMAN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Notre Histoire Timeline */}
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">NOTRE HISTOIRE</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Le Parcours Galaxy</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-100"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <span className="text-4xl font-black text-yellow-600">2021</span>
                <h4 className="text-xl font-black text-green-950 mt-2">Naissance de Bio Galaxy</h4>
                <p className="text-gray-600 mt-2">Création de l'entreprise à Kinshasa par Silas KABAMBA avec la vision de proposer des tisanes 100% biologiques.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-900 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-1/2 pl-8">
                <span className="text-4xl font-black text-yellow-600">2022</span>
                <h4 className="text-xl font-black text-green-950 mt-2">Certification LAMAN</h4>
                <p className="text-gray-600 mt-2">Obtention de la certification du laboratoire de microbiologie appliquée et nutrition de l'UNIKIN.</p>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <span className="text-4xl font-black text-yellow-600">2023</span>
                <h4 className="text-xl font-black text-green-950 mt-2">Expansion Commerciale</h4>
                <p className="text-gray-600 mt-2">Présence dans les grands supermarchés de Kinshasa : Kin-Marché, Food-Market, GG-Market, Swiss-Market...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-900 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-1/2 pl-8">
                <span className="text-4xl font-black text-yellow-600">2024+</span>
                <h4 className="text-xl font-black text-green-950 mt-2">L'Avenir</h4>
                <p className="text-gray-600 mt-2">Développement de nouvelles gammes et expansion vers d'autres provinces de la RDC.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Certification LAMAN Section */}
    <section className="py-20 bg-green-950 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900 rounded-full blur-[150px] opacity-30 -mr-48 -mt-48"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 text-yellow-500 mb-4 font-black uppercase tracking-[0.3em] text-sm">
              <Award size={20} /> Certification
            </div>
            <h2 className="text-4xl font-black text-white mb-8 uppercase leading-tight">Approuvé par le LAMAN</h2>
            <div className="space-y-6 text-green-200 text-lg">
              <p>
                Nos produits sont analysés et certifiés par le <span className="font-bold text-yellow-500">Laboratoire de Microbiologie Appliquée et Nutrition (LAMAN)</span> de la Faculté des Sciences de l'Université de Kinshasa.
              </p>
              <p>
                Cette certification garantit que nos tisanes respectent les normes de qualité les plus strictes et sont totalement sûres pour la consommation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm uppercase tracking-widest">100% Naturel</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm uppercase tracking-widest">Sans Chimique</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm uppercase tracking-widest">Bio-Certifié</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-12 text-center">
              <ShieldCheck className="w-24 h-24 text-green-950 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-green-950 uppercase mb-2">LAMAN</h3>
              <p className="text-green-900 font-bold text-sm">Laboratoire de Microbiologie</p>
              <p className="text-green-900 font-bold text-sm">Appliquée et Nutrition</p>
              <div className="mt-6 pt-6 border-t border-green-900/20">
                <p className="text-green-950 font-black uppercase text-xs tracking-widest">Université de Kinshasa</p>
                <p className="text-green-900 text-sm mt-1">République Démocratique du Congo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Notre Engagement Section */}
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">NOTRE ENGAGEMENT</h2>
        <div className="mt-4 flex items-center justify-center gap-2 mb-16">
          <div className="h-[2px] w-12 bg-yellow-600"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Pour la RDC et l'Environnement</p>
          <div className="h-[2px] w-12 bg-yellow-600"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 text-center group hover:-translate-y-2">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-900 transition-colors">
              <Leaf className="text-green-900 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-green-950 uppercase">Agriculture Bio</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Promotion de l'agriculture biologique locale</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 text-center group hover:-translate-y-2">
            <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-500 transition-colors">
              <Target className="text-yellow-600 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-green-950 uppercase">Zéro Gaspillage</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Lutte contre le gaspillage post-récolte</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 text-center group hover:-translate-y-2">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-600 transition-colors">
              <Heart className="text-blue-600 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-green-950 uppercase">Santé Pour Tous</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Des produits naturels accessibles</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 text-center group hover:-translate-y-2">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-900 transition-colors">
              <Award className="text-green-900 w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-black text-green-950 uppercase">Made in RDC</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">Fierté de l'entrepreneuriat congolais</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-900 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
          Envie d'en Savoir Plus ?
        </h2>
        <p className="text-green-200 text-xl mb-10 font-medium max-w-2xl mx-auto">
          Découvrez notre gamme de tisanes biologiques et rejoignez la communauté Bio Galaxy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActivePage('products')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-2xl inline-flex items-center justify-center gap-3"
          >
            Découvrir Nos Produits <ArrowRight size={20} />
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all"
          >
            Nous Contacter
          </button>
        </div>
      </div>
    </section>
  </div>
);

const ProductsPage = () => {
  const [filter, setFilter] = useState('tous');

  const filteredProducts = products.filter(product =>
    filter === 'tous' ? true : product.category === filter
  );

  const categories = [
    { id: 'tous', label: 'Tous' },
    { id: 'the', label: 'Thés & Infusions' },
    { id: 'jus', label: 'Jus Naturels' },
    { id: 'patisserie', label: 'Pâtisseries' }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-green-950 uppercase tracking-tighter">LA GAMME GALAXY</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-md ${filter === cat.id
                    ? 'bg-green-950 text-white scale-105 ring-2 ring-yellow-500 ring-offset-2'
                    : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-green-900'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-[2px] w-12 bg-yellow-600"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              {filteredProducts.length} {filteredProducts.length > 1 ? 'Produits' : 'Produit'}
            </p>
            <div className="h-[2px] w-12 bg-yellow-600"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-50 flex flex-col h-full animate-fadeIn">
              <div className="h-56 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-black text-white uppercase leading-tight z-10">{product.name}</h3>
                <div className="absolute top-4 right-4 bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-green-950">
                  <Coffee size={20} />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-green-800 font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                  Bienfaits Santé
                </h4>
                <ul className="text-sm text-gray-600 space-y-4 flex-grow">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0"></div>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full border-2 border-green-900 text-green-900 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-green-900 hover:text-white transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrepPage = () => (
  <section className="py-20 bg-white px-4 animate-fadeIn">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-black text-green-950 text-center mb-4 uppercase tracking-tighter">L'Art de l'Infusion</h2>
      <p className="text-center text-gray-500 mb-16 font-bold uppercase tracking-[0.2em] text-sm">Comment savourer Bio Galaxy</p>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="relative p-10 bg-green-50 rounded-[3rem] overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-30"></div>
          <h3 className="text-3xl font-black text-green-950 mb-8 uppercase flex items-center gap-4">
            <span className="bg-green-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">01</span>
            Thé Chaud
          </h3>
          <ul className="space-y-6">
            {[
              "Mettre une infusette par personne dans la théière",
              "Verser de l'eau bouillante (95°C)",
              "Laisser infuser au moins 3 minutes",
              "Servir avec citron ou sucre selon goût"
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-center">
                <CheckCircle size={20} className="text-green-700 shrink-0" />
                <span className="font-bold text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative p-10 bg-blue-50 rounded-[3rem] overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30"></div>
          <h3 className="text-3xl font-black text-blue-950 mb-8 uppercase flex items-center gap-4">
            <span className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">02</span>
            Ice-Téa
          </h3>
          <ul className="space-y-6">
            {[
              "Une infusette par tasse à mi-hauteur d'eau",
              "Infuser 5 minutes ou plus pour plus de force",
              "Ajouter de l'eau très froide après retrait",
              "Servir avec glaçons et tranche de citron"
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-center">
                <CheckCircle size={20} className="text-blue-700 shrink-0" />
                <span className="font-bold text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="py-20 bg-gray-50 px-4 animate-fadeIn">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black text-green-950 mb-8 uppercase tracking-tighter">REJOIGNEZ LA GALAXIE</h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Nos produits sont disponibles dans tous les grands supermarchés de Kinshasa : <span className="font-bold text-green-900">Kin-Marché, Food-market, GG-market, Swiss-market...</span>
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-green-900 p-4 rounded-2xl text-white shadow-lg"><MapPin size={24} /></div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-1">Siège Social</h4>
                <p className="font-bold text-green-950">70, 13ème rue Limite industriel, Kinshasa, RDC</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-green-900 p-4 rounded-2xl text-white shadow-lg"><Phone size={24} /></div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-1">Contact Direct</h4>
                <p className="font-bold text-green-950">+243 991 999 125 / +243 852 133 128</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-green-900 p-4 rounded-2xl text-white shadow-lg"><Mail size={24} /></div>
              <div>
                <h4 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-1">Email</h4>
                <p className="font-bold text-green-950">infosilas5@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
          <h3 className="text-3xl font-black mb-8 text-green-950 uppercase tracking-tight">Nous Écrire</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" className="w-full border-b-2 border-gray-100 py-4 focus:border-green-600 outline-none transition-colors font-bold text-sm" placeholder="NOM COMPLET" />
              <input type="email" className="w-full border-b-2 border-gray-100 py-4 focus:border-green-600 outline-none transition-colors font-bold text-sm" placeholder="EMAIL" />
            </div>
            <textarea rows="4" className="w-full border-b-2 border-gray-100 py-4 focus:border-green-600 outline-none transition-colors font-bold text-sm resize-none" placeholder="VOTRE MESSAGE"></textarea>
            <button type="button" className="w-full bg-green-950 text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-800 transition-all shadow-xl">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // ChatBot State & Logic
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: "Bonjour ! Je suis l'assistant virtuel de Bio Galaxy. Comment puis-je vous aider aujourd'hui ? 🌿", isBot: true }
  ]);
  const chatEndRef = React.useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isChatOpen]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setChatInput('');

    // Bot Response Logic
    setTimeout(() => {
      let botResponse = "Je n'ai pas bien compris. Pouvez-vous reformuler ? (Essayez 'commander', 'produits', 'contact')";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.match(/bonjour|salut|hello|coucou|hi/)) {
        botResponse = "Bonjour ! 👋 Prêt à découvrir nos thés bios ?";
      } else if (lowerInput.match(/commander|achat|acheter|prix|tarif|coût/)) {
        botResponse = "Vous pouvez commander directement en cliquant sur le bouton 'COMMANDER' dans le menu. Nous livrons partout à Kinshasa ! 🚚";
      } else if (lowerInput.match(/produit|thé|gamme|liste/)) {
        botResponse = "Nous avons une gamme variée : Bulukutu Téa, Gingembre Téa, Sinda Infusion... Tous 100% naturels ! 🌱";
      } else if (lowerInput.match(/bulukutu/)) {
        botResponse = "Le Bulukutu Téa est excellent pour la digestion et la relaxation. Un vrai trésor congolais ! 🇨🇩";
      } else if (lowerInput.match(/gingembre/)) {
        botResponse = "Le Gingembre Téa est un puissant énergisant naturel. Idéal pour lutter contre la fatigue ! ⚡";
      } else if (lowerInput.match(/sinda/)) {
        botResponse = "Le Sinda Infusion est parfait pour détoxifier l'organisme. Une pureté absolue ! ✨";
      } else if (lowerInput.match(/contact|téléphone|numéro|appeler/)) {
        botResponse = "Vous pouvez nous joindre au +243 991 999 125. Notre équipe est à votre écoute ! 📞";
      } else if (lowerInput.match(/adresse|où|localisation|siège/)) {
        botResponse = "Nous sommes situés au 70, 13ème rue Limite industriel, Kinshasa, RDC. Venez nous voir ! 📍";
      }

      setChatMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  // Logo Placeholder URL based on the uploaded company assets
  const companyLogo = "https://images.unsplash.com/photo-1544787210-2211d74fc282?auto=format&fit=crop&q=80"; // Note: En production, utilisez le chemin de votre image IMG-20260106-WA0045.jpg









  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-green-100 selection:text-green-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActivePage('home')}>
            <img src="/logo.jpg" alt="Bio Galaxy Logo" className="w-16 h-auto transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter text-green-950 leading-none uppercase">TMK Congo Bio</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-yellow-600 leading-none mt-1">Entreprenariat</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 items-center">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-green-600 transition-all relative group ${activePage === item.id ? 'text-green-700' : 'text-gray-400'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full ${activePage === item.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-green-950 text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-yellow-600 transition-colors"
            >
              Commander
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-green-950" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-8 space-y-6 shadow-2xl animate-slideDown">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-4 px-6 rounded-2xl font-black uppercase text-sm tracking-widest ${activePage === item.id ? 'bg-green-900 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOrderModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-center py-4 px-6 rounded-2xl font-black uppercase text-sm tracking-widest bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
            >
              Commander
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'prep' && <PrepPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-green-950 text-green-100 py-12 px-6 mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-[10px] text-green-700 font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} TMK CONGO BIO ENTREPRENARIAT
          </p>
          <p className="text-[10px] text-green-700 font-black uppercase tracking-[0.3em] flex items-center gap-2">
            Design by <span className="text-yellow-600">Jeancy Mifundu</span>
          </p>
        </div>
      </footer>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOrderModalOpen(false)}></div>
          <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>

            <div className="p-10">
              <div className="text-center mb-8">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-green-900 w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-green-950 uppercase">Passer Commande</h2>
                <p className="text-gray-500 mt-2 font-medium">Remplissez le formulaire ci-dessous</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Nom Complet *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm"
                    placeholder="+243 XXX XXX XXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Adresse de Livraison *</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm"
                    placeholder="Votre adresse à Kinshasa"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Produit *</label>
                  <select
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm bg-white"
                    required
                  >
                    <option value="">Sélectionnez un produit</option>
                    <optgroup label="Thés & Infusions">
                      <option value="bulukutu-tea">Bulukutu Téa</option>
                      <option value="bulukutu-gingembre">Bulukutu Gingembre</option>
                      <option value="sinda-infusion">Sinda Infusion</option>
                      <option value="mbonze-bio">Mbonze Bio</option>
                      <option value="gingembre-tea">Gingembre Téa</option>
                    </optgroup>
                    <optgroup label="Jus Naturels">
                      <option value="jus-gingembre">Jus Galaxy Gingembre</option>
                      <option value="jus-ananas">Jus Galaxy Ananas</option>
                      <option value="jus-bisap">Jus Galaxy Bisap</option>
                      <option value="jus-baobab">Jus Galaxy Baobab</option>
                    </optgroup>
                    <optgroup label="Nutrition & Gourmandises">
                      <option value="mayogalaxy">MayoGalaxy</option>
                      <option value="beurre-cacahuete">Beurre de Cacahuète (Mwamba)</option>
                      <option value="gateau-cake">Gâteau Cake Sucré</option>
                      <option value="croissant">Croissant</option>
                      <option value="crepes">Crêpes</option>
                    </optgroup>
                    <optgroup label="Packs">
                      <option value="pack-decouverte">Pack Découverte (Mixte)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Quantité *</label>
                  <select
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm bg-white"
                    required
                  >
                    <option value="1">1 paquet</option>
                    <option value="2">2 paquets</option>
                    <option value="3">3 paquets</option>
                    <option value="5">5 paquets</option>
                    <option value="10">10 paquets</option>
                    <option value="20">20 paquets (Grossiste)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Message (Optionnel)</label>
                  <textarea
                    rows="3"
                    className="w-full border-2 border-gray-100 rounded-xl py-4 px-5 focus:border-green-600 outline-none transition-colors font-bold text-sm resize-none"
                    placeholder="Instructions spéciales..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-950 text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-green-800 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Confirmer la Commande <ArrowRight size={18} />
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Vous serez contacté par téléphone pour confirmer votre commande.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ChatBot Component */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center animate-bounce"
          >
            <span className="sr-only">Ouvrir le chat</span>
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
          </button>
        )}

        {isChatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-green-100 animate-fadeIn" style={{ height: '500px', maxHeight: '80vh' }}>
            {/* Chat Header */}
            <div className="bg-green-950 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <Sparkles size={16} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Assistant Bio Galaxy</h3>
                  <p className="text-[10px] text-green-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> En ligne
                  </p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  {msg.isBot && (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Leaf size={14} className="text-green-800" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot ? 'bg-white text-gray-700 shadow-sm rounded-tl-none' : 'bg-green-600 text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
              <button type="submit" className="bg-green-950 hover:bg-green-800 text-white p-2 rounded-xl transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideDown { animation: slideDown 0.4s ease-out forwards; }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default App;
