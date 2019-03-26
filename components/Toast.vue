<template>
    <transition name="fade">
        <div class="toast-mask" v-if="show">
            <p class="toast-content" v-html="content"></p>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.toast-mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    .toast-content {
        width: 52px;
        background-color: rgba(141,141,141,.8);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 24px 36px;
        color: #FFF;
        font-size: 16px;
        text-align: center;
    }
}
</style>
