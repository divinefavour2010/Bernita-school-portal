// Redirect if not logged in and trying to access dashboard
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user && window.location.pathname.includes("dashboard.html")) {
  window.location.replace("index.html"); // redirect to login
}

// Prevent going back to login after logging in
if (user && window.location.pathname.includes("dashboard.html")) {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  // Update topbar details
  document.getElementById("studentName").textContent = user.name;
  document.getElementById("studentID").textContent = user.id;
  document.getElementById("studentClass").textContent = user.class;

  // Update profile card details
  const profileName = document.getElementById("profileName");
  const profileClass = document.getElementById("profileClass");
  const profileID = document.getElementById("profileID");

  if (profileName && profileClass && profileID) {
    profileName.textContent = user.name;
    profileClass.textContent = user.class;
    profileID.textContent = user.id;
  }
}

// Sample users (students)
const users = [
  { username: "jace", password: "1234", name: "John Doe", class: "SS2", id: "ST001" },
  { username: "mary", password: "5678", name: "Mary Jane", class: "SS3", id: "ST002" },
  { username: "divine", password: "1234", name: "Divine Doe", class: "SS1", id: "ST003" }
];

function loginUser(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save login info
    window.location.replace("dashboard.html"); // Redirect to dashboard
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}
