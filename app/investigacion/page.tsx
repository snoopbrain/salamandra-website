import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dna, FlaskRoundIcon as Flask, Microscope, Brain } from "lucide-react"

export default function ResearchPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Investigación</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Descubre nuestras líneas de investigación y proyectos en medicina regenerativa.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24">
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Research Area 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Medicina Regenerativa"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Dna size={24} />
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
            </div>

            {/* Research Area 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Ingeniería de Tejidos"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Flask size={24} />
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
            </div>

            {/* Research Area 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Terapia Celular"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Microscope size={24} />
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
            </div>

            {/* Research Area 4 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Bioimpresión 3D"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Brain size={24} />
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
            </div>

            {/* Research Area 5 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Biomateriales"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  Investigamos materiales biocompatibles que pueden interactuar con sistemas biológicos para
                  aplicaciones terapéuticas.
                </p>
                <Link
                  href="/investigacion/biomateriales"
                  className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                >
                  Saber más
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Research Area 6 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Medicina Traslacional"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
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
        </div>
      </section>

      {/* Current Projects */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Proyectos Actuales
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Investigaciones en Curso</h2>
            <p className="mt-4 text-gray-600">
              Conoce nuestros proyectos de investigación más relevantes en el campo de la medicina regenerativa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <div className="rounded-lg bg-white shadow-md">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Regeneración de tejido cardíaco"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Medicina Regenerativa
                  </span>
                  <h3 className="mt-3 text-xl font-bold">Regeneración de Tejido Cardíaco</h3>
                  <p className="mt-2 text-gray-600">
                    Investigación sobre el uso de células madre mesenquimales para regenerar tejido cardíaco dañado tras
                    un infarto de miocardio.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500">Investigador principal:</span>
                    <span className="ml-2 text-sm">Dr. Alejandro Ramírez</span>
                  </div>
                  <Link
                    href="/proyectos/regeneracion-cardiaca"
                    className="group mt-4 inline-flex items-center font-medium text-primary hover:text-primary-600"
                  >
                    Ver detalles
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-lg bg-white shadow-md">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Bioimpresión de piel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Bioimpresión 3D
                  </span>
                  <h3 className="mt-3 text-xl font-bold">Bioimpresión de Piel</h3>
                  <p className="mt-2 text-gray-600">
                    Desarrollo de técnicas de bioimpresión 3D para crear sustitutos de piel para el tratamiento de
                    quemaduras y heridas crónicas.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500">Investigador principal:</span>
                    <span className="ml-2 text-sm">Dr. Martín Herrera</span>
                  </div>
                  <Link
                    href="/proyectos/bioimpresion-piel"
                    className="group mt-4 inline-flex items-center font-medium text-primary hover:text-primary-600"
                  >
                    Ver detalles
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-lg bg-white shadow-md">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Scaffolds para regeneración ósea"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Ingeniería de Tejidos
                  </span>
                  <h3 className="mt-3 text-xl font-bold">Scaffolds para Regeneración Ósea</h3>
                  <p className="mt-2 text-gray-600">
                    Desarrollo de scaffolds biocompatibles con propiedades mecánicas y biológicas óptimas para la
                    regeneración de tejido óseo.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500">Investigador principal:</span>
                    <span className="ml-2 text-sm">Dra. Carolina Mendoza</span>
                  </div>
                  <Link
                    href="/proyectos/scaffolds-regeneracion-osea"
                    className="group mt-4 inline-flex items-center font-medium text-primary hover:text-primary-600"
                  >
                    Ver detalles
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="rounded-lg bg-white shadow-md">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Regeneración neural"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Terapia Celular
                  </span>
                  <h3 className="mt-3 text-xl font-bold">Regeneración Neural</h3>
                  <p className="mt-2 text-gray-600">
                    Estudio de terapias basadas en células madre para la regeneración de tejido nervioso en lesiones de
                    médula espinal.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500">Investigador principal:</span>
                    <span className="ml-2 text-sm">Dr. Alejandro Ramírez</span>
                  </div>
                  <Link
                    href="/proyectos/regeneracion-neural"
                    className="group mt-4 inline-flex items-center font-medium text-primary hover:text-primary-600"
                  >
                    Ver detalles
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
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

      {/* Research Infrastructure */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Infraestructura
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestros Laboratorios</h2>
            <p className="mt-4 text-gray-600">
              Contamos con laboratorios equipados con tecnología de punta para el desarrollo de nuestras
              investigaciones.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Laboratorio de Medicina Regenerativa"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold">Laboratorio de Medicina Regenerativa</h3>
              <p className="mt-4 text-gray-600">
                Nuestro laboratorio principal está equipado con tecnología de vanguardia para el cultivo celular,
                análisis de muestras biológicas y desarrollo de biomateriales.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cabinas de flujo laminar para cultivo celular</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Microscopios de fluorescencia y confocal</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Equipos de PCR en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Citómetro de flujo</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bioimpresora 3D</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <h3 className="text-2xl font-bold">Laboratorio de Biomateriales</h3>
              <p className="mt-4 text-gray-600">
                Espacio dedicado al desarrollo y caracterización de biomateriales para aplicaciones en medicina
                regenerativa.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Equipos para electrospinning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Microscopio electrónico de barrido (SEM)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Equipos para análisis mecánico de materiales</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-1 h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Espectroscopía infrarroja por transformada de Fourier (FTIR)</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Laboratorio de Biomateriales"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Colaboraciones
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestros Colaboradores</h2>
            <p className="mt-4 text-gray-600">
              Trabajamos en estrecha colaboración con instituciones académicas, centros de investigación y empresas del
              sector biotecnológico.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Collaborator 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Universidad de Barcelona"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">Universidad de Barcelona</h3>
              <p className="text-center text-gray-600">
                Colaboración en proyectos de investigación sobre bioimpresión 3D de tejidos.
              </p>
            </div>

            {/* Collaborator 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Instituto Nacional de Salud"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">Instituto Nacional de Salud</h3>
              <p className="text-center text-gray-600">
                Colaboración en estudios clínicos para evaluar la eficacia de terapias celulares.
              </p>
            </div>

            {/* Collaborator 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="BioTech Solutions"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">BioTech Solutions</h3>
              <p className="text-center text-gray-600">
                Colaboración para el desarrollo de biomateriales para aplicaciones médicas.
              </p>
            </div>

            {/* Collaborator 4 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Universidad de California"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">Universidad de California</h3>
              <p className="text-center text-gray-600">
                Intercambio de investigadores y colaboración en proyectos de medicina regenerativa.
              </p>
            </div>

            {/* Collaborator 5 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Hospital Universitario"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">Hospital Universitario</h3>
              <p className="text-center text-gray-600">
                Colaboración para la aplicación clínica de terapias desarrolladas en nuestro laboratorio.
              </p>
            </div>

            {/* Collaborator 6 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-16 w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Centro de Investigación Biomédica"
                  width={200}
                  height={80}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-bold">Centro de Investigación Biomédica</h3>
              <p className="text-center text-gray-600">
                Colaboración en proyectos de investigación sobre células madre y terapia celular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">¿Interesado en colaborar con nosotros?</h2>
            <p className="mt-4 text-white/80">
              Estamos abiertos a colaboraciones con otros grupos de investigación, instituciones académicas y empresas
              del sector biotecnológico. Si estás interesado en colaborar con nosotros, no dudes en contactarnos.
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
        </div>
      </section>
    </>
  )
}
