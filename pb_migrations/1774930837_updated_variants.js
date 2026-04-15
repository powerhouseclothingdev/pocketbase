/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select4156564586",
    "maxSelect": 1,
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

  return app.save(collection)
})
