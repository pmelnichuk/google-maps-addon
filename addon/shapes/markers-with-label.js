import BaseShape from './base';

export default BaseShape.extend({
  createInstance() {
    return new MarkersWithLabel();
  },

  defaultOptions() {
    return {};
  },

  normalizeOptions(options) {
    return {
      position: new google.maps.LatLng(options.latitude, options.longitude),
      draggable: false,
      raiseOnDrag: false,
      // map: map,
      labelContent: "$425K",
      labelAnchor: new google.maps.Point(22, 0),
      labelClass: "labels", // the CSS class for the label
      labelStyle: {opacity: 0.75}
    };
  }
});
