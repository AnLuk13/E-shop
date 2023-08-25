const userData = JSON.parse(sessionStorage.getItem("userData"));
const localData = JSON.parse(localStorage.getItem("localData"));
const navBar = document.getElementsByClassName("nav-bar-links");

if (
  (userData &&
    userData.username &&
    userData.lastname &&
    userData.password &&
    userData.email &&
    userData.checkbox) ||
  (localData &&
    localData.username &&
    localData.lastname &&
    localData.password &&
    localData.email &&
    localData.checkbox)
) {
  document.querySelector("#register-link").classList.add("hidden");
  const logOut = document.createElement("button");
  logOut.classList.add("nav-bar-links__link");
  logOut.textContent = "Log out!";
  navBar[0].insertBefore(logOut, navBar[0].firstChild);

  const registerLink = document.querySelector("#register-link");
  registerLink.textContent = "Log in";

  logOut.addEventListener("click", (e) => {
    const shouldSave = confirm(`Save login data?`);

    logOut.classList.add("hidden");
    registerLink.classList.remove("hidden");

    if (shouldSave) {
      if (!localData) {
        localStorage.setItem("localData", JSON.stringify(userData));
      }
    } else {
      sessionStorage.removeItem("userData");
      localStorage.removeItem("localData");
      window.location.reload();
      registerLink.textContent = "Register";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (userData.username && userData.lastname) {
      alert(`Hello, ${userData.username} ${userData.lastname}!`);
      confirm(`The newest updates will be sent to ${userData.email} ?`);
    }
  });
} else {
  document.querySelector("#register-link").classList.remove("hidden");
}

const getData = localStorage.getItem("userData");

const parseData = JSON.parse(getData);

// window.addEventListener("beforeunload", function (event) {
//   event.returnValue = "Leave now?";
// });
