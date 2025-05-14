export default function Hero() {
  return (
    <section
      id='hero'
      className='flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40'
    >
      <article className='h-100 flex flex-col justify-center items-center gap-4 text-center'>
        <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
          Mitchell Saremba
        </h2>
        <span className='text-indigo-500 dark:text-indigo-300'>Full Stack Developer</span>
        <p className='text-w-md text-lg mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
          I build clean, modern, and responsive web applications with a focus on simplicity and
          performance.
        </p>
        <p className='text-w-md text-lg mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
          Whether it's frontend, backend, or full-stack development, I turn ideas into seamless
          digital experiences.
        </p>
      </article>
      <div className='flex flex-col gap-2 w-full'>
        <a href='#services' className='w-full'>
          <button
            id='findOutMoreBtn'
            className='w-full bg-slate-700 hover:bg-slate-500 hover:cursor-pointer rounded-md px-4 py-2 mx-auto my-0 text-white font-bold'
          >
            Find Out More
          </button>
        </a>
        <a href='#contact' className='w-full'>
          <button
            id='callToActionBtn'
            className='w-full bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer rounded-md px-4 py-2 mx-auto my-0 text-white font-bold'
          >
            Get in Touch
          </button>
        </a>
      </div>
    </section>
  );
}
