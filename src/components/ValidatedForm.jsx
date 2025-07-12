import { useState } from "react";

function ValidatedForm() {
  // 1. Form verileri için state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 2. Hata mesajları için state
  const [errors, setErrors] = useState({});

  // 3. validate fonksiyonu (formu kontrol eder)
  const validate = () => {
    const newErrors = {}; // Başlangıçta hata yok

    if (!formData.name.trim()) {
      newErrors.name = "İsim zorunludur"; // isim boşsa hata ekle
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email zorunludur"; // email boşsa hata
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Geçerli bir email girin"; // email format kontrolü
    }

    if (!formData.password.trim()) {
      newErrors.password = "Şifre zorunludur"; // şifre boşsa hata
    }

    return newErrors; // tüm hatalar döner
  };

  // 4. input değiştiğinde çalışan fonksiyon
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Aynı zamanda, kullanıcının hata olan alanı değiştirince hata mesajını temizliyoruz
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // 5. Form gönderildiğinde çalışan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // hataları kontrol et

    if (Object.keys(validationErrors).length > 0) {
      // hata varsa state'e yaz, form gönderilmez
      setErrors(validationErrors);
      return;
    }

    // hata yoksa form gönderme işlemini yap (şimdilik konsola yazdır)
    console.log("Form geçerli, veriler gönderiliyor:", formData);

    // formu temizle
    setFormData({ name: "", email: "", password: "" });
  };

  // 6. JSX render kısmı
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="İsim"
        />
        {/* Hata varsa göster */}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifre"
          type="password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Gönder</button>
    </form>
  );
}

export default ValidatedForm;
