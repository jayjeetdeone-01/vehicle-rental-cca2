// Exact data from vehicles.txt - runs standalone like terminal
let vehicles = [
  {id:1, type:'CAR', brand:'Toyota', model:'Fortuner', rent_per_day:3000, is_available:true, extra_info:7},
  {id:2, type:'CAR', brand:'Honda', model:'City', rent_per_day:2200, is_available:true, extra_info:5},
  {id:3, type:'CAR', brand:'Hyundai', model:'Creta', rent_per_day:2500, is_available:true, extra_info:5},
  {id:4, type:'CAR', brand:'Mahindra', model:'Thar', rent_per_day:3500, is_available:true, extra_info:4},
  {id:5, type:'CAR', brand:'Tata', model:'Nexon', rent_per_day:2000, is_available:true, extra_info:5},
  {id:6, type:'BIKE', brand:'Yamaha', model:'R15', rent_per_day:800, is_available:true, extra_info:155},
  {id:7, type:'BIKE', brand:'KTM', model:'Duke390', rent_per_day:1200, is_available:true, extra_info:373},
  {id:8, type:'BIKE', brand:'RoyalEnfield', model:'Classic350', rent_per_day:1000, is_available:true, extra_info:349},
  {id:9, type:'BIKE', brand:'Bajaj', model:'Pulsar220', rent_per_day:700, is_available:true, extra_info:220},
  {id:10, type:'BIKE', brand:'TVS', model:'ApacheRTR', rent_per_day:750, is_available:true, extra_info:160}
];

let nextId = 11;

function renderTable(containerId, vehList) {
  const tbody = document.getElementById(containerId);
  tbody.innerHTML = '';
  vehList.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${v.id}</td>
      <td>${v.type}</td>
      <td>${v.brand}</td>
      <td>${v.model}</td>
      <td>$${v.rent_per_day}</td>
      <td>${v.is_available ? 'Available' : 'Rented'}</td>
      <td>${v.extra_info}</td>
      <td>
        <button onclick="toggleRent(${v.id})" class="${v.is_available ? 'rent-btn' : 'return-btn'}">
          ${v.is_available ? 'Rent' : 'Return'}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function showTab(tab) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
  
  event.target.classList.add('active');
  
  let vehList;
  if (tab === 'available') {
    document.getElementById('available-tab').style.display = 'block';
    vehList = vehicles.filter(v => v.is_available);
    renderTable('tableBody', vehList);
  } else if (tab === 'rented') {
    document.getElementById('rented-tab').style.display = 'block';
    vehList = vehicles.filter(v => !v.is_available);
    renderTable('rentedBody', vehList);
  } else {
    document.getElementById('all-tab').style.display = 'block';
    vehList = vehicles;
    renderTable('allBody', vehList);
  }
}

function toggleRent(id) {
  const v = vehicles.find(v => v.id === id);
  if (v) {
    v.is_available = !v.is_available;
    showTab(document.querySelector('.tab-button.active').textContent.toLowerCase().includes('available') ? 'available' : 'all');
  }
}

function addVehicle() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const type = document.getElementById('type').value;
  const rent = parseFloat(document.getElementById('rent').value);
  const extra = parseInt(document.getElementById('extra').value);
  
  if (brand && model && !isNaN(rent) && !isNaN(extra)) {
    vehicles.push({
      id: nextId++,
      type, brand, model, rent_per_day: rent, is_available: true, extra_info: extra
    });
    document.getElementById('addForm').reset();
    showTab('available'); // Refresh available
    alert('Vehicle added!');
  } else {
    alert('Fill all fields');
  }
}

// Init - show available
showTab('available');

