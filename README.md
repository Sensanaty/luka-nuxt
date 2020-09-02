# luka.me

Personal portfolio website of Luka Salević, or the online moniker [Sensanaty](https://github.com/Sensanaty)

Built with Nuxt, hosted on Netlify.

## Tech Details

The project is built with Vue, with the initial setup done via @vue/cli.

It uses ESLint with the AirBNB config + Prettier for linting purposes.

The project majorly utilizes SCSS, compiled and bundled via node-sass. `modern-normalize.css` has also been selectively adjusted for the usecases of the site.

Netlify auto-fetches the `master` branch, so all changes pushed to `master` are treated as production ready.

## Contribution & Development

Run `yarn install` to install all dependencies. Once all dependencies are installed, run `yarn dev` to run the webserver at port `3000` (default). It features all the goodies like HMR.

Netlify will automatically handle all deployments. It will auto-publish everything it finds under the `master` branch to the live version of the site. As such, the master branch should only feature merges of other feature branches to avoid an excessive number of redundant deployments.

For detailed explanation on how Nuxt works, check out [Nuxt.js docs](https://nuxtjs.org).
