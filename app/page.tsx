import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FlaskRoundIcon as Flask, Dna, Brain, Microscope, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden py-20 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h5 className="inline-block border-b-2 border-white/30 pb-1 text-lg font-medium uppercase tracking-wider text-white">
                Bienvenidos a Salamandra
              </h5>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Investigación en Medicina Regenerativa
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Grupo de investigación dedicado al desarrollo de terapias innovadoras para la regeneración de tejidos y
                órganos.
              </p>
              <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
                <Link
                  href="/contacto"
                  className="rounded-full bg-white px-6 py-3 font-medium text-primary shadow-lg transition-colors hover:bg-gray-100"
                >
                  Contáctanos
                </Link>
                <Link
                  href="/investigacion"
                  className="rounded-full border border-white/50 bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                >
                  Conoce nuestros proyectos
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Medicina regenerativa"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Sobre Salamandra"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
                Semillero Salamandra
              </h5>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Investigación en Medicina Regenerativa y Terapia Celular
              </h2>
              <p className="mt-6 text-gray-600">
                El Semillero Salamandra se dedica a la investigación en medicina regenerativa, enfocándose en la
                reparación y regeneración de tejidos y órganos dañados. Utilizamos las capacidades del cuerpo humano
                para regenerarse y reparar tejidos mediante el uso de células madre, biomateriales y factores de
                crecimiento.
              </p>
              <p className="mt-4 text-gray-600">
                Nuestra misión es explorar soluciones innovadoras para enfermedades degenerativas y mejorar la calidad
                de vida mediante el desarrollo de nuevas terapias.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Dna size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">Medicina Regenerativa</h3>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Flask size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">Ingeniería de Tejidos</h3>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Microscope size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">Terapia Celular</h3>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Brain size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">Bioimpresión 3D</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Áreas de Investigación
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestras Líneas de Investigación</h2>
            <p className="mt-4 text-gray-600">
              Exploramos diversas áreas de la medicina regenerativa para desarrollar terapias innovadoras que mejoren la
              calidad de vida de los pacientes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Research Area 1 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dna size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Medicina Regenerativa</h3>
              <p className="mb-4 text-gray-600">
                Investigamos cómo estimular los mecanismos naturales de regeneración del cuerpo para reparar tejidos y
                órganos dañados.
              </p>
              <Link
                href="/investigacion/medicina-regenerativa"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Research Area 2 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Flask size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Ingeniería de Tejidos</h3>
              <p className="mb-4 text-gray-600">
                Desarrollamos estructuras tridimensionales (scaffolds) que sirven como soporte para el crecimiento
                celular y la formación de tejidos.
              </p>
              <Link
                href="/investigacion/ingenieria-tejidos"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Research Area 3 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Microscope size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Terapia Celular</h3>
              <p className="mb-4 text-gray-600">
                Estudiamos el uso de células madre y progenitoras para reparar o reemplazar tejidos dañados por
                enfermedades o lesiones.
              </p>
              <Link
                href="/investigacion/terapia-celular"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Research Area 4 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Brain size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Bioimpresión 3D</h3>
              <p className="mb-4 text-gray-600">
                Utilizamos tecnologías de impresión 3D para crear estructuras biológicas complejas con aplicaciones en
                la regeneración de tejidos.
              </p>
              <Link
                href="/investigacion/bioimpresion-3d"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Research Area 5 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">Biomateriales</h3>
              <p className="mb-4 text-gray-600">
                Investigamos materiales biocompatibles que pueden interactuar con sistemas biológicos para aplicaciones
                terapéuticas.
              </p>
              <Link
                href="/investigacion/biomateriales"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Research Area 6 */}
            <div className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Medicina Traslacional</h3>
              <p className="mb-4 text-gray-600">
                Trabajamos para llevar los descubrimientos del laboratorio a aplicaciones clínicas que beneficien
                directamente a los pacientes.
              </p>
              <Link
                href="/investigacion/medicina-traslacional"
                className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
              >
                Saber más
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlight */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Proyectos Destacados
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestras Investigaciones Actuales</h2>
            <p className="mt-4 text-gray-600">
              Conoce algunos de nuestros proyectos más relevantes en el campo de la medicina regenerativa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Regeneración de tejido cardíaco"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Regeneración de Tejido Cardíaco</h3>
                <p className="mb-4 text-gray-600">
                  Investigación sobre el uso de células madre para regenerar tejido cardíaco dañado tras un infarto.
                </p>
                <Link
                  href="/proyectos/regeneracion-cardiaca"
                  className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                >
                  Ver proyecto
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Bioimpresión de piel"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Bioimpresión de Piel</h3>
                <p className="mb-4 text-gray-600">
                  Desarrollo de técnicas de bioimpresión 3D para crear sustitutos de piel para el tratamiento de
                  quemaduras y heridas crónicas.
                </p>
                <Link
                  href="/proyectos/bioimpresion-piel"
                  className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                >
                  Ver proyecto
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Regeneración neural"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Regeneración Neural</h3>
                <p className="mb-4 text-gray-600">
                  Estudio de terapias basadas en células madre para la regeneración de tejido nervioso en lesiones de
                  médula espinal.
                </p>
                <Link
                  href="/proyectos/regeneracion-neural"
                  className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                >
                  Ver proyecto
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center rounded-full border border-primary bg-white px-6 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
            >
              Ver todos los proyectos
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Nuestro Equipo
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Investigadores Principales</h2>
            <p className="mt-4 text-gray-600">
              Conoce a los científicos que lideran nuestras investigaciones en medicina regenerativa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
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
                  Especialista en medicina regenerativa con enfoque en terapias celulares para enfermedades cardíacas.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dra. Carolina Mendoza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dra. Carolina Mendoza</h3>
                <p className="mb-4 text-primary">Investigadora Principal</p>
                <p className="mb-4 text-gray-600">
                  Experta en ingeniería de tejidos y desarrollo de biomateriales para aplicaciones médicas.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Martín Herrera"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Dr. Martín Herrera</h3>
                <p className="mb-4 text-primary">Investigador Senior</p>
                <p className="mb-4 text-gray-600">
                  Especializado en bioimpresión 3D y desarrollo de modelos de tejidos para investigación farmacéutica.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/equipo"
              className="inline-flex items-center rounded-full border border-primary bg-white px-6 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
            >
              Conoce a todo el equipo
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">¿Interesado en colaborar con nosotros?</h2>
              <p className="mt-4 text-white/80">
                Estamos abiertos a colaboraciones con otros grupos de investigación, instituciones académicas y empresas
                del sector biotecnológico.
              </p>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="rounded-full bg-white px-6 py-3 font-medium text-primary shadow-lg transition-colors hover:bg-gray-100"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">Estudiantes</h3>
                <p className="text-white/80">
                  Si eres estudiante y te interesa la medicina regenerativa, únete a nuestro semillero de investigación.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">Investigadores</h3>
                <p className="text-white/80">
                  Buscamos investigadores apasionados por la medicina regenerativa para colaborar en proyectos
                  innovadores.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">Instituciones</h3>
                <p className="text-white/80">
                  Establecemos alianzas con instituciones académicas y de salud para proyectos de investigación
                  conjuntos.
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold">Empresas</h3>
                <p className="text-white/80">
                  Colaboramos con empresas del sector biotecnológico para el desarrollo de nuevas terapias y productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Publicaciones Recientes
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestras Contribuciones Científicas</h2>
            <p className="mt-4 text-gray-600">
              Descubre nuestras últimas publicaciones en revistas científicas de alto impacto.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Publication 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                Medicina Regenerativa
              </span>
              <h3 className="mt-3 text-xl font-bold">
                Avances en la regeneración de tejido cardíaco mediante el uso de células madre mesenquimales
              </h3>
              <p className="mt-2 text-sm text-gray-500">Ramírez A, Mendoza C, Herrera M, et al.</p>
              <p className="mt-1 text-sm text-gray-500">Journal of Regenerative Medicine, 2023</p>
              <Link
                href="/publicaciones/regeneracion-cardiaca-celulas-madre"
                className="group mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-600"
              >
                Leer más
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Publication 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                Ingeniería de Tejidos
              </span>
              <h3 className="mt-3 text-xl font-bold">
                Desarrollo de scaffolds biocompatibles para la regeneración de tejido óseo
              </h3>
              <p className="mt-2 text-sm text-gray-500">Mendoza C, Herrera M, Ramírez A, et al.</p>
              <p className="mt-1 text-sm text-gray-500">Biomaterials, 2022</p>
              <Link
                href="/publicaciones/scaffolds-regeneracion-osea"
                className="group mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-600"
              >
                Leer más
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Publication 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                Bioimpresión 3D
              </span>
              <h3 className="mt-3 text-xl font-bold">
                Bioimpresión 3D de constructos vasculares para aplicaciones en medicina regenerativa
              </h3>
              <p className="mt-2 text-sm text-gray-500">Herrera M, Ramírez A, Mendoza C, et al.</p>
              <p className="mt-1 text-sm text-gray-500">Advanced Healthcare Materials, 2023</p>
              <Link
                href="/publicaciones/bioimpresion-constructos-vasculares"
                className="group mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-600"
              >
                Leer más
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/publicaciones"
              className="inline-flex items-center rounded-full border border-primary bg-white px-6 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
            >
              Ver todas las publicaciones
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
                Contacto
              </h5>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">¿Tienes alguna pregunta?</h2>
              <p className="mt-4 text-gray-600">
                Estamos aquí para responder tus dudas. Contáctanos y te responderemos a la brevedad.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Ubicación</h3>
                    <p className="text-gray-600">Universidad Cooperativa de Colombia, Medellín, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">salamandra@ucc.edu.co</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Teléfono</h3>
                    <p className="text-gray-600">+57 3126660158</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="Tu email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Tu mensaje"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white hover:bg-primary-600 focus:outline-none"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
