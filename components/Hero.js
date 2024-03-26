"use client";
import CustomSlider from "@/components/Slider";
import ButtonSignin from "@/components/ButtonSignin";

const images = [
    '/assets/hero_thumbnail1.png',
    '/assets/hero_thumbnail2.png',
    '/assets/hero_thumbnail3.png',
    '/assets/hero_thumbnail4.png',
    '/assets/hero_thumbnail5.png',
];

const Hero = () => {
  return (
      <section
          className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
          <div
              className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
              <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
                Get DND character Art,
                <span>
                {" "}no commission required
                </span>
              </h1>
              <p className="text-lg opacity-80 leading-relaxed">
                Select your character&apos;s features from our 1000+ different combinations. Download your character&apos;s portrait for <span class="badge badge-lg badge-primary badge-outline">free</span> OR pick your location & get 40+ epic shots of your character.
              </p>
              <ButtonSignin extraStyle="btn-primary" text={"Enter character art creator"}/>
              {/* <TestimonialsAvatars priority={true}/> */}
          </div>

          <div className="lg:w-full max-h-[500px] overflow-hidden">
              <CustomSlider images={images}/>
          </div>
      </section>
  );
};

export default Hero;
