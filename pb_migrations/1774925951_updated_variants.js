/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // add field
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

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1716930793",
    "max": 0,
    "min": 0,
    "name": "color",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1261852256",
    "max": null,
    "min": null,
    "name": "stock",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // remove field
  collection.fields.removeById("select4156564586")

  // remove field
  collection.fields.removeById("text1716930793")

  // remove field
  collection.fields.removeById("number1261852256")

  return app.save(collection)
})
