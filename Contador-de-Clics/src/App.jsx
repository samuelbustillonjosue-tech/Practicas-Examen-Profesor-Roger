import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const reiniciar = () => {
    setContador(0)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Contador de Clics
        </h1>

        <p className="text-gray-600 mb-6">
          Lleva el registro de tus eventos fácilmente.
        </p>

        <div className="bg-indigo-50 rounded-xl py-8 mb-6">
          <p className="text-gray-600 text-lg mb-2">Conteo actual</p>
          <p className="text-6xl font-bold text-indigo-600">
            {contador}
          </p>
        </div>

        <div className="flex gap-3 justify-center mb-4">
          <button
            onClick={incrementar}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            + Incrementar
          </button>

          <button
            onClick={decrementar}
            disabled={contador === 0}
            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg"
          >
            - Disminuir
          </button>
        </div>

        <button
          onClick={reiniciar}
          disabled={contador === 0}
          className="w-full bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg"
        >
          Reiniciar contador
        </button>

        {contador === 0 && (
          <p className="text-sm text-gray-500 mt-4">
            El contador está en cero.
          </p>
        )}
      </div>
    </div>
  )
}

export default App