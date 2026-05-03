export class MeetEngine {
  constructor(schedule) {
    this.schedule = schedule;
    this.eventIndex = 0;
    this.heatIndex = 0;
  }

  currentEvent() {
    return this.schedule[this.eventIndex];
  }

  nextEvent() {
    this.eventIndex++;
    this.heatIndex = 0;
  }

  nextHeat() {
    this.heatIndex++;
  }
}