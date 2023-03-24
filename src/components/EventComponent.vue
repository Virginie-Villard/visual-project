<template>
<div class="event">

    <div class="inner-event">
        <h2>
            Events
        </h2>

        <div class="inner-event-content">
            <div>
                <p>
                    Pop - up @ Mainland Bloc Party
                </p>

                <p>
                    SF - Sat, August 12 / 3-5PM
                </p>
            </div>

            <div>
                <p>
                    Pop - up @ Mainland Bloc Party
                </p>

                <p>
                    SF - Sat, August 12 / 3-5PM
                </p>
            </div>

        </div>
    </div>

    <img class="inner-event event-image" src="../assets/images/cooking-family.png" alt="Cooking family">

    <div class="inner-event">

        <h2>
            News
        </h2>

        <p class="wrap">
            Cool kids cook: A cooking show presented by Ashionye Michelle Raccah, each episode ...
        </p>

        <p>
            Read More
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: "EventComponent"
}
</script>

<style scoped>

.event {
    display: flex;
    flex-direction: row;
    position: fixed;
    width: calc(100vw - 180px);
    height: 208px;
    left: 180px;
    top: calc(100vh - 208px);
    z-index: 1000;

    background: linear-gradient(116deg, rgba(33, 33, 33, 0.7) 1.54%, rgba(24, 24, 24, 0.7) 1.54%, rgba(36, 36, 36, 0.7) 1.54%);
    backdrop-filter: blur(10px);
}

.inner-event {
    padding-left: 60px;
}

.inner-event:nth-child(1), .inner-event:nth-child(3) {
    margin-top: 20px;
}

.inner-event-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.inner-event-content > div {
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: auto;
}

.inner-event-content > div > p:nth-child(1) {
    font-weight: normal;
}

.inner-event-content > div > p:nth-child(2) {
    font-weight: bold;
}

.wrap {
    width: 350px;
}

.event-image {
    height: 100%;
}

</style>