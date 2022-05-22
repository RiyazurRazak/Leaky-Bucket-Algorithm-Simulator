import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    outputCapacity: 0,
    bufferSize: 0,
    inputValues: new Array(5).fill(0),
  }),
});
