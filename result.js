const form = document.getElementById("resultForm");
const resultBox = document.getElementById("resultBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const counsellingData =
    JSON.parse(localStorage.getItem("counsellingData")) || [];

  const student = counsellingData.find(
    s => s.email === email || s.phone === phone
  );

  if (!student) {
    resultBox.innerHTML = `<p class="error">No record found</p>`;
    return;
  }

  resultBox.innerHTML = `
    <div class="feature-card">
      <h3>Seat Allotment Result</h3>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>College:</strong> ${student.college}</p>
      <p><strong>Status:</strong> ${student.status}</p>
      ${
        student.status === "Allotted"
          ? `<p><strong>Allotted Course:</strong> ${student.allottedCourse}</p>`
          : ""
      }
    </div>
  `;
});
