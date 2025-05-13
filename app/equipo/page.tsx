import Image from "next/image"

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Nuestro Equipo</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Conoce a las personas detrás de nuestro éxito.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Dirección
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Equipo Directivo
            </h2>
            <p className="mt-4 text-gray-600">
              Nuestro equipo directivo está conformado por investigadores con amplia experiencia en el campo de la medicina regenerativa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Director */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Alejandro Ramírez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dr. Alejandro Ramírez</h3>
                <p className="mb-4 text-primary">Director de Investigación</p>
                <p className="mb-4 text-gray-600">
                  Doctor en Ciencias Biomédicas con especialización en medicina regenerativa. Cuenta con más de 15 años de experiencia en investigación sobre terapias celulares para enfermedades cardíacas.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Co-Director */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dra. Carolina Mendoza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dra. Carolina Mendoza</h3>
                <p className="mb-4 text-primary">Subdirectora de Investigación</p>
                <p className="mb-4 text-gray-600">
                  Doctora en Ingeniería Biomédica con especialización en biomateriales. Experta en el desarrollo de scaffolds para ingeniería de tejidos y regeneración ósea.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Research Coordinator */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Martín Herrera"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dr. Martín Herrera</h3>
                <p className="mb-4 text-primary">Coordinador de Investigación</p>
                <p className="mb-4 text-gray-600">
                  Doctor en Biotecnología con especialización en bioimpresión 3D. Lidera proyectos de investigación en bioimpresión de tejidos y órganos.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
