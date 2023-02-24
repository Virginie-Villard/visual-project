<script setup>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <div>
        <SideBar></SideBar>
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
