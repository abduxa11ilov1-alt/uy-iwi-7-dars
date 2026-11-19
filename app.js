const customersData = [
  { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
  { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
  { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
  { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
  { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
  { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
  { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
  { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" }
];

const tableBody = document.getElementById("customerTableBody");
const tableSearch = document.getElementById("tableSearch");
const sortSelect = document.getElementById("sortSelect");
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");

// Jadvalni chizish funksiyasi
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(customer => {
    const statusClass = customer.status === "Active" ? "status-active" : "status-inactive";
    const row = `
      <tr>
        <td>${customer.name}</td>
        <td>${customer.company}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.country}</td>
        <td><span class="status-badge ${statusClass}">${customer.status}</span></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Qidiruv funksiyasi
tableSearch.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = customersData.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.company.toLowerCase().includes(term) ||
    item.email.toLowerCase().includes(term) ||
    item.country.toLowerCase().includes(term)
  );
  renderTable(filtered);
});

// Saralash funksiyasi
sortSelect.addEventListener("change", (e) => {
  let sorted = [...customersData];
  if (e.target.value === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (e.target.value === "status") {
    sorted.sort((a, b) => a.status.localeCompare(b.status));
  }
  renderTable(sorted);
});

// Rasmdagi chap tarafdagi yig'iluvchi (minimize) menyu effekti
toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Sahifalash tugmalari aktiv holati
document.querySelectorAll(".page-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    if (this.textContent === "<" || this.textContent === ">") return;
    document.querySelectorAll(".page-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Dastlabki ma'lumotlarni yuklash
renderTable(customersData);