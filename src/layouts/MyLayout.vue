<template>
    <q-layout view="lHh lpR fFf">
        <q-header>
            <q-toolbar>
                <q-toolbar-title class="absolute-center">Awesome todo</q-toolbar-title>
            </q-toolbar>
            <div class="q-px-lg q-pt-xl q-mb-md">
                <div class="text-h3">Todo</div>
                <div class="text-subtile1">{{ todaysDate }}</div>
            </div>
            <q-img src="statics/nubes.jpg" class="header-image absolute-top" />
        </q-header>
        <q-footer elevated>
            <q-tabs>
                <q-route-tab to="/" icon="list" label="Todo" />
                <q-route-tab to="/settings" icon="settings" label="Settings" />
            </q-tabs>
        </q-footer>
        <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="600">
            <q-scroll-area
                style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd"
            >
                <q-list padding>
                    <q-item
                        v-for="nav in navs"
                        :key="nav.label"
                        :to="nav.to"
                        exact
                        clickable
                        v-ripple
                    >
                        <q-item-section avatar>
                            <q-icon :name="nav.icon" />
                        </q-item-section>

                        <q-item-section>{{nav.label}}</q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" src="statics/nubes.jpg" style="height: 185px">
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img src="statics/avatar.png" />
                    </q-avatar>
                    <div class="text-weight-bold">Diego Palacios</div>
                    <div>@diego.palacios</div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container>
            <keep-alive>
                <router-view />
            </keep-alive>
        </q-page-container>
    </q-layout>
</template>

<script>
import { date } from "quasar";
export default {
    name: "MyLayout",

    data() {
        return {
            leftDrawerOpen: false,
            navs: [
                {
                    label: "Todo",
                    icon: "list",
                    to: "/"
                },
                {
                    label: "Settings",
                    icon: "settings",
                    to: "/settings"
                },
                {
                    label: "Help",
                    icon: "help",
                    to: "/help"
                }
            ]
        };
    },
    computed: {
        todaysDate() {
            let timeStamp = Date.now();
            return date.formatDate(timeStamp, "dddd D MMMM");
        }
    }
};
</script>
<style lang="scss">
.header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
}
@media screen and (min-width: 600px) {
    .q-footer {
        display: none;
    }
}
</style>
