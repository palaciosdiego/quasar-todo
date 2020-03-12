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

        <div v-if="!tasks.length" class="no-tasks absolute-center">
            <q-icon name="check" size="100px" color="primary" />
            <div class="text-h5 text-center text-primary">No tasks</div>
        </div>
    </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    /*
    computed: {
        ...mapGetters("tasks", ["tasks"])
    },
    */
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
            let today = new Date();

            this.tasks.push({
                title: this.newTask,
                done: false,
                dueDate: today.toLocaleDateString(),
                dueTime: today.toLocaleTimeString()
            });
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

.no-tasks {
    opacity: 0.5;
}
</style>