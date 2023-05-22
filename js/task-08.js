document.querySelector(".login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const elements = form.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (!email || !password) return alert("Всі поля повинні бути заповнені");

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
});
