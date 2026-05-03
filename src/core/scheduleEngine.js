export const CHAMPIONSHIP_ORDER = [
  "4x800 Relay",
  "100m Dash",
  "110m Hurdles",
  "200m Dash",
  "400m Dash",
  "800m Run",
  "1600m Run",
  "3200m Run",
  "4x100 Relay",
  "4x400 Relay"
];

export const buildSchedule = (events) =>
  CHAMPIONSHIP_ORDER
    .map(name => events.find(e => e.name === name))
    .filter(Boolean);