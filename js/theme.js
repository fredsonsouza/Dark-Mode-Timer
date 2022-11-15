function darkMode({ buttonLight, buttonDark }) {
  buttonLight.addEventListener("click", () => {
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");

    document.body.classList.add("dark-theme");
  });

  buttonDark.addEventListener("click", () => {
    buttonLight.classList.remove("hide");
    buttonDark.classList.add("hide");

    document.body.classList.remove("dark-theme");
  });
}

export { darkMode };
