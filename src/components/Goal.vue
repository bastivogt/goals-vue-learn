<template>
  <div>
    <span v-if="goal.id !== editId">{{ goal.title }}</span>

    <input
      v-if="goal.id === editId"
      type="text"
      :value="goal.title"
      @keyup="editEnterHandler($event, goal.id)"
    />
    <button @click="editClickHandler(goal.id)">Edit</button>
    <button @click="removeGoal(goal.id)">x</button>
  </div>
</template>

<script>
import { Store } from "../services/Store";

export default {
  props: ["goal"],
  data() {
    return {
      goalService: Store.GoalService,
      editId: "",
      editInput: "",
    };
  },

  methods: {
    removeGoal(id) {
      console.log("removeGoal", id);
      this.goalService.removeGoal(id);
    },

    editEnterHandler(e, id) {
      console.log("editEnterHandler", e);
      if (e.key === "Enter") {
        console.log("ENTER");
        this.goalService.editGoal(id, e.target.value);
        this.editId = "";
      }
    },

    editClickHandler(id) {
      this.editId = id;
    },
  },
};
</script>

<style></style>
