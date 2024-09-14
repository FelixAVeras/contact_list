<template>
    <div v-if="contact">
      <h1>Details about: {{ contact.name }}</h1>
      <p>Phone: {{ contact.phone }}</p>
      <p>Address: {{ contact.address }}</p>
      <p>Email: {{ contact.email }}</p>
      <button @click="goBack" class="mt-4 btn btn-light">Go Back</button>
    </div>
</template>

<script>
export default {
    data() {
        return { contact: null };
    },
    created() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        this.contact = contacts[this.$route.params.index];
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'home' });
        }
    }
};
</script>