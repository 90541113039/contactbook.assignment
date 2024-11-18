<template>
    <div>
      <h1>Contacts</h1>
      <contact-list :contacts="contacts" @delete="deleteContact" />
      <button @click="addNewContact">Add Contact</button>
      <add-edit-contact
        v-if="editingContact"
        :contact="editingContact"
        @save="saveContact"
        @cancel="cancelEdit"
      />
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue';
  import AddEditContact from '../components/AddEditContact.vue';
  
  export default {
    components: { ContactList, AddEditContact },
    data() {
      return {
        contacts: JSON.parse(localStorage.getItem('contacts')) || [],
        editingContact: null,
      };
    },
    methods: {
      saveContact(contact) {
        if (contact.id) {
          const index = this.contacts.findIndex((c) => c.id === contact.id);
          this.contacts.splice(index, 1, contact);
        } else {
          contact.id = Date.now();
          this.contacts.push(contact);
        }
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        this.editingContact = null;
      },
      deleteContact(contactId) {
        this.contacts = this.contacts.filter((c) => c.id !== contactId);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
      addNewContact() {
        this.editingContact = {};
      },
      cancelEdit() {
        this.editingContact = null;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  