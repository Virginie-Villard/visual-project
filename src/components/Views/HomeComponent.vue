<template>
    <div class="content">

        <div id="subHomePage">
            <div class="subPageNumber">/ 01</div>

            <div id="scrolling">
                <div id="scrollingYellow"></div>
                <div id="scrollingWhite"></div>
            </div>

            <ul>
                <li id="inspire" @click="inspireMethod">Inspire</li>
                <li id="magicalMovies">Magical Short Movies</li>
                <li id="africanimations">Africanimations</li>
            </ul>
        </div>

        <div class="pageContent">
            <h1>Enjoy<br>Anywhere</h1>

            <p>
                Cool kids cook: A cooking show presented by Ashionye Michelle Raccah, each episode ...
            </p>
        </div>

        <img src="../../assets/images/child-with-a-backpack.png" alt="child with a backpack and a yellow coat">

        <event-component></event-component>
    </div>
</template>

<script>
import EventComponent from "../components/EventComponent.vue";

export default {
    name: "HomeComponent",

    components: {
        EventComponent
    },

    data: function() {
        return {
            informations: {
                firstHomePage: {
                    number: "01",
                    title: "Enjoy Anywhere",
                    paragraph: "Cool kids cook: A cooking show presented by Ashionye Michelle Raccah, each episode ... ",
                    scrollingYellow: "1/3",
                    scrollingWhite: "2/3",
                    imgSrc: "../../assets/images/child-with-a-backpack.png",
                    imgAlt: "child with a backpack and a yellow coat",
                    active: "Inspire"
                },

                secondHomePage: {
                    number: "02",
                    title: "Tales by Moonlight",
                    paragraph: "This show is designed to stir the thought process and inspire the creative imagination of the children.",
                    scrollingYellow: "2/3",
                    scrollingWhite: "1/3",
                    imgSrc: "../../assets/images/father-with-child.png",
                    imgAlt: "father with child",
                    active: "magicalMovies"
                },

                thirdHomePage: {
                    number: "03",
                    title: "Naija anime in your pockets",
                    paragraph: "Animated stories about kids and their relationships. Showing how bonds are created.",
                    scrollingYellow: "100%",
                    scrollingWhite: 0,
                    imgSrc: "../../assets/images/smilingChild.png",
                    imgAlt: "smiling child",
                    active: "africanimation"
                }
            }
        }
},

    methods: {
        inspireMethod() {

        }
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

#subHomePage > ul {
    list-style: none;
    font-weight: normal;
    margin-left: 30px;
    margin-top: 30px;
}

#subHomePage > ul > li {
    margin-top: 10px;
}

#scrolling {
    margin-top: 30px;
    margin-left: 70px;
    height: 4px;
    width: 244px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#scrolling > .first:first-child {
    background-color: #FFAA00;
    width: 30%;
    height: 3px;
}

#scrolling > .first:nth-child(2) {
    background-color: white;
    width: 70%;
    height: 4px;
}

.subPageNumber {
    margin-top: 180px;
    margin-left: 70px;
}

</style>