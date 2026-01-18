document.addEventListener("DOMContentLoaded", () => {
  const nameInput  = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const agreeInput = document.getElementById("agree");
  const btn        = document.getElementById("subscribeBtn");

  const setError = (el, on) => el.classList.toggle("is-error", on);

  const nameValid  = () => nameInput.value.trim() !== "";
  const emailValid = () => emailInput.value.trim() !== "" && emailInput.checkValidity();
  const agreeValid  = () => agreeInput.value.trim() !== "";

  // 1) For Name input
  emailInput.addEventListener("focus", () => {
    if (!nameValid()) setError(nameInput, true);
    else setError(nameInput, false);
  });

   agreeInput.addEventListener("focus", () => {
    if (!agreeValid()) setError(agreeInput, false);
    else setError(agreeInput, true);
  });

  // 2) If Name+Email false and clicked checkbox -> them both be red.
  agreeInput.addEventListener("change", () => {
    const nOk = nameValid();
    const eOk = emailValid();

    if (!nOk) setError(nameInput, true);
    if (!eOk) setError(emailInput, true);

  // 3) If them both is red, clear to red
    if (nOk) setError(nameInput, false);
    if (eOk) setError(emailInput, false);
  });

  // 4) When clicked Subscribe, any blank/incorrect ones be red
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nOk = nameValid();
    const eOk = emailValid();
    const cOk = agreeInput.checked;

    setError(nameInput, !nOk);
    setError(emailInput, !eOk);
    setError(agreeInput, !cOk);

    // If all of them is right, can continue 
    if (nOk && eOk && cOk) {
      console.log("OK");
    }
  });

    // If it's correct when you write it, remove red
  nameInput.addEventListener("input", () => setError(nameInput, !nameValid()));
  emailInput.addEventListener("input", () => setError(emailInput, !emailValid()));
  agreeInput.addEventListener("input", () => setError(agreeInput, !agreeValid()));
  

});
