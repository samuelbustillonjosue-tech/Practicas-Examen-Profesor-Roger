import { useState } from 'react'

function App() {
  const [monto, setMonto] = useState('')
  const [porcentaje, setPorcentaje] = useState(10)

  const montoValido = Number(monto) > 0 && monto.trim() !== ''

  const propina = montoValido
    ? (Number(monto) * porcentaje) / 100
    : 0

  const total = montoValido
    ? Number(monto) + propina
    : 0

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Calculadora de Propinas
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Calcula fácilmente la propina y el total de tu cuenta.
        </p>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Monto de la cuenta (L)
          </label>

          <input
            type="number"
            min="0"
            step="0.01"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Ingresa el monto de la cuenta"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-700 font-semibold mb-3">
            Selecciona el porcentaje de propina:
          </p>

          <div className="flex gap-3">
            {[10, 15, 20].map((valor) => (
              <button
                key={valor}
                onClick={() => setPorcentaje(valor)}
                className={`flex-1 py-3 rounded-lg font-bold ${
                  porcentaje === valor
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                {valor}%
              </button>
            ))}
          </div>
        </div>

        {montoValido ? (
          <div className="bg-indigo-50 rounded-xl p-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monto de la cuenta:</span>
              <span className="font-semibold">L {Number(monto).toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Propina ({porcentaje}%):</span>
              <span className="font-semibold text-green-600">
                L {propina.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-indigo-200 pt-4 flex justify-between">
              <span className="text-gray-800 font-bold">Total a pagar:</span>
              <span className="text-indigo-700 font-bold text-xl">
                L {total.toFixed(2)}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 bg-gray-100 rounded-lg p-4">
            Ingresa un monto válido para calcular la propina.
          </p>
        )}

      </div>
    </div>
  )
}

export default App