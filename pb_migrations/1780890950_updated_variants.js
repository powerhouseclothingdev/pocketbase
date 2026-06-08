/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // remove field
  collection.fields.removeById("select4156564586")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "json4156564586",
    "maxSize": 0,
    "name": "size",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select4156564586",
    "maxSelect": 5,
    "name": "size",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ]
  }))

  // remove field
  collection.fields.removeById("json4156564586")

  return app.save(collection)
})
