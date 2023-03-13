export function generateLatitudes(num) {
  const i = num % 26;
  const j = Math.floor(num / 26);
  const lat = i * 15; //* g;
  const latDisplay =
    lat === 0 || lat === 180
      ? "0 (Equator)"
      : lat < 90
      ? "+" + String(lat)
      : lat < 180
      ? "+" + String(180 - lat)
      : lat < 270
      ? 180 - lat
      : lat - 360;
  return {
    startLat: lat,
    startLng: j * 30,
    endLat: lat,
    endLng: j * 30 + 30,
    color: ["red", "red"],
    name: `${latDisplay}`,
    altitude: 0,
    stroke: "1px",
  };
}
export function generateLongitudes(num, g) {
  const lng = num < 12 / g ? num * 15 * g : -(15 * g) - (num - 12 / g) * 15 * g;

  return {
    startLat: 90,
    startLng: lng,
    endLat: -89.9,
    endLng: lng,
    color: ["white", "white"],
    name: `${
      num === 0
        ? "0 (Prime Meridian)"
        : num === 12 / g - 1
        ? "180 (Prime Meridian)"
        : num < 12 / g
        ? "+" + String(lng)
        : lng
    }`,
    altitude: 0,
    stroke: "1px",
  };
}
