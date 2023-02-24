<template>
    <div id="sidebar">
        <div id="logo">
            <img src="https://www.ubongo.org/wp-content/uploads/Pineapple-Logo-transparent-BG.png" alt="Pineapple-TV-Logo">
        </div>

        <div id="socials">
            <a href="#">
                <img src="../assets/socials/twitter.png" alt="Twitter">
            </a>

            <a href="#">
                <img src="../assets/socials/whatsapp.png" alt="WhatsApp">
            </a>

            <a href="#">
                <img src="../assets/socials/youtube.png" alt="Youtube">
            </a>

            <a href="#">
                <img src="../assets/socials/facebook.png" alt="Facebook">
            </a>

            <a href="#">
                <img src="../assets/socials/linkedin.png" alt="LinkedIn">
            </a>

            <a href="#">
                <img src="../assets/socials/twitter2.png" alt="Twitter">
            </a>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

#logo>img {
    width: 140px;
    padding-top: 16px;
}

#socials {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-bottom: 50px;
}

#socials>a {

}

#socials>a>img {
    width: 30px;
    height: 30px;
}

</style>