alert("form.js loaded");

const form = document.getElementById("counsellingForm");

// ---------- COLLEGE AUTO-SELECT LOGIC ----------
const collegeSelect = document.getElementById("college");
const selectedCollege = localStorage.getItem("selectedCollege");

if (selectedCollege && collegeSelect) {
  collegeSelect.value = selectedCollege;
  collegeSelect.disabled = true; // lock only if coming from Apply
}

// ---------- FORM SUBMIT ----------
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = [
    "name",
    "email",
    "phone",
    "level",
    "college",
    "stream",
    "marks",
    "course"

          
  ];

  fields.forEach(id => {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;

    if (!input.value || input.value.trim() === "") {
      error.innerText = "This field is required";
      isValid = false;
    } else {
      error.innerText = "";
    }
  });

  // Phone validation
  const phone = document.getElementById("phone");
  if (!/^\d{10}$/.test(phone.value)) {
    phone.nextElementSibling.innerText = "Enter valid 10-digit number";
    isValid = false;
  }

  if (!isValid) return;

  // Enable college before saving (disabled fields don’t submit)
  collegeSelect.disabled = false;

  // ---------- SAVE DATA ----------
  const counsellingData =
    JSON.parse(localStorage.getItem("counsellingData")) || [];

  counsellingData.push({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: phone.value,
    level: document.getElementById("level").value,
    college: collegeSelect.value,
    stream: document.getElementById("stream").value,
    marks: document.getElementById("marks").value,
    course: document.getElementById("course").value,

    status: "Pending",
  allottedCourse: ""
  });

  localStorage.setItem(
    "counsellingData",
    JSON.stringify(counsellingData)
  );

  // ---------- CLEANUP ----------
  localStorage.removeItem("selectedCollege");
  alert("Form submitted successfully!");
  window.location.href = "thankyou.html";
});


