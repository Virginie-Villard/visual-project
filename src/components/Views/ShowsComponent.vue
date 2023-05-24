<template>
    <div class="content">
        <h1>Shows</h1>

        <div class="list">
            <div class="card" v-for="card in cards">

                <div>

                    <img :src="card.image" :alt="card.title">


                    <h2>{{ card.title }}</h2>

                    <div class="paragraph">
                        <p>{{ card.description }}</p>

                        <p>
                            <span v-if="card.likes === 0"><img class="likes" src="public/icons/greyLikes.png" alt="greyLike "></span>
                            <span v-if="card.likes > 0"><img class="likes" src="public/icons/redLikes.png" alt="redLike "></span>
                            {{ card.likes }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ShowsComponent",

    data() {
        return {
            cards: [
                {
                    image: "images/cards/image01.jfif",
                    title: "Head of State",
                    description: "A history show...",
                    likes: 92,
                    routerLink: ""
                },
                {
                    image: "images/cards/image02.jfif",
                    title: "Magical Movie Shorts",
                    description: "Short, 'live action'...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image03.jfif",
                    title: "Roli Tales",
                    description: "Join Astronaut Roli...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image04.jfif",
                    title: "The Story Book",
                    description: "This show is designed...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image05.png",
                    title: "African Animated tales",
                    description: "A history show...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image06.jfif",
                    title: "Story Zoo",
                    description: "Join Toby, Baxy and Pepper...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image07.png",
                    title: "Stereo",
                    description: "A show anchored by Kamsi...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image08.jfif",
                    title: "Inspire",
                    description: "We discuss with individuals...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image09.png",
                    title: "Playground",
                    description: "A show designed specifically...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image10.jfif",
                    title: "When I Grow Up",
                    description: "Join Fatima as she...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image11.png",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image12.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image13.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image14.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                },
                {
                    image: "images/cards/image15.jfif",
                    title: "Blabla",
                    description: "Super Description...",
                    likes: 0,
                    routerLink: ""
                }
            ]
        }
    }
}
</script>

<style scoped>

.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 30px;
}

.card {
    background-color: #181818;
    width: 90%; /* Redimensionnement à 90% de la largeur de la carte */
    height: 500px; /* Hauteur fixe de la carte */
    place-self: center;
    justify-self: stretch;
    border-radius: 20px;
    padding: 20px;
    overflow: hidden; /* Cacher le contenu qui dépasse */
}

.card img {
    width: 100%;
    height: 300px; /* Hauteur fixe pour toutes les images */
    display: block;
    border-radius: 20px;
    object-fit: cover;
}

.paragraph {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

img.likes {
    width: 16px;
    height: 16px;
}

</style>