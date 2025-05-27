import { defineStore } from "pinia";

export const useModalStore = defineStore("modals", {
    state: () => ({
      modals: [],
    }),
    actions: {
      addModal(data) {
        const id = Date.now();
        this.modals.push({ id, data });
      },
      resetModals() {
        this.modals = [];
      }
    },
  });