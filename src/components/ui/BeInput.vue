<template>
    <div :class="['input-wrapper', focused && 'focus']">
        <input
            type="text"
            placeholder="Поиск"
            ref="inputRef"
            :value="modelValue"
            @input="onInput"
            @blur="blur"
            @focus="focus"
        />
        <search-icon class="icon" @click="iconClicked" />
    </div>
</template>

<script setup lang="ts">
import SearchIcon from '../icons/SearchIcon.vue'
import { useFocus } from '@vueuse/core'
import { ref } from 'vue'

const inputRef = ref<HTMLInputElement>()
const { focused } = useFocus(inputRef)

defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'iconClicked'])
const blur = () => emit('blur')
const focus = () => emit('focus')

const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const iconClicked = () => emit('iconClicked')
</script>

<style scoped lang="scss">
.input-wrapper {
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem;
    display: flex;
    background-color: #fff;
    border: 1px solid rgba(128, 128, 128, 0.98);

    &.focus {
        border-color: #000;
    }

    input {
        flex-grow: 1;
        background-color: transparent;
        font-size: 1.6rem;
        line-height: 1;
        min-height: 20px;
        border: 0;

        &:focus {
            outline: none;
        }
    }

    .icon {
        margin-left: 10px;
        cursor: pointer;
    }
}
</style>