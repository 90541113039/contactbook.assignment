<template>
  <div>
    <h2>{{ contact.id ? 'Edit Contact' : 'Add Contact' }}</h2>
    <form @submit.prevent="saveContact">
      <label>First Name:</label>
      <input v-model="localContact.firstName" required />

      <label>Last Name:</label>
      <input v-model="localContact.lastName" required />

      <label>Email:</label>
      <input v-model="localContact.email" type="email" required />

      <button type="submit">Save</button>
      <button type="button" @click="$emit('cancel')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['contact'],
  data() {
    return {
      localContact: { ...this.contact },
    };
  },
  methods: {
    saveContact() {
      this.$emit('save', { ...this.localContact });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
label {
  margin: 5px 0;
}
button {
  margin-top: 10px;
}
</style>
