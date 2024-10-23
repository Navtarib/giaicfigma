import Image from "next/image";
export default function HeroSection () {
  return (
  
<section className="text-gray-600  body-font">
  <div className="container px-5 py-24 h-full  mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-black text-gray-900">Environmental Pollution</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Pollution happens when harmful stuff gets into nature and makes things bad. There are different kinds of pollution like dirty air, dirty water, dirty soil, too much noise, and too much light. The sources of pollution are diverse, ranging from industrial activities to household waste. Pollution has severe consequences on ecosystems, human health, and the overall well-being of our planet. Addressing pollution is a collective responsibility that requires global awareness and sustainable practices. Governments play a crucial role in enforcing regulations, promoting renewable energy sources, and raising awareness about the importance of environmental conservation.

</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/a.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/d.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/f.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/b.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/c.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image width={500} height={500} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/g.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}
