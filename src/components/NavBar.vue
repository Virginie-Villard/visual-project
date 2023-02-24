<template>
    <ul id="navbar">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shows">Shows</router-link></li>
        <li><router-link to="/about">About us</router-link></li>
        <li><router-link to="/contact">Contact us</router-link></li>
        <li id="searchIcone">
<!--            <router-link to="/search">-->
            <img src="../assets/search.png">
<!--        </router-link>-->
        </li>

    </ul>
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
    list-style: none;
}

#navbar > li > a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}

#navbar > li > img {
    width: 24px;
    height: 24px;
    margin-right: 34px;
}

#searchIcone {
    margin-right: 30px;
}

</style>