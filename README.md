**Please note that this package is no longer actively maintained.**

I no longer use Gauges and can therefore no longer test any needed changes should they arrive. However, the plugin should continue to work on Gatsby 2.x.x builds. If a future change to Gatsby (or, Gauges, if I should notice) causes any breaking changes, I will be deprecating the package.

If you actively use Gauges with Gatsby and wish to take over the maintenance of this package, [please reach out](mailto:alec@lowmess.com).

***

# gatsby-plugin-gauges

Easily add [Gauges analytics](https://get.gaug.es) to your Gatsby site.

## Install

`npm install gatsby-plugin-gauges`

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-gauges`,
    options: {
      siteId: 'YOUR_GAUGES_SITE_ID',
    },
  },
]
```
