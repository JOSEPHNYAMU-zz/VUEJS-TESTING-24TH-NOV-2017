<template>
    <div>
<input type="text" class="new" v-model="newNotifications"/>
        <button @click="addNew">ADD NEW</button>
        <ul v-if="notifications.length">
            <li v-for="notification in notifications" v-text="Notifications" :key="notification"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                newNotifications: '',
                notifications: []
            };
        },
        methods: {
            addNew () {
                this.notifications.push(this.newNotifications);
                this.newNotifications= '';
            }
        }
    }
</script>