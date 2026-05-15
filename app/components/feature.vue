<template>
    <div class="feature-container">
        <h3 class="heading-sm">{{ props.title }}</h3>
        <p v-if="props.preamble" class="body">{{ props.preamble }}</p>
        <p>Targets:</p>
        <ul class="class-list">
            <li v-for="c in props.classes">
                {{ c }}
            </li>
        </ul>
        <hr>
        <p>Example:</p>
        <div class="example">
            <slot name="example"></slot>
        </div>
        <hr>
        <p class="text-sm">Usage:</p>
        <pre>
            <slot name="code"></slot>
        </pre>
        <p class="text-sm">Declaration:</p>
        <pre>
            <slot name="declaration"></slot>
        </pre>
    </div>
</template>

<script setup lang="ts">
export interface FeatureProps {
    title: string;
    classes: string[];
    preamble?: string;
}
const props = defineProps<FeatureProps>();
</script>

<style scoped>
.feature-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.75rem;
    padding: 2rem;
    border: 1px solid var(--color-border-secondary);
    border-radius: 14px;
}

.class-list {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
}

.class-list li {
    background-color: var(--color-background-disabled);
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
}

.example {
    padding: 1rem;
    border: 1px solid var(--color-border-secondary);
}

pre {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.4rem;
    background-color: var(--color-background-tertiary);
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 14px;
    text-wrap-mode: wrap;
}
</style>