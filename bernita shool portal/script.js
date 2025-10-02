// Sample users (students)
const users = [
  { username: "jace", password: "1234", name: "John Doe", class: "SS2", id: "ST001" },
  { username: "mary", password: "5678", name: "Mary Jane", class: "SS3", id: "ST002" },
  { username: "divine", password: "1234", name: "divine Doe", class: "SS1", id: "ST003" }
];

function loginUser(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save login info
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}
