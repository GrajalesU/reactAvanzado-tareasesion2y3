import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter();
  const modifiedCounter = useCounter(4, -2, 10);
  return (
    <div
      style={{
        border: "1px solid",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          border: "1px solid",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <h2>Contador por defecto</h2>
        <h3>{counter}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={() => increment()}>Incrementar</button>
          <button onClick={() => decrement()}>Disminuir</button>
          <button onClick={reset}>Reiniciar</button>
        </div>
      </div>
      <div
        style={{
          border: "1px solid",
          padding: 10,
        }}
      >
        <hgroup>
          <h2>Contador modificado</h2>
          <h3>
            Máximo: 10 <br /> Mínimo: -2 <br /> Valor inicial 4 <br /> se suma
            de a 2 y se resta de a 3
          </h3>
          <h4>{modifiedCounter.counter}</h4>
        </hgroup>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={() => modifiedCounter.increment(2)}>
            Incrementar
          </button>
          <button onClick={() => modifiedCounter.decrement(3)}>
            Disminuir
          </button>
          <button onClick={() => modifiedCounter.reset()}>Reiniciar</button>
        </div>
      </div>
    </div>
  );
}
