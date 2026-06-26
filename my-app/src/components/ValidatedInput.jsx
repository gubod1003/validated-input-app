import { useState } from "react";

export default function ValidatedInput({ validationRules }) {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState([]);

  const validate = (val) => {
    const newErrors = [];

    validationRules.forEach((rule) => {
      const result = rule(val);
      if (!result.isValid) {
        newErrors.push(result.error);
      }
    });

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    validate(val);
  };

  const isValid = errors.length === 0 && value.length > 0;

  const handleSubmit = () => {
    console.log("Отправка:", value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст"
      />

      <div style={{ color: "red", marginTop: "5px" }}>
        {errors.map((err, i) => (
          <div key={i}>{err}</div>
        ))}
      </div>

      <button disabled={!isValid} onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
}