const colleges = [
  {
    name: "ABC Engineering College",
    course: "B.Tech",
    location: "Delhi",
    fees: "₹1,20,000"
  },
  {
    name: "Global Business School",
    course: "BBA",
    location: "Mumbai",
    fees: "₹90,000"
  },
  {
    name: "National Arts College",
    course: "BA",
    location: "Kolkata",
    fees: "₹60,000"
  },
  {
    name: "Tech Valley Institute",
    course: "BCA",
    location: "Bangalore",
    fees: "₹80,000"
  }
];

const list = document.getElementById("collegeList");
const searchInput = document.getElementById("searchInput");

function displayColleges(data) {
  list.innerHTML = "";

  data.forEach(college => {
    const div = document.createElement("div");
    div.className = "feature-card";

    div.innerHTML = `
      <h3>${college.name}</h3>
      <p><strong>Course:</strong> ${college.course}</p>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Fees:</strong> ${college.fees}</p>

      <button onclick="applyCollege('${college.name}')">
        Apply
      </button>
    `;

    list.appendChild(div);
  });
}

// function displayColleges(data) {
//   list.innerHTML = "";
//   data.forEach(college => {
//     const div = document.createElement("div");
//     div.className = "feature-card";
//     div.innerHTML = `
//       <h3>${college.name}</h3>
//       <p><strong>Course:</strong> ${college.course}</p>
//       <p><strong>Location:</strong> ${college.location}</p>
//       <p><strong>Fees:</strong> ${college.fees}</p>
//     `;
//     list.appendChild(div);
//   });
// }

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(value) ||
    c.course.toLowerCase().includes(value)
  );
  displayColleges(filtered);
});

displayColleges(colleges);

function applyCollege(collegeName) {
  localStorage.setItem("selectedCollege", collegeName);
  window.location.href = "counselling-form.html";
}
