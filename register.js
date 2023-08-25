const existingData = JSON.parse(sessionStorage.getItem("userData"));
const safeData = JSON.parse(localStorage.getItem("localData"));

if (
  (existingData &&
    existingData.username &&
    existingData.lastname &&
    existingData.password &&
    existingData.email &&
    existingData.checkbox) ||
  (safeData &&
    safeData.username &&
    safeData.lastname &&
    safeData.password &&
    safeData.email &&
    safeData.checkbox)
) {
  location.href = "../pages/index.html";
} else {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.currentTarget.querySelector("#name").value;
    const lastname = e.currentTarget.querySelector("#last-name").value;
    const password = e.currentTarget.querySelector("#password").value;
    const email = e.currentTarget.querySelector("#email").value;
    const checkbox = e.currentTarget.querySelector("#accept-terms").value;

    const data = {
      username: username,
      lastname: lastname,
      password: password,
      email: email,
      checkbox: checkbox,
    };

    if (username && lastname && password && email && checkbox) {
      sessionStorage.setItem("userData", JSON.stringify(data));
      location.href = "../pages/index.html";
    }
  });
}
