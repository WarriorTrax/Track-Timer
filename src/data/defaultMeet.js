export const defaultMeet = {
  name: "Track Meet",
  teams: [
    { id: 1, name: "Team A" },
    { id: 2, name: "Team B" }
  ],

  events: [
    {
      id: 1,
      name: "100m Dash",
      type: "SPRINT",
      heats: [
        {
          id: 101,
          lanes: Array.from({ length: 8 }, (_, i) => ({
            lane: i + 1,
            athlete: null,
            time: null
          }))
        }
      ]
    },

    {
      id: 2,
      name: "400m Dash",
      type: "DISTANCE",
      heats: []
    },

    {
      id: 3,
      name: "4x100 Relay",
      type: "RELAY",
      heats: []
    }
  ]
};