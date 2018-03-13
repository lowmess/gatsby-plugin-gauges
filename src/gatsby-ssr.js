import React from 'react'

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    return setPostBodyComponents([
      <script
        key={'gatsby-plugin-gauges'}
        dangerouslySetInnerHTML={{
          __html: `
var _gauges = _gauges || []
;(function() {
  var t = document.createElement('script')
  t.type = 'text/javascript'
  t.async = true
  t.id = 'gauges-tracker'
  t.setAttribute('data-site-id', '${pluginOptions.siteId}')
  t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif')
  t.src = 'https://d2fuc4clr7gvcn.cloudfront.net/track.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(t, s)
})()
          `,
        }}
      />,
    ])
  }

  return null
}
