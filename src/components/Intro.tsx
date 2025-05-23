export default function Intro() {
    return (
    <section id="intro" className="hero-banner bg-[url(/hero-image.png)] brightness-80 bg-no-repeat bg-cover bg-center mask-auto text-white text-center w-screen h-screen flex flex-col items-center justify-center p-10">
        <div className="hero-banner__content px-5 md:px-10 py-15 md:py-20 max-w-[500px] rounded-lg bg-[rgba(244,238,226,0.85)]">
            <h1 className="hero-banner__title">Leslie Mares</h1>
            <p className="hero-banner__subtitle mb-4 text-2xl font-medium md:text-3xl">Software Developer</p>
            <p className="hero-banner__motto text-md font-medium md:text-lg">Crafting delightful interfaces and occasionally talking to my plants about them.</p>
        </div>
    </section>
    );
}