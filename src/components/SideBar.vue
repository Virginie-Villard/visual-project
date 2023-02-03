<template>
    <div id="sidebar">
        <div id="logo">
            <img src="https://www.ubongo.org/wp-content/uploads/Pineapple-Logo-transparent-BG.png" alt="Pineapple-TV-Logo">
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style scoped>

#sidebar {
    position: fixed;
    width: 180px;
    height: 100vh;
    top: 0px;
    left: 0px;
}

#logo>img {
    width: 140px;
    padding-top: 16px;
}

</style>


<!--display: flex;-->
<!--flex-direction: column;-->
<!--justify-content: center;-->
<!--align-items: center;-->
<!--padding: 0px;-->
<!--gap: 50px;-->

<!--position: absolute;-->
<!--width: 30px;-->
<!--height: 430px;-->
<!--left: 72px;-->
<!--top: 437px;-->