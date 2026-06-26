import { useState } from 'react'
import './App.css'

import ValidatedInput from "./components/ValidatedInput";

function App() {
  const rules = [
    (value) => ({
      isValid: value.length >= 3,
      error: "Минимум 3 символа",
    }),
    (value) => ({
      isValid: /^\w+$/.test(value),
      error: "Только буквы и цифры",
    }),
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Validated Input</h2>
      <ValidatedInput validationRules={rules} />
    </div>
  );
}

export default App;