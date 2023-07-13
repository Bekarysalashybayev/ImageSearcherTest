<template>
    <header>
        <div class="container">
            <nav>
                <router-link to="/" class="logo">
                    <be-logo />
                </router-link>
                <router-link to="/follow" class="follow">
                    <follow-icon />
                    <span> Избранное</span>
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BeLogo from '../icons/BeLogo.vue'
import FollowIcon from '../icons/FollowIcon.vue'
</script>

<style scoped lang="scss">
header {
    background-color: #000000;
    padding: 3rem 0;
    font-size: 2rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        svg {
            width: 17.5rem !important;
            height: auto !important;
        }
    }

    .follow {
        color: #ffffff;
        display: flex;
        align-items: center;

        svg {
            margin-right: 1.5rem;
        }

        @media screen and (max-width: 500px) {
            span {
                display: none;
            }
        }
    }
}
</style>