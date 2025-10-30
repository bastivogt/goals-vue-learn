<template>
  <div>
    <div>
      <input type="text" v-model="goalInput" />
      <button @click="addGoalHandler">Add Goal</button>
    </div>
    <hr />
    <div>
      <ul v-if="goalService.goals.length !== 0">
        <li v-for="goal in goalService.goals" :key="goal.id">
          <span v-if="goal.id !== editId">{{ goal.title }}</span>

          <input
            v-if="goal.id === editId"
            type="text"
            :value="goal.title"
            @keyup="editEnterHandler($event, goal.id)"
          />
          <button @click="editClickHandler(goal.id)">Edit</button>
          <button @click="removeGoal(goal.id)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Store } from "./services/Store";

export default {
  data() {
    return {
      goalService: Store.GoalService,

      goalInput: "",
      editId: "",
      editInput: "",
    };
  },
  computed: {},
  methods: {
    addGoalHandler() {
      console.log("CLIK");
      if (this.goalInput !== "") {
        this.goalService.addGoal(this.goalInput);
        this.goalInput = "";
      }
    },

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

  mounted() {
    console.log("MOUNTED");
  },
};
</script>

<style scoped></style>
