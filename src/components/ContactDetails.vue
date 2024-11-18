<template>
  <div>
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="`/contacts/edit/${contact.id}`">
      <button>Edit</button>
    </router-link>
    <button @click="deleteContact">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      contact: {},
    };
  },
  created() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.contact = contacts.find((c) => c.id === parseInt(this.id));
  },
  methods: {
    deleteContact() {
      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const updatedContacts = contacts.filter((c) => c.id !== this.contact.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      this.$router.push("/");
    },
  },
};
</script>
