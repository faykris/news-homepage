<template>
    <div class='footer'>
        <div class="attribution">
            <div class='challenge'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            </div>
            <div class='coded'>
                Coded by <a href="https://www.github.com/faykris">Cristian Pinzón</a>.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterSection"
}
</script>

<style lang="scss" scoped>
    .footer {
        height: 10rem;
        width: 100%;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
    }

    .attribution {
        text-align: center;
    }

    .attribution .challenge, .attribution .coded{
        margin: 1rem;
    }

    .attribution .challenge a {
        text-decoration: none;
        color: aqua;
    }

    .attribution .coded a {
        text-decoration: none;
        color: yellow;
    }
</style>