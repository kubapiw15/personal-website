import { defineStore } from 'pinia';

export const usePermissionsStore = defineStore('permissions', {
    state: () => ({
        permissions: [],
    }),
    actions: {
        setPermissions(newPermissions) {
            this.permissions = newPermissions;
        },
    },
});