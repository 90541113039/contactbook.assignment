<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
}
nav {
  display: flex;
  gap: 20px;
  background-color: #333;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
