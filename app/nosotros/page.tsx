import Image from "next/image";
import { Award, BookOpen, Microscope, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Sobre Nosotros</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Conoce más sobre el Grupo de Investigación Salamandra y nuestra misión en el campo de la medicina regenerativa.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Laboratorio de Medicina Regenerativa"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
                Nuestra Historia
              </h5>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Innovando en Medicina Regenerativa desde 2015
              </h2>
              <p className="mt-6 text-gray-600">
                El Grupo de Investigación Salamandra fue fundado en 2015 en la Universidad Cooperativa de Colombia con el objetivo de desarrollar investigaciones innovadoras en el campo de la medicina regenerativa y la terapia celular.
              </p>
              <p className="mt-4 text-gray-600">
                Nuestro nombre, Salamandra, se inspira en la extraordinaria capacidad de regeneración de estos anfibios, que pueden regenerar extremidades, cola, corazón y otras partes de su cuerpo. Esta capacidad regenerativa representa nuestra visión y misión: desarrollar terapias que permitan la regeneración de tejidos y órganos humanos dañados.
              </p>
              <p className="mt-4 text-gray-600">
                A lo largo de los años, hemos crecido hasta convertirnos en un referente en investigación biomédica, con colaboraciones nacionales e internacionales y publicaciones en revistas científicas de alto impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Nuestra Identidad
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Misión, Visión y Valores
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Misión</h3>
              <p className="text-gray-600">
                Desarrollar investigación de vanguardia en medicina regenerativa y terapia celular para crear soluciones innovadoras que mejoren la calidad de vida de los pacientes con enfermedades degenerativas y lesiones traumáticas.
              </p>
              <p className="mt-4 text-gray-600">
                Formar nuevos investigadores con excelencia científica y compromiso ético, contribuyendo al avance del conocimiento en el campo de la medicina regenerativa.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como un centro de excelencia en investigación en medicina regenerativa a nivel nacional e internacional, liderando el desarrollo de terapias innovadoras que transformen el tratamiento de enfermedades degenerativas.
              </p>
              <p className="mt-4 text-gray-600">
                Establecer un ecosistema de investigación traslacional que facilite la transferencia de descubrimientos científicos a aplicaciones clínicas, mejorando la salud y calidad de vida de los pacientes.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Excelencia científica:</strong> Compromiso con la investigación rigurosa y de alta calidad.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Innovación:</strong> Búsqueda constante de soluciones creativas y disruptivas.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Integridad:</strong> Conducta ética y transparente en todas nuestras actividades.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Colaboración:</strong> Trabajo en equipo y alianzas estratégicas para potenciar resultados.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Impacto social:</strong> Compromiso con el desarrollo de soluciones que mejoren la calidad de vida.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Nuestros Logros
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Hitos y Reconocimientos
            </h2>
            <p className="mt-4 text-gray-600">
              A lo largo de nuestra trayectoria, hemos alcanzado importantes logros que reflejan nuestro compromiso con la excelencia en investigación.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">25+</h3>
              <p className="mt-2 text-gray-600">Publicaciones científicas en revistas indexadas</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">15+</h3>
              <p className="mt-2 text-gray-600">Colaboraciones con instituciones nacionales e internacionales</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">8</h3>
              <p className="mt-2 text-gray-600">Premios y reconocimientos a la investigación</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Microscope size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">12+</h3>
              <p className="mt-2 text-gray-600">Proyectos de investigación financiados</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold">Línea de Tiempo</h3>
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div className="absolute bottom-0 left-3 top-6 w-px bg-gray-200"></div>
                  <div>
                    <h4 className="text-lg font-bold">2015: Fundación del Grupo</h4>
                    <p className="mt-2 text-gray-600">
                      Creación del Grupo de Investigación Salamandra en la Universidad Cooperativa de Colombia, con enfoque en medicina regenerativa.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div className="absolute bottom-0 left-3 top-6 w-px bg-gray-200"></div>
                  <div>
                    <h4 className="text-lg font-bold">2017: Primera Publicación Internacional</h4>
                    <p className="mt-2 text-gray-600">
                      Publicación de nuestro primer artículo en una revista científica internacional de alto impacto sobre regeneración de tejido cardíaco.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div className="absolute bottom-0 left-3 top-6 w-px bg-gray-200"></div>
                  <div>
                    <h4 className="text-lg font-bold">2019: Reconocimiento Nacional</h4>
                    <p className="mt-2 text-gray-600">
                      Clasificación como Grupo de Investigación Categoría B por Colciencias (ahora Minciencias) en Colombia.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div className="absolute bottom-0 left-3 top-6 w-px bg-gray-200"></div>
                  <div>
                    <h4 className="text-lg font-bold">2020: Colaboración Internacional</h4>
                    <p className="mt-2 text-gray-600">
                      Inicio de colaboración con universidades de España y Estados Unidos para proyectos de investigación en bioimpresión 3D.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-xs font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">2022: Premio a la Innovación</h4>
                    <p className="mt-2 text-gray-600">
                      Reconocimiento por el desarrollo de un scaffold biocompatible para regeneración de tejido óseo en el Congreso Internacional de Medicina Regenerativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h5 className="text-md inline-block border-b-2 border-primary pb-1 font-medium uppercase tracking-wider text-primary">
              Nuestro Equipo
            </h5>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Un Equipo Multidisciplinario
            </h2>
            <p className="mt-4 text-gray-600">
              Contamos con un equipo de investigadores altamente calificados con formación en diversas áreas del conocimiento.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold">Composición del Equipo</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Investigadores Principales</h4>
                    <p className="text-gray-600">Doctores con amplia experiencia en medicina regenerativa, ingeniería de tejidos y biología celular.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Investigadores Asociados</h4>
                    <p className="text-gray-600">Profesionales con maestría y doctorado en áreas como biotecnología, biomateriales y ciencias biomédicas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Estudiantes de Investigación</h4>
                    <p className="text-gray-600">Estudiantes de pregrado y posgrado que contribuyen activamente en proyectos de investigación.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold">Colaboradores</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Instituciones Nacionales</h4>
                    <p className="text-gray-600">Colaboración con universidades y centros de investigación en Colombia.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Instituciones Internacionales</h4>
                    <p className="text-gray-600">Alianzas estratégicas con universidades y centros de investigación en el extranjero.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
