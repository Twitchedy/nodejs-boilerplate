# Haydn's NodeJS Boilerplate
You can use this to make silly little apps!

Uses NodeJS, and VueJS.

## Local Install
### Build Frontend Assets
```sh
yarn build # Or 'yarn watch' for development.
```

### Run NodeJS Server
```sh
yarn serve # Or 'yarn serve-watch' for development.
```

## Environments
The app can be configured for multiple environments by running it with the ENV environment variable:

```sh
$ ENV=local yarn serve
$ ENV=uat yarn serve
$ ENV=prod yarn serve
```
