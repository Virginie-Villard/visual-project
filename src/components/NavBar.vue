<template>
    <div id="navbar">
        <a href="home">Home</a>
        <a href="shows">Shows</a>
        <a href="aboutUs">About us</a>
        <a href="contactUs">Contact us</a>
        <a href="search">
            <img src="../assets/search.png">
        </a>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

#navbar {
    position: fixed;
    width: calc(100vw - 180px);
    top: 0px;
    left: 180px;
    display: flex;
    gap: 45px;
    margin-top: 34px;
    justify-content: flex-end;
}

a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}

a>img {
    width: 24px;
    height: 24px;
    margin-right: 34px;
}

</style>