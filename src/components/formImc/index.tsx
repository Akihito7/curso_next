'use client'
import { useState } from "react"

export function FormImc() {
  const [height, setHeight] = useState<string>()
  const [weight, setWeight] = useState<string>()
  const [imc, setImc] = useState<String>()

  function handleCalculateImc() {

    const weightValue = parseFloat(weight!);
    const heightValue = parseFloat(height!) / 100;

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const calculatedImc = weightValue / (heightValue * heightValue);
    const roundedImc = calculatedImc.toFixed(2);
    setImc(roundedImc)
  }

  return (
    <>
        <label htmlFor="height">Altura</label>
        <input
          type="text"
          id="height"
          onChange={e => setHeight(e.target.value)}
          value={height}
        />

        <label htmlFor="weight">Peso</label>
        <input
          type="text"
          id="weight"
          onChange={e => setWeight(e.target.value)}
          value={weight}
        />

        <button onClick={handleCalculateImc}>
          Calcular
        </button>

      {
        imc && <h2>Seu IMC é : {imc}</h2>
      }
    </>

  )
}