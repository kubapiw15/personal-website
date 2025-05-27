import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notifications", {
  state: () => ({
    notifications: [],
  }),
  actions: {
    addNotification(text, type = 'info') {
      const id = Date.now();
      this.notifications.push({ id, text, type });

      setTimeout(() => {
        this.notifications = this.notifications.filter(n => n.id !== id);
      }, 5000);
    },
  },
});