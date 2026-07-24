const greeting = document.getElementById('greeting');
const firstName = localStorage.getItem('userFirstName');
greeting.textContent = 'Hello, ' + firstName + '!';
 
const addMedBtn = document.getElementById('add-med-btn');
const addMedForm = document.getElementById('add-med-form');
const medList = document.getElementById('med-list');
const emptyState = document.getElementById('empty-state');
const logoutBtn = document.getElementById('logout-btn');
 
const medName = document.getElementById('med-name');
const medDose = document.getElementById('med-dose');
const medTime = document.getElementById('med-time');
const medFrequency = document.getElementById('med-frequency');
 
let editingIndex = null;
 
addMedBtn.addEventListener('click', function () {
  editingIndex = null;
  addMedForm.reset();
  addMedForm.classList.toggle('hidden');
});
 
logoutBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});
 
function getMedications() {
  const stored = localStorage.getItem('medications');
  if (stored) {
    return JSON.parse(stored);
  } else {
    return [];
  }
}
 
function renderMedications() {
  const medications = getMedications();
 
  medList.innerHTML = '';
 
  if (medications.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
 
    medications.forEach(function (med, index) {
      const item = document.createElement('div');
      item.className = 'med-item';
 
      const takenCheckbox = document.createElement('input');
      takenCheckbox.type = 'checkbox';
      takenCheckbox.className = 'taken-checkbox';
      takenCheckbox.checked = med.taken === true;
      takenCheckbox.addEventListener('change', function () {
        toggleTaken(index);
      });
 
      const text = document.createElement('span');
      text.textContent = med.name + ' - ' + med.dose + ' - ' + med.time + ' - ' + med.frequency;
 
      if (med.taken) {
        text.classList.add('taken-text');
      }
 
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';
      editBtn.addEventListener('click', function () {
        startEditing(index);
      });
 
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', function () {
        removeMedication(index);
      });
 
      item.appendChild(takenCheckbox);
      item.appendChild(text);
      item.appendChild(editBtn);
      item.appendChild(removeBtn);
      medList.appendChild(item);
    });
  }
}
 
function removeMedication(index) {
  const medications = getMedications();
  medications.splice(index, 1);
  localStorage.setItem('medications', JSON.stringify(medications));
 
  if (editingIndex === index) {
    editingIndex = null;
    addMedForm.reset();
    addMedForm.classList.add('hidden');
  }
 
  renderMedications();
}
 
function toggleTaken(index) {
  const medications = getMedications();
  medications[index].taken = !medications[index].taken;
  localStorage.setItem('medications', JSON.stringify(medications));
  renderMedications();
}
 
function startEditing(index) {
  const medications = getMedications();
  const med = medications[index];
 
  medName.value = med.name;
  medDose.value = med.dose;
  medTime.value = med.time;
  medFrequency.value = med.frequency;
 
  editingIndex = index;
  addMedForm.classList.remove('hidden');
}
 
addMedForm.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const medData = {
    name: medName.value,
    dose: medDose.value,
    time: medTime.value,
    frequency: medFrequency.value
  };
 
  const medications = getMedications();
 
  if (editingIndex === null) {
    medications.push(medData);
  } else {
    medications[editingIndex] = medData;
  }
 
  localStorage.setItem('medications', JSON.stringify(medications));
 
  addMedForm.reset();
  addMedForm.classList.add('hidden');
  editingIndex = null;
  renderMedications();
});
 
renderMedications();
