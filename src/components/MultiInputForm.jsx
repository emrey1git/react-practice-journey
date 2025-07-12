import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // input'un name özelliğini kullanarak formData'yı güncelliyoruz
      // e.target.name ile input'un name'ini alıyoruz
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // formun submit işlemini engelliyoruz
    console.log("Form Verileri: ", formData);
    // form gönderildikten sonra inputları temizleyebiliriz
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="İsim"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        placeholder="Şifre"
      />
      <button type="submit">Gönder</button>
    </form>
  );
}
export default MultiInputForm;
