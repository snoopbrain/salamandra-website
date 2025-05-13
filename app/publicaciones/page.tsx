import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PublicationsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Publicaciones</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Descubre nuestras contribuciones científicas en el campo de la medicina regenerativa.
          </p>
        </div>
      </section>

      {/* Publications Filter */}
      <section className="border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-medium text-gray-700">Filtrar por:</span>
              <select className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none">
                <option value="">Todas las áreas</option>
                <option value="medicina-regenerativa">Medicina Regenerativa</option>
                <option value="terapia-celular">Terapia Celular</option>
                <option value="ingenieria-tejidos">Ingeniería de Tejidos</option>
                <option value="bioimpresion-3d">Bioimpresión 3D</option>
                <option value="biomateriales">Biomateriales</option>
              </select>
              <select className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none">
                <option value="">Todos los años</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar publicaciones..."
                className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-primary focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Publicaciones Científicas
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Nuestras Contribuciones Recientes</h2>
            <p className="mt-4 text-gray-600">
              Publicaciones en revistas científicas de alto impacto en el campo de la medicina regenerativa.
            </p>
          </div>

          <div className="space-y-8">
            {/* Publication 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="grid md:grid-cols-4">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Regeneración de tejido cardíaco"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Medicina Regenerativa
                    </span>
                    <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      2023
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Avances en la regeneración de tejido cardíaco mediante el uso de células madre mesenquimales
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Ramírez A, Mendoza C, Herrera M, Gómez L, Vargas C, Martínez A, Sánchez R.
                  </p>
                  <p className="mt-1 text-gray-600">
                    <strong>Journal of Regenerative Medicine</strong>, 2023; 15(3): 245-258.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Este estudio demuestra la eficacia de las células madre mesenquimales derivadas de médula ósea en la
                    regeneración de tejido cardíaco tras un infarto de miocardio en modelos animales. Los resultados
                    muestran una mejora significativa en la función cardíaca y una reducción del área de infarto.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/publicaciones/regeneracion-cardiaca-celulas-madre"
                      className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                    >
                      Leer más
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver en PubMed
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="grid md:grid-cols-4">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Scaffolds para regeneración ósea"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Ingeniería de Tejidos
                    </span>
                    <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      2022
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Desarrollo de scaffolds biocompatibles para la regeneración de tejido óseo
                  </h3>
                  <p className="mt-2 text-gray-600">Mendoza C, Herrera M, Ramírez A, Vargas C, Torres M, Pérez V.</p>
                  <p className="mt-1 text-gray-600">
                    <strong>Biomaterials</strong>, 2022; 45(8): 1023-1038.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Este estudio presenta el desarrollo de scaffolds biocompatibles con propiedades mecánicas y
                    biológicas óptimas para la regeneración de tejido óseo. Los scaffolds, fabricados mediante técnicas
                    de electrospinning, mostraron excelente biocompatibilidad y capacidad para promover la
                    diferenciación osteogénica de células madre mesenquimales.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/publicaciones/scaffolds-regeneracion-osea"
                      className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                    >
                      Leer más
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver en PubMed
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="grid md:grid-cols-4">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Bioimpresión 3D"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Bioimpresión 3D
                    </span>
                    <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      2023
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Bioimpresión 3D de constructos vasculares para aplicaciones en medicina regenerativa
                  </h3>
                  <p className="mt-2 text-gray-600">Herrera M, Ramírez A, Mendoza C, Sánchez R, López M.</p>
                  <p className="mt-1 text-gray-600">
                    <strong>Advanced Healthcare Materials</strong>, 2023; 12(2): 2200458.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Este estudio presenta una metodología innovadora para la bioimpresión 3D de constructos vasculares
                    utilizando biotintas personalizadas. Los constructos mostraron excelente viabilidad celular y
                    capacidad para formar estructuras vasculares funcionales, con potencial aplicación en la ingeniería
                    de tejidos y medicina regenerativa.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/publicaciones/bioimpresion-constructos-vasculares"
                      className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                    >
                      Leer más
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver en PubMed
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication 4 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="grid md:grid-cols-4">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Terapia celular"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Terapia Celular
                    </span>
                    <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      2022
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Terapias basadas en células madre para la regeneración de tejido nervioso en lesiones de médula
                    espinal
                  </h3>
                  <p className="mt-2 text-gray-600">Ramírez A, Gómez L, Castro D, Rodríguez S.</p>
                  <p className="mt-1 text-gray-600">
                    <strong>Stem Cell Research & Therapy</strong>, 2022; 13(1): 45.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Este estudio evalúa la eficacia de diferentes tipos de células madre en la regeneración de tejido
                    nervioso tras lesiones de médula espinal. Los resultados muestran que las células madre neurales y
                    las células madre mesenquimales promueven la regeneración axonal y mejoran la recuperación funcional
                    en modelos animales.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/publicaciones/terapias-celulares-regeneracion-neural"
                      className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                    >
                      Leer más
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver en PubMed
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication 5 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="grid md:grid-cols-4">
                <div className="relative h-full min-h-[200px] md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Biomateriales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Biomateriales
                    </span>
                    <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      2021
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">
                    Hidrogeles inyectables con liberación controlada de factores de crecimiento para aplicaciones en
                    medicina regenerativa
                  </h3>
                  <p className="mt-2 text-gray-600">Mendoza C, Vargas C, Pérez V, Fernández L.</p>
                  <p className="mt-1 text-gray-600">
                    <strong>Journal of Controlled Release</strong>, 2021; 335: 530-544.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Este estudio presenta el desarrollo de hidrogeles inyectables con capacidad para la liberación
                    controlada de factores de crecimiento. Los hidrogeles mostraron excelente biocompatibilidad y
                    capacidad para promover la regeneración tisular en diferentes modelos de lesión.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/publicaciones/hidrogeles-liberacion-controlada"
                      className="group inline-flex items-center font-medium text-primary hover:text-primary-600"
                    >
                      Leer más
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver en PubMed
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <a
                href="#"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Anterior
              </a>
              <a href="#" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white">
                1
              </a>
              <a
                href="#"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <span className="px-2 text-gray-500">...</span>
              <a
                href="#"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Siguiente
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Book Chapters */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Capítulos de Libros
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Contribuciones en Libros Científicos</h2>
            <p className="mt-4 text-gray-600">
              Nuestros investigadores han contribuido con capítulos en libros científicos de referencia en el campo de
              la medicina regenerativa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Book Chapter 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-md bg-gray-100">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="Libro de Medicina Regenerativa"
                  width={150}
                  height={200}
                  className="h-auto max-h-full w-auto max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold">Avances en Terapia Celular para Enfermedades Cardiovasculares</h3>
              <p className="mt-2 text-sm text-gray-600">
                <strong>En:</strong> Manual de Medicina Regenerativa y Terapia Celular
              </p>
              <p className="text-sm text-gray-600">
                <strong>Autores:</strong> Ramírez A, Mendoza C.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Editorial:</strong> Elsevier
              </p>
              <p className="text-sm text-gray-600">
                <strong>Año:</strong> 2022
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Este capítulo revisa los avances más recientes en el uso de terapias celulares para el tratamiento de
                enfermedades cardiovasculares, con énfasis en las aplicaciones clínicas y perspectivas futuras.
              </p>
            </div>

            {/* Book Chapter 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-md bg-gray-100">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="Libro de Ingeniería de Tejidos"
                  width={150}
                  height={200}
                  className="h-auto max-h-full w-auto max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold">Biomateriales para Ingeniería de Tejidos: Diseño y Aplicaciones</h3>
              <p className="mt-2 text-sm text-gray-600">
                <strong>En:</strong> Principios de Ingeniería de Tejidos
              </p>
              <p className="text-sm text-gray-600">
                <strong>Autores:</strong> Mendoza C, Vargas C, Herrera M.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Editorial:</strong> Springer
              </p>
              <p className="text-sm text-gray-600">
                <strong>Año:</strong> 2021
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Este capítulo aborda los principios fundamentales del diseño de biomateriales para aplicaciones en
                ingeniería de tejidos, incluyendo consideraciones sobre biocompatibilidad, propiedades mecánicas y
                degradación.
              </p>
            </div>

            {/* Book Chapter 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-md bg-gray-100">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="Libro de Bioimpresión 3D"
                  width={150}
                  height={200}
                  className="h-auto max-h-full w-auto max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold">
                Bioimpresión 3D: Tecnologías y Aplicaciones en Medicina Regenerativa
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                <strong>En:</strong> Avances en Bioimpresión 3D
              </p>
              <p className="text-sm text-gray-600">
                <strong>Autores:</strong> Herrera M, Sánchez R, López M.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Editorial:</strong> Academic Press
              </p>
              <p className="text-sm text-gray-600">
                <strong>Año:</strong> 2023
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Este capítulo presenta una revisión exhaustiva de las tecnologías de bioimpresión 3D y sus aplicaciones
                en medicina regenerativa, incluyendo la fabricación de tejidos y órganos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Presentaciones en Congresos
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Participación en Eventos Científicos</h2>
            <p className="mt-4 text-gray-600">
              Nuestros investigadores participan activamente en congresos y eventos científicos nacionales e
              internacionales.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Título
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Autores
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Evento
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Lugar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Año
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        Bioimpresión 3D de constructos vasculares: avances y desafíos
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Herrera M, López M, Sánchez R</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Congreso Internacional de Bioimpresión 3D</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Barcelona, España</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-500">2023</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        Células madre mesenquimales para la regeneración de tejido cardíaco: resultados preliminares
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Ramírez A, Gómez L, Rodríguez S</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Congreso Latinoamericano de Medicina Regenerativa</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Ciudad de México, México</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-500">2022</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        Scaffolds biocompatibles para regeneración ósea: caracterización y evaluación in vitro
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Mendoza C, Vargas C, Pérez V</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Simposio Internacional de Biomateriales</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Boston, Estados Unidos</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-500">2022</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        Terapias basadas en células madre para lesiones de médula espinal: avances recientes
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Ramírez A, Castro D, Martínez A</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Congreso Nacional de Neurociencias</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Bogotá, Colombia</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-500">2021</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        Hidrogeles inyectables con liberación controlada de factores de crecimiento: aplicaciones en
                        medicina regenerativa
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Mendoza C, Fernández L, Torres M</div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">
                        Conferencia Internacional de Sistemas de Liberación Controlada
                      </div>
                    </td>
                    <td className="whitespace-normal px-6 py-4">
                      <div className="text-sm text-gray-500">Singapur</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-500">2021</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
