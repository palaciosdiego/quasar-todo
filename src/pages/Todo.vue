<template>
    <q-page class="bg-grey-3 column">
        <div class="row q-pa-sm- bg-primary">
            <q-input
                v-model="newTask"
                @keyup.enter="addTask"
                class="col"
                filled
                bg-color="white"
                square
                placeholder="Add task"
                dense
            >
                <template v-slot:append>
                    <q-btn round dense flat icon="add" @click="addTask" />
                </template>
            </q-input>
        </div>
        <q-list class="bg-white" separator bordered>
            <q-item
                v-for="(task, index) in tasks"
                :key="task.title"
                @click="task.done = !task.done"
                :class="{ 'done bg-blue-1' : task.done }"
                clickable
                v-ripple
            >
                <q-item-section avatar>
                    <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ task.title }}</q-item-label>
                </q-item-section>
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
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    methods: {
        deleteTask(index) {
            this.$q
                .dialog({
                    title: "Confirm",
                    message: "Realy delete?",
                    cancel: true,
                    persistent: true
                })
                .onOk(() => {
                    console.log("delete task", index);
                    this.tasks.splice(index, 1);
                    this.$q.notify("Task deleted");
                });
        },
        addTask() {
            console.log("adding task");
            this.tasks.push({ title: this.newTask, done: false });
            this.newTask = "";
        }
    }
};
</script>
<style lang="scss">
.done {
    .q-item__label {
        text-decoration: line-through;
        color: #bbb;
    }
}
</style>