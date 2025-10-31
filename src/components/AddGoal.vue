<template>
  <div>
    <input type="text" v-model="goalInput" />
    <button @click="addGoalHandler">Add Goal</button>
  </div>
</template>

<script>
import { Store } from "../services/Store";

export default {
  data() {
    return {
      goalService: Store.GoalService,
      goalInput: "",
    };
  },

  methods: {
    addGoalHandler() {
      console.log("CLIK");
      if (this.goalInput !== "") {
        this.goalService.addGoal(this.goalInput);
        this.goalInput = "";
        this.$emit("goalAdded");
      }
    },
  },
};
</script>

<style scoped></style>
