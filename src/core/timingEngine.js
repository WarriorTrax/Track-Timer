export class TimingEngine {
  constructor(setRace, getRace) {
    this.setRace = setRace;
    this.getRace = getRace;
  }

  start() {
    this.setRace({
      ...this.getRace(),
      running: true,
      startTime: performance.now(),
      results: {},
      splits: {}
    });
  }

  stop() {
    this.setRace({
      ...this.getRace(),
      running: false
    });
  }

  time() {
    const r = this.getRace();
    return ((performance.now() - r.startTime) / 1000).toFixed(2);
  }

  recordLane(lane, isDistance = false) {
    const r = this.getRace();
    const t = this.time();

    if (!isDistance) {
      r.results[lane] ||= t;
    } else {
      if (!r.splits[lane]) r.splits[lane] = [];
      r.splits[lane].push(t);

      if (r.splits[lane].length >= 2) {
        r.results[lane] ||= t;
      }
    }

    this.setRace({ ...r });
  }
}