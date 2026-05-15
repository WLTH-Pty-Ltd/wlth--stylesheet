<template>
    <ul class="color-list">
        <li
            v-for="name in colorVars"
            :key="name"
            class="color-swatch"
            :style="{ backgroundColor: `var(--color-${name})` }"
        >
            <span class="color-swatch__label">--color-{{ name }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
const colorVars: string[] = [
    'transparent',
    'white',
    'dblue',
    'dblue-base',
    'dblue-900',
    'dblue-800',
    'dblue-700',
    'dblue-600',
    'dblue-500',
    'dblue-400',
    'dblue-300',
    'dblue-200',
    'dblue-100',
    'dblue-50',
    'turq',
    'turq-base',
    'turq-900',
    'turq-800',
    'turq-700',
    'turq-600',
    'turq-500',
    'turq-400',
    'turq-300',
    'turq-200',
    'turq-100',
    'turq-50',
    'rblue',
    'rblue-base',
    'rblue-900',
    'rblue-800',
    'rblue-700',
    'rblue-600',
    'rblue-500',
    'rblue-400',
    'rblue-300',
    'rblue-200',
    'rblue-100',
    'rblue-50',
    'mgrey',
    'mgrey-base',
    'mgrey-900',
    'mgrey-800',
    'mgrey-700',
    'mgrey-600',
    'mgrey-500',
    'mgrey-400',
    'mgrey-300',
    'mgrey-200',
    'mgrey-100',
    'mgrey-50',
    'deepblue',
    'deepblue-base',
    'error',
    'error-base',
    'error-subdued',
    'error-subdued-50',
    'error-900',
    'error-800',
    'error-700',
    'error-600',
    'error-500',
    'error-400',
    'error-300',
    'error-200',
    'error-100',
    'error-50',
    'success',
    'success-base',
    'success-subdued',
    'success-subdued-50',
    'success-900',
    'success-800',
    'success-700',
    'success-600',
    'success-500',
    'success-400',
    'success-300',
    'success-200',
    'success-100',
    'success-50',
    'warning',
    'warning-base',
    'warning-subdued',
    'warning-subdued-50',
    'warning-900',
    'warning-800',
    'warning-700',
    'warning-600',
    'warning-500',
    'warning-400',
    'warning-300',
    'warning-200',
    'warning-100',
    'warning-50',
    'background',
    'background-base',
    'background-secondary',
    'background-tertiary',
    'background-disabled',
    'text',
    'text-base',
    'text-secondary',
    'text-tertiary',
    'text-disabled',
    'icon-base',
    'icon-secondary',
    'icon-tertiary',
    'icon-primary',
    'icon-success',
    'icon-warning',
    'icon-error',
    'border',
    'border-base',
    'border-secondary',
    'border-primary',
    'border-primary-secondard',
    'border-success',
    'border-warning',
    'border-error',
];
</script>

<style scoped>
.color-list {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
}

.color-list li {
    height: 200px;
    width: 200px;
    border: 1px solid var(--color-border-base);
}

.color-swatch {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0.5rem;
}

.color-swatch__label {
    font-family: monospace;
    font-size: 12px;
    line-height: 1.2;
    padding: 0.25rem 0.4rem;
    color: var(--color-text-base);
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
    word-break: break-all;
}
</style>
