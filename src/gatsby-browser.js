exports.onRouteUpdate = function() {
  // Don't track while developing.
  if (process.env.NODE_ENV === 'production' && typeof _gauges === 'object') {
    _gauges.push(['track'])
  }
}
