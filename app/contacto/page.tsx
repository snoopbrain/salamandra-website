import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Contacto</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Estamos aquí para responder tus preguntas y explorar posibles colaboraciones.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Ubicación</h3>
              <p className="mt-2 text-gray-600">
                Universidad Cooperativa de Colombia
                <br />
                Facultad de Ciencias de la Salud
                <br />
                Medellín, Colombia
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={32} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Email</h3>
              <p className="mt-2 text-gray-600">
                salamandra@ucc.edu.co
                <br />
                investigacion.salamandra@ucc.edu.co
              </p>
              <Link href="mailto:salamandra@ucc.edu.co" className="mt-4 text-primary hover:underline">
                Envíanos un email
              </Link>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone size={32} />
              </div>
              <h3 className="mt-6 text-xl font-bold">Teléfono</h3>
              <p className="mt-2 text-gray-600">
                +57 3126660158
                <br />
                Lunes a Viernes: 8:00 AM - 5:00 PM
              </p>
              <Link href="tel:+573126660158" className="mt-4 text-primary hover:underline">
                Llámanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Envíanos un Mensaje</h2>
            <p className="mt-4 text-gray-600">
              Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="Tu apellido"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0612925077384!2d-75.56905368523159!3d6.2508911954867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80d7af1%3A0x42137cfcc7d3c508!2sUniversidad%20Cooperativa%20de%20Colombia%20-%20Sede%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1652901234567!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-4 text-gray-600">
              Respuestas a las preguntas más comunes sobre nuestro grupo de investigación.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold">¿Cómo puedo unirme al grupo de investigación?</h3>
              <p className="mt-2 text-gray-600">
                Los estudiantes interesados en unirse al grupo de investigación pueden enviar su CV y una carta de
                motivación a nuestro correo electrónico. Realizamos convocatorias semestrales para nuevos miembros.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold">¿Ofrecen pasantías o prácticas de investigación?</h3>
              <p className="mt-2 text-gray-600">
                Sí, ofrecemos pasantías y prácticas de investigación para estudiantes de pregrado y posgrado. Las
                oportunidades varían según los proyectos activos. Contacta con nosotros para más información.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold">¿Cómo puedo colaborar con el grupo de investigación?</h3>
              <p className="mt-2 text-gray-600">
                Estamos abiertos a colaboraciones con otros grupos de investigación, instituciones académicas y
                empresas. Puedes contactarnos por email para discutir posibles colaboraciones en proyectos de
                investigación.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold">¿Realizan servicios de consultoría?</h3>
              <p className="mt-2 text-gray-600">
                Sí, ofrecemos servicios de consultoría en áreas relacionadas con la medicina regenerativa, ingeniería de
                tejidos y terapia celular. Contacta con nosotros para discutir tus necesidades específicas.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold">¿Tienen publicaciones científicas disponibles?</h3>
              <p className="mt-2 text-gray-600">
                Sí, nuestras publicaciones científicas están disponibles en nuestra página web en la sección de
                Publicaciones. También puedes encontrar nuestros artículos en bases de datos científicas como PubMed,
                Scopus y Web of Science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
