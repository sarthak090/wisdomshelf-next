"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  const t = [
    {
      name: "Amanda L",
      review: `The personalized recommendations I received from this site were spot on! It's like having a bookish friend who understands my taste. Highly recommended for fellow book lovers!`,
      role: "Filmmaker",
    },
    {
      name: "Michael B",
      review: `I love how easy it is to discover books that match my reading preferences. This site is a game-changer for avid readers like me.`,
      role: "Software Engineer",
    },
    {
      name: "Jessica M",
      review: `I was skeptical at first, but the recommendations have been surprisingly accurate! It’s like the site just gets me. Highly recommended!`,
      role: "Teacher",
    },
    {
      name: "David R",
      review: `Thanks to this platform, I’ve found books that I probably wouldn’t have picked up otherwise. It’s broadened my reading list!`,
      role: "Architect",
    },
    {
      name: "Sophia K",
      review: `The book suggestions are always spot on! It’s like having a personal librarian who knows exactly what I need to read next.`,
      role: "Graphic Designer",
    },
    {
      name: "Liam C",
      review: `This site has introduced me to new genres I wouldn’t have explored on my own. The recommendations are always a perfect fit!`,
      role: "Entrepreneur",
    },
    {
      name: "Emily S",
      review: `I appreciate how this site recommends books based on my interests. It feels personalized, and I’ve loved every recommendation so far!`,
      role: "Photographer",
    },
  ];

  return (
    <div className="bg-gray-200 py-16 my-8 px-12">
      <section>
        <div className="text-center text-3xl lg:text-5xl font-bold text-primary">
          What Our Readers Say
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3} // Default number of slides
          className="my-9"
          breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 1, // 1 slide on mobile
              spaceBetween: 20,
            },
            // When window width is >= 640px
            640: {
              slidesPerView: 2, // 2 slides on tablets
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
              spaceBetween: 40,
            },
          }}
        >
          {" "}
          {t.map((testimonial,i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center mb-4 italic">{testimonial.review}</p>
                <div className="flex gap-4 items-center ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-primary font-semibold">
                      {testimonial.name}
                    </div>
                    <div>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
