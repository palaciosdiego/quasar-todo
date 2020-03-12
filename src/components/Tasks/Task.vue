<template>
    <q-item
        @click="updateTask({id:id,updates:{ completed: !task.completed}})"
        :class="{ 'completed bg-blue-1' : task.completed }"
        clickable
        v-ripple
    >
        <q-item-section avatar>
            <q-checkbox v-model="task.completed" class="no-pointer-events" color="primary" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
            <div class="row">
                <div class="column justify-center">
                    <q-icon name="event" size="18px" class="q-mr-xs" />
                </div>
                <div class="column">
                    <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
                    <q-item-label class="row justify-end" caption>
                        <small>{{ task.dueTime }}</small>
                    </q-item-label>
                </div>
            </div>
        </q-item-section>
        <!--
                <q-item-section v-if="task.done" side>
                    <q-btn
                        @click.stop="deleteTask(index)"
                        flat
                        round
                        dense
                        color="primary"
                        icon="delete"
                    />
                </q-item-section>
        -->
    </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ["task", "id"],
    methods: {
        ...mapActions("tasks", ["updateTask"])
    }
};
</script>

<style scoped>
</style>