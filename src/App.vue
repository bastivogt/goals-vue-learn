<template>
  <div>
    <add-goal />
    <hr />
    <div>
      <ul v-if="goalService.goals.length !== 0">
        <li v-for="goal in goalService.goals" :key="goal.id">
          <Goal :goal="goal" />
        </li>
      </ul>
      <p v-else>No Goal available.</p>
    </div>
  </div>
</template>

<script>
import { Store } from "./services/Store";
import AddGoal from "./components/AddGoal.vue";
import Goal from "./components/Goal.vue";

export default {
  components: {
    AddGoal,
    Goal,
  },
  data() {
    return {
      goalService: Store.GoalService,

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
  },

  mounted() {
    console.log("MOUNTED");
  },
};
</script>

<style scoped></style>
