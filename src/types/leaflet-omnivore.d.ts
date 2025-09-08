// leaflet-omnivore.d.ts
declare module "leaflet-omnivore" {
  import * as L from "leaflet";

  interface OmnivoreOptions extends L.GeoJSONOptions {}

  interface OmnivoreAPI {
    kml(url: string, options?: OmnivoreOptions): L.GeoJSON;
    gpx(url: string, options?: OmnivoreOptions): L.GeoJSON;
    csv(url: string, options?: OmnivoreOptions): L.GeoJSON;
    topojson(url: string, options?: OmnivoreOptions): L.GeoJSON;
    // add more formats if needed
  }

  const omnivore: OmnivoreAPI;
  export = omnivore;
}
