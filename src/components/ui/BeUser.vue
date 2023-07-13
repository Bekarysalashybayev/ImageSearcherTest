<template>
    <div class="user">
        <img src="@/assets/img/user.png" alt="user picture" />
        <div class="user-data">
            <div class="name">Vincent van Gogh</div>
            <div class="mail">@vincentvangogh</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.user {
    font-size: 1.5rem;
    color: #f2f2f2;
    display: flex;

    img {
        width: 55px;
        height: 55px;
        border-radius: 8px;
        border: 1px solid #ffffff;
    }

    &-data {
        margin-left: 10px;

        .name {
            font-size: 2rem;
            margin-bottom: 5px;
        }

        @media screen and (max-width: 500px) {
            .name {
                color: #000000;
            }
            .mail {
                color: #bdbdbd;
            }
        }
    }
}
</style>
