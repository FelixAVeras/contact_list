<template>
    <div>
      <h1>Add New Contact</h1>
      <form @submit.prevent="saveContact">
        <label>Name:</label>
        <input v-model="name" class="form-control" required>
        <label>Phone:</label>
        <input v-model="phone" class="form-control" required>
        <label>Address:</label>
        <input v-model="address" class="form-control">
        <label>Email:</label>
        <input v-model="email" class="form-control">
        <button type="submit" class="mt-2 btn btn-success">Save Changes</button>
      </form>
      <button @click="goBack" class="mt-4 btn btn-light">Go Back</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        phone: '',
        address: '',
        email: '',
      };
    },
    methods: {
      saveContact() {
        const newContact = {
          name: this.name,
          phone: this.phone,
          address: this.address,
          email: this.email,
        };
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        this.$router.push({ name: "home" });
      },
      goBack() {
        this.$router.push({ name: "home" });
      },
    },
  };
  </script>
  