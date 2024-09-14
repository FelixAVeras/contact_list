<template>
    <div>
        <h2>My Contacts</h2>
        
        <div class="row mb-3">
            <div class="col-12 col-md-12">
                <button class="btn btn-primary float-end" @click="addContact">Add Contact</button>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-hover table-borderless">
                <thead class="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in contacts" :key="index">
                        <td>{{ contact.name }}</td>
                        <td>{{ contact.address }}</td>
                        <td>{{ contact.phone }}</td>
                        <td>{{ contact.email }}</td>
                        <td>
                            <button class="btn btn-info"  @click="viewDetails(index)">Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { contacts: [] };
    },
    created() {
        this.loadContactLists();
    },
    methods: {
        loadContactLists() {
            const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

            this.contacts = contacts;
        },
        viewDetails(index) {
            this.$router.push({ name: 'details', params: {index} });
        },
        addContact() {
            this.$router.push({ name: 'add' });
        }
    }
};
</script>