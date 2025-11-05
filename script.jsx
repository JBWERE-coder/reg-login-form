document.addEventListener("DOMContentLoaded", () => {
  let registeredUser = {};

  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    if (!username || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    registeredUser = { username, email, password };
    alert("Registration successful!");

    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (username === registeredUser.username && password === registeredUser.password) {
      alert(`Welcome back, ${username}!`);
    } else {
      alert("Wrong username or password!");
    }
  });
});
