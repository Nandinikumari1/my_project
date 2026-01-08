if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// const requestList = document.getElementById("requestList");

document.addEventListener("DOMContentLoaded", function () {
    const requestList = document.getElementById("requestList");

  const requests =
    JSON.parse(localStorage.getItem("counsellingData")) || [];

  requestList.innerHTML = ""; // clear "Requests will appear here"

  if (requests.length === 0) {
    requestList.innerHTML = "<p>No counselling requests yet.</p>";
    return;
  }

  requests.forEach((req, index) => {

    req.status = req.status || "Pending";
    req.allottedCourse = req.allottedCourse || "";

    const card = document.createElement("div");
    card.className = "feature-card";

    card.innerHTML = `
  <h3>Student ${index + 1}</h3>

  <p><strong>Name:</strong> ${req.name}</p>
  <p><strong>Email:</strong> ${req.email}</p>
  <p><strong>Phone:</strong> ${req.phone}</p>
  <p><strong>College:</strong> ${req.college}</p>
  <p><strong>Preferred Course:</strong> ${req.course}</p>

  <p>
    <strong>Status:</strong>
    <span class="status ${req.status.toLowerCase()}">
      ${req.status}
    </span>
  </p>

  <label>Update Status</label>
 <select id="status-${index}">
  <option value="Pending" ${req.status === "Pending" ? "selected" : ""}>Pending</option>
  <option value="Allotted" ${req.status === "Allotted" ? "selected" : ""}>Allotted</option>
  <option value="Rejected" ${req.status === "Rejected" ? "selected" : ""}>Rejected</option>
</select>


  <label>Allotted Course</label>
  <input type="text" id="allotted-${index}" placeholder="Enter course" value="${req.allottedCourse || ""}" />

  <button onclick="updateStatus(${index})" class="btn">Save</button>
  <button onclick="deleteEntry(${index})" class="btn delete-btn">Delete</button>
`;


    requestList.appendChild(card);

    

  });
  
});

function deleteEntry(index) {
  let counsellingData =
    JSON.parse(localStorage.getItem("counsellingData")) || [];

  counsellingData.splice(index, 1);

  localStorage.setItem(
    "counsellingData",
    JSON.stringify(counsellingData)
  );

  location.reload();
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

function updateStatus(index) {
  const counsellingData =
    JSON.parse(localStorage.getItem("counsellingData")) || [];

  counsellingData[index].status =
    document.getElementById(`status-${index}`).value;

  counsellingData[index].allottedCourse =
    document.getElementById(`allotted-${index}`).value;

  localStorage.setItem(
    "counsellingData",
    JSON.stringify(counsellingData)
  );

  alert("Seat status updated");
  location.reload();
}



// const requestList = document.getElementById("requestList");
// document.addEventListener("DOMContentLoaded", function () {



// // Get counselling data from localStorage
// const requests = JSON.parse(localStorage.getItem("counsellingData")) || [];

// if (requests.length === 0) {
//   requestList.innerHTML = "<p>No counselling requests yet.</p>";
// } else {
//   requests.forEach((req, index) => {
//     const card = document.createElement("div");
//     card.className = "feature-card";

//     card.innerHTML = `
//       <h3>Student ${index + 1}</h3>
//       <p><strong>Name:</strong> ${req.name}</p>
//       <p><strong>Email:</strong> ${req.email}</p>
//       <p><strong>Phone:</strong> ${req.phone}</p>
//       <p><strong>Course Preference:</strong> ${req.course}</p>
//       <p><strong>Message:</strong> ${req.message}</p>
//     `;

//     requestList.appendChild(card);
//   });
// }

// });

// function deleteEntry(index) {
//   let counsellingData =

//     JSON.parse(localStorage.getItem("counsellingData")) || [];

//  counsellingData.splice(index, 1);

//     localStorage.setItem("counsellingData", JSON.stringify(counsellingData));

//   location.reload();
// }

