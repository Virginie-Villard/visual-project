<template>
    <div class="content">
        <h1>Shows</h1>

        <div class="list">
            <div class="card" v-for="card in cards">
                <!--            :key="cards.indexOf(card)"-->

                <div>
<!--                    <img :src="getImg(card.image)" :alt="card.title">-->
<!--                    <img :src="getImg" alt="toto">-->
                    <img src="https://s3-alpha-sig.figma.com/img/e1cb/0093/386bf7ea2f976185c901b44a3a86fcc1?Expires=1685923200&Signature=GuXEZNk4cRer130wbL20iFUrcO436I64dnCtaxrp-tC9AZkSpL-xFKcdhxvwi4c6EtoSJpDn9w0TLpuH7bGSdejRU9g8icC3l-nejsS5txm~anuL-8bvMCLEwIm95wIf2JCIwisbJkMypbJ02vJ1xpEM8hbwLKnH88SA~~YRCIrFl3MId4SW0RJB5XEbZSFrcEYac5dZ73EaNE7T7fENOIktBUI2Zr5BERL~n6m1-HvCm0h7RWAt8BAfq5hG2lPNz-VZrWmiiwp4Ha3eTUzJNGepOJl0kEdokRA7jOA7D1m76zWW30bD7DjA01TYKQVte4o5KutiiIlEZWLi3dw5Qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Si même ça ça marche pas, fuck !!!">

                    <h2>{{ card.title }}</h2>

                    <div>
                        <p>{{ card.description }}</p>

                        <p>
<!--                            <span v-if="card.likes === 0"><img src="require(@/assets/icons/greyLikes.png)" alt="greyLike "></span><img src="" alt="">-->
<!--                            <span v-if="card.likes > 0"><img src="require(@/assets/icons/redLikes.png)" alt="redLike "></span><img src="" alt="">-->
                            {{ card.likes }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import image01 from "@/assets/images/cards/image01.jfif";


export default {
    name: "ShowsComponent",

    data() {
        return {
            cards: [
                {
                    image: "image01.jfif",
                    title: "Head of State",
                    description: "A history show...",
                    likes: 92,
                    routerLink: ""
                },
                {
                    image: "image02.jfif",
                    title: "Magical Movie Shorts",
                    description: "Short, 'live action'...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image03.jfif",
                    title: "Roli Tales",
                    description: "Join Astronaut Roli...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image04.jfif",
                    title: "The Story Book",
                    description: "This show is designed...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image05.png",
                    title: "African Animated tales",
                    description: "A history show...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image06.jfif",
                    title: "Story Zoo",
                    description: "Join Toby, Baxy and Pepper...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image07.png",
                    title: "Stereo",
                    description: "A show anchored by Kamsi...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image08.jfif",
                    title: "Inspire",
                    description: "We discuss with individuals...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image09.png",
                    title: "Playground",
                    description: "A show designed specifically...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image10.jfif",
                    title: "When I Grow Up",
                    description: "Join Fatima as she...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image11.png",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image12.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image13.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image14.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "image15.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                }
            ]
        }
    },

    methods: {
        // getImg(img) {
        //     // return require(`@/assets/images/cards/${img}`);
        // }

        getImg() {
            return require("@/assets/images/cards/image01.jfif");
        }
    }
}
</script>

<style scoped>

.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;
}

.card {
    background-color: #181818;
    min-width: 250px;
    height: 500px;
    place-self: center;
    justify-self: stretch;
    border-radius: 20px;
    padding: 20px;
}

.card img {
    width: auto;
    height: 230px;
    overflow-x: hidden;
    border-radius: 20px;
}

</style>