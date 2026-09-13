export default function TopBanner() {
  return (
    <section className="bg-base-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Craft the Ultimate <br/>
              <span className="text-brand-gradient">Tech Stack</span> Now
            </h1>
            <p className="text-lg mb-8 opacity-80 max-w-lg mx-auto lg:mx-0">
              Explore the best frameworks, languages, and tools. Curate your personal tech arsenal and start building amazing web applications today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="btn bg-brand-gradient text-white border-transparent rounded-md px-8 text-base">Explore Technologies</button>
              <button className="btn btn-outline border-base-content rounded-md px-8 text-base">Learn More</button>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <img 
              src="/banner-stack.png" 
              alt="Programming Workspace" 
              className="rounded-xl shadow-xl w-full max-w-lg object-cover aspect-video" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
