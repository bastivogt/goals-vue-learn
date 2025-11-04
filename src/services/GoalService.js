export class GoalService {
  constructor() {
    this._goals = [];
    this.onUpdated = null;
  }

  _emitOnUpdated() {
    if (typeof this.onUpdated === "function") {
      this.onUpdated({ target: this, goals: this._goals });
    }
  }

  get goals() {
    return [...this._goals];
  }

  addGoal(title) {
    const time = new Date().getTime();
    this._goals.unshift({ id: time, title: title });
    this._emitOnUpdated();
  }

  removeGoal(id) {
    console.log("removeGoal", "service");
    const idx = this.goals.findIndex((goal) => {
      return goal.id === id;
    });
    this._goals.splice(idx, 1);
    this._emitOnUpdated();
  }

  editGoal(id, title) {
    const goalID = this._goals.findIndex((goal) => {
      return goal.id === id;
    });
    this._goals[goalID].title = title;
    this._emitOnUpdated();
  }
}
