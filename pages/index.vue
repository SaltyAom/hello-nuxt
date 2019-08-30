<template>
    <div id="landing">
        <h1 id="title">Hello Nuxt</h1>
        <p id="counter">
            {{ counter }}
            <span id="counter-text">Count</span>
        </p>
        <div id="control-panel">
            <button @click="increase" class="control">Increase</button>
            <button @click="decrease" class="control">Decrease</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
            'counter'
        ]),
        methods: {
            increase(state){
                this.$store.commit("increase")
            },
            decrease(state){
                this.$store.commit("decrease")
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
    * {
        font-family: "Segoe UI", Helvetica, Arial, 'sans serif';
    }
    ::selection, ::-webkit-selection {
        background-color: rgba(65,184,131,.425);
    }
    #title {
        font-size: 24px;
        color: #757575;
        font-weight: lighter;
        margin: 0;
        cursor: default;
    }
    #counter {
        font-size: 84px;
        color: #41b883;
        font-weight: lighter;
        text-align: center;
        margin: 30px 0 10px 0;
        cursor: default;
    }
    #counter-text {
        display: block;
        font-size: 28px;
        color: #41b883;
        font-weight: lighter;
            text-align: center;
        margin: 10px 0 30px 0;
        cursor: default;
    }
    #landing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }
    #control-panel {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .control {
        appearance: none;
        -webkit-appearance: none;
        background-color: transparent;
        border: 0;
        font-size: 21px;
        color: #000;
        padding: 8px 28px;
        margin: 0 10px;
        border-radius: 4px;
        transition: color .2s ease-out, background-color .2s ease-out, box-shadow .2s ease-out;
        outline: none;
        cursor: pointer;
    }
    .control:hover,
    .control:focus {
        color: #fff;
        background-color: rgba(65, 184, 131);
        box-shadow: 0 3px 7px rgba(65,184,131,.425),
                    0 7px 35px rgba(65,184,131,.325);
    }
</style>