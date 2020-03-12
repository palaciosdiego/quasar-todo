<template>
    <q-page class="bg-grey-3 column">
        <!--
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
        -->
        <q-list class="bg-white" separator bordered></q-list>
        <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></task>
        <!--
        <div v-if="!tasks.length" class="no-tasks absolute-center">
            <q-icon name="check" size="100px" color="primary" />
            <div class="text-h5 text-center text-primary">No tasks</div>
        </div>
        -->
    </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    /*
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    */

    computed: {
        ...mapGetters("tasks", ["tasks"])
    },
    components: {
        task: require("components/Tasks/Task.vue").default
    }
    /*
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
    */
};
</script>
<style lang="scss">
.completed {
    .q-item__label {
        text-decoration: line-through;
        color: #bbb;
    }
}

.no-tasks {
    opacity: 0.5;
}
</style>