document.addEventListener("DOMContentLoaded", () => {
  const name3Input  = document.getElementById("name3");
  const email3Input = document.getElementById("email3");
  const agree3Input = document.getElementById("agree3");
  const btn3        = document.getElementById("subscribeBtn3");

  const setError = (el, on) => el.classList.toggle("is-error", on);

  const name3Valid  = () => name3Input.value.trim() !== "";
  const email3Valid = () => email3Input.value.trim() !== "" && email3Input.checkValidity();
  const agree3Valid  = () => agree3Input.value.trim() !== "";

  // 1) Name doldurmadan email'e geçerse -> name kırmızı
  email3Input.addEventListener("focus", () => {
    if (!name3Valid()) setError(name3Input, true);
    else setError(name3Input, false);
  });

   agree3Input.addEventListener("focus", () => {
    if (!agree3Valid()) setError(agree3Input, false);
    else setError(agree3Input, true);
  });

  // 2) Name+Email doğru değilken checkbox seçerse -> ikisi de kırmızı
  agree3Input.addEventListener("change", () => {
    const nOk3 = name3Valid();
    const eOk3 = email3Valid();

    if (!nOk3) setError(name3Input, true);
    if (!eOk3) setError(email3Input, true);

    // ikisi de doğruysa kırmızıyı temizle
    if (nOk3) setError(name3Input, false);
    if (eOk3) setError(email3Input, false);
  });

  // 3) Subscribe basınca boş/yanlış olanlar kırmızı
  btn3.addEventListener("click", (e) => {
    e.preventDefault();

    const nOk3 = name3Valid();
    const eOk3 = email3Valid();
    const cOk3 = agree3Input.checked;

    setError(name3Input, !nOk3);
    setError(email3Input, !eOk3);
    setError(agree3Input, !cOk3);

    // hepsi doğruysa burada devam edebilirsin (şimdilik sadece örnek)
    if (nOk3 && eOk3 && cOk3) {
      console.log("OK");
    }
  });

  // yazarken düzeldiyse kırmızıyı kaldır
  name3Input.addEventListener("input", () => setError(name3Input, !name3Valid()));
  email3Input.addEventListener("input", () => setError(email3Input, !email3Valid()));
  agree3Input.addEventListener("input", () => setError(agree3Input, !agree3Valid()));
  

});