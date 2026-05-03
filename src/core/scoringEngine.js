export const calculateScores = (results) => {
  const POINTS = [10, 8, 6, 5, 4, 3, 2, 1];

  const sorted = Object.entries(results)
    .sort((a, b) => a[1] - b[1]);

  const scores = {};

  sorted.forEach(([lane], i) => {
    const team = `Team ${lane % 2 === 0 ? "B" : "A"}`;
    scores[team] = (scores[team] || 0) + (POINTS[i] || 0);
  });

  return scores;
};