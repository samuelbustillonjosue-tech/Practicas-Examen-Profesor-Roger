import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [mensajeExito, setMensajeExito] = useState('')

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const formularioValido =
    nombre.trim().length >= 3 &&
    correoValido &&
    mensaje.trim().length >= 10

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (formularioValido) {
      setMensajeExito('¡Gracias por tu mensaje!')
      setNombre('')
      setEmail('')
      setMensaje('')
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Formulario de Contacto
        </h1>

        <p className="text-gray-600 text-center mb-6">
          ¿Tienes alguna consulta? Envíanos tu mensaje.
        </p>

        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje (mínimo 10 caracteres)"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!formularioValido}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg"
          >
            Enviar mensaje
          </button>
        </form>

        {mensajeExito && (
          <p className="text-green-600 font-semibold text-center mt-5">
            {mensajeExito}
          </p>
        )}
      </div>
    </div>
  )
}

export default App