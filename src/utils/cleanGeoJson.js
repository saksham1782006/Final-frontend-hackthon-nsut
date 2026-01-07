export const cleanGeoJson = (geojson) => {
  return {
    ...geojson,
    features: geojson.features.filter((feature) => {
      const ward = feature.properties?.ward;

      if (["Palam", "Bawana", "Narela"].includes(ward)) {
        console.warn("Removed invalid ward:", ward);
        return false;
      }

      const coords = feature.geometry?.coordinates?.[0];

      if (!Array.isArray(coords) || coords.length < 3) {
        console.warn("Invalid polygon removed:", ward);
        return false;
      }

      const isValid = coords.every(
        (c) =>
          Array.isArray(c) &&
          c.length === 2 &&
          !isNaN(c[0]) &&
          !isNaN(c[1])
      );

      if (!isValid) {
        console.warn("Bad coord removed:", ward);
        return false;
      }

      return true;
    }),
  };
};
