import { use, useState } from "react";

function ControlledInput() {
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    // e.target.value ile input'un değerini alıyoruz
    setvalue(e.target.value); // ve state'e yazıyoruz
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Bir Şey Yaz.."
      />
      <p>Yazdığınız: {value}</p>
    </div>
  );
}
export default ControlledInput;
