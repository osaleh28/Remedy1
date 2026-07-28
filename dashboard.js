// ===== Greeting =====
// Grabs the logged-in user's first name from localStorage (set during login)
// and displays a personalized greeting on the dashboard.
const greeting = document.getElementById('greeting');
const firstName = localStorage.getItem('userFirstName');
greeting.textContent = 'Hello, ' + firstName + '!';

// ===== Element references =====
const addMedBtn = document.getElementById('add-med-btn');
const addMedForm = document.getElementById('add-med-form');
const medList = document.getElementById('med-list');
const emptyState = document.getElementById('empty-state');
const logoutBtn = document.getElementById('logout-btn');

const medName = document.getElementById('med-name');
const medDose = document.getElementById('med-dose');
const medTime = document.getElementById('med-time');
const medFrequency = document.getElementById('med-frequency');

// Tracks which medication (by index) is currently being edited.
// null = we're adding a new medication, not editing an existing one.
let editingIndex = null;

// ===== Add Medication button =====
// Resets the form (clearing any leftover edit data) and shows/hides it.
addMedBtn.addEventListener('click', function () {
  editingIndex = null;
  addMedForm.reset();
  addMedForm.classList.toggle('hidden');
});

// ===== Logout =====
// Sends the user back to the login/landing page.
logoutBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});

// ===== Data access =====
// Reads the saved medications array out of localStorage.
// Returns an empty array if nothing has been saved yet.
function getMedications() {
  const stored = localStorage.getItem('medications');
  if (stored) {
    return JSON.parse(stored);
  } else {
    return [];
  }
}

// ===== Rendering =====
// Rebuilds the entire medication list in the DOM based on what's in localStorage.
// Called any time the data changes (add, edit, remove, toggle taken).
function renderMedications() {
  const medications = getMedications();

   // Clear out the old list before re-rendering
  medList.innerHTML = '';

   // No medications saved — show the "empty" message instead of the list
  if (medications.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');

    
    medications.forEach(function (med, index) {
      const item = document.createElement('div');
      item.className = 'med-item';

      const takenWrapper = document.createElement('div');
      takenWrapper.className = 'taken-wrapper';

      // "Did you take it?" checkbox + label
      const takenLabel = document.createElement('span');
      takenLabel.textContent = 'Did you take your medication?';
      takenLabel.className = 'taken-label';

      const takenCheckbox = document.createElement('input');
      takenCheckbox.type = 'checkbox';
      takenCheckbox.className = 'taken-checkbox';
      takenCheckbox.checked = med.taken === true;
      takenCheckbox.addEventListener('change', function () {
        toggleTaken(index);
      });

      takenWrapper.appendChild(takenLabel);
      takenWrapper.appendChild(takenCheckbox);

      // Text summary of the medication: name, dose, time, frequency
      const text = document.createElement('span');
      text.textContent = med.name + ' - ' + med.dose + ' - ' + med.time + ' - ' + med.frequency;

      // Visually mark the text as "taken" if applicable 
      if (med.taken) {
        text.classList.add('taken-text');
      }

      // Edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';
      editBtn.addEventListener('click', function () {
        startEditing(index);
      });

      // Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', function () {
        removeMedication(index);
      });

      item.appendChild(takenWrapper);
      item.appendChild(text);
      item.appendChild(editBtn);
      item.appendChild(removeBtn);
      medList.appendChild(item);
    });
  }
}

// ===== Remove =====
// Deletes a medication by index, saves the updated list, and re-renders.
// If the medication being removed was mid-edit, cancels that edit too.
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

// ===== Taken toggle =====
// Flips the "taken" status for a medication and saves it.
function toggleTaken(index) {
  const medications = getMedications();
  medications[index].taken = !medications[index].taken;
  localStorage.setItem('medications', JSON.stringify(medications));
  renderMedications();
}

// ===== Edit =====
// Pre-fills the form with an existing medication's data and opens it,
// so the user can update and re-save it.
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

// ===== Form submit (add or save edit) =====
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
