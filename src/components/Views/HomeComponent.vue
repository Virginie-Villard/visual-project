<template>
    <div class="content">
        <h1>Enjoy<br>Anywhere</h1>

        <img src="../../assets/images/child-with-a-backpack.png" alt="child with a backpack and a yellow coat">

        <event-component></event-component>
    </div>
</template>

<script>
import EventComponent from "../EventComponent.vue";

export default {
    name: "HomeComponent",

    components: {
        EventComponent
    }
}
</script>

<style scoped>

img {
    position: absolute;
    width: 494px;
    height: 928px;
    left: 518px;
    top: 71px;
    z-index: 1;
}

</style>