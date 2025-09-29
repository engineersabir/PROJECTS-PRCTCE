// ===== Select elements =====
const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const contactEmailInput = document.getElementById('contactEmail');
const addContactBtn = document.getElementById('addContactBtn');
const contactList = document.getElementById('contactList');

let contacts = []; // Array to store contacts

// ===== Render contacts to the screen =====
function renderContacts() {
    // Clear the list before rendering
    contactList.innerHTML = '';

    // Loop through contacts array
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');

        // Create a list item with contact details and delete button
        listItem.innerHTML = `
            <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
            <button data-index="${index}">Delete</button>
        `;

        contactList.appendChild(listItem);
    });
}

// ===== Add a new contact =====
function addContact() {
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();
    const email = contactEmailInput.value.trim();

    // Validate input fields
    if (name && phone && email) {
        const newContact = { name, phone, email };

        contacts.push(newContact); // Add to array
        renderContacts(); // Update UI

        // Clear input fields
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        contactEmailInput.value = '';
    } else {
        alert('Please fill in all fields (Name, Phone, Email).');
    }
}

// ===== Delete a contact =====
function deleteContact(event) {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Delete') {
        const indexToDelete = parseInt(event.target.dataset.index);
        contacts.splice(indexToDelete, 1); // Remove contact
        renderContacts(); // Refresh UI
    }
}

// ===== Event listeners =====
addContactBtn.addEventListener('click', addContact);
contactList.addEventListener('click', deleteContact);

// ===== Initial render =====
renderContacts();
