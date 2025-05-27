import { defineStore } from 'pinia';

export const useGroupsStore = defineStore('groups', {
    state: () => ({
        groups: [],
    }),
    actions: {
        setGroups(newGroups) {
            this.groups = newGroups;
        },
    },
});