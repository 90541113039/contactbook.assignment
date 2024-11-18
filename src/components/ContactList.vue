<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      {{ contact.firstName }} {{ contact.lastName }}
      <button @click="$emit('delete', contact.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['contacts'],
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 10px 0;
}
button {
  margin-left: 10px;
  padding: 5px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: darkred;
}
</style>
