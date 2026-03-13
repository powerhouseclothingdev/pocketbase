/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2472191607")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_f2skmi4eqd` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_f2skmi4eqd` ON `users` (`email`) WHERE `email` != ''"
    ],
    "name": "users"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2472191607")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_f2skmi4eqd` ON `users_collection` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_f2skmi4eqd` ON `users_collection` (`email`) WHERE `email` != ''"
    ],
    "name": "users_collection"
  }, collection)

  return app.save(collection)
})
