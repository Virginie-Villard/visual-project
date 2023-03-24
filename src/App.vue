<script setup>
import SideBar from "./components/navigation/SideBar.vue";
import NavBar from "./components/navigation/NavBar.vue";
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
