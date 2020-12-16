# Lets Recycle Maintenance Screens

The LetsRecycle project requires a number of static data maintenance screens for simulating realistic outward delivery routes. The scheduling of recycling pickups is wholly dependant matching customer recycling requests to the empty trucks' potential return route as well as each truck's load capacity.

All the screen apps are dynamic and are generated from a JSON schema with vanilla CSS formating.

A prototype schema is shown at the end of this note.

By using ES6 to generate the table data and fields dynamically, the HTML migration to JSX and React components will be easier as will the eventual migration of raw data to the AWS data store.

Below are some sample screen shots with annotations showing fields that will contain changing data and any potential React components.

## Depot Static Data

![image info](./images/depotScreenComp.png)

## Truck Static Data
![image info](./images/truckScreenComp.png)


## Appliance Static Data
![image info](./images/applianceScreenComp.png)


The static data JSON schema:

```json
{
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1608127173.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"depots",
		"trucks",
		"appliances"
	],
	"properties": {
		"depots": {
			"$id": "#root/depots", 
			"title": "Depots", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/depots/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"id",
					"postcode",
					"fleet"
				],
				"properties": {
					"id": {
						"$id": "#root/depots/items/id", 
						"title": "Id", 
						"type": "string",
						"default": "",
						"examples": [
							"Horwich"
						],
						"pattern": "^.*$"
					},
					"postcode": {
						"$id": "#root/depots/items/postcode", 
						"title": "Postcode", 
						"type": "string",
						"default": "",
						"examples": [
							"HO1 8XJ"
						],
						"pattern": "^.*$"
					},
					"fleet": {
						"$id": "#root/depots/items/fleet", 
						"title": "Fleet", 
						"type": "string",
						"default": "",
						"examples": [
							"26"
						],
						"pattern": "^.*$"
					}
				}
			}

		},
		"trucks": {
			"$id": "#root/trucks", 
			"title": "Trucks", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/trucks/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"id",
					"maxItems"
				],
				"properties": {
					"id": {
						"$id": "#root/trucks/items/id", 
						"title": "Id", 
						"type": "string",
						"default": "",
						"examples": [
							"Thirty Tonne"
						],
						"pattern": "^.*$"
					},
					"maxItems": {
						"$id": "#root/trucks/items/maxItems", 
						"title": "Maxitems", 
						"type": "integer",
						"examples": [
							30
						],
						"default": 0
					}
				}
			}

		},
		"appliances": {
			"$id": "#root/appliances", 
			"title": "Appliances", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/appliances/items", 
				"title": "Items", 
				"type": "object",
				"required": [
					"id",
					"weighting"
				],
				"properties": {
					"id": {
						"$id": "#root/appliances/items/id", 
						"title": "Id", 
						"type": "string",
						"default": "",
						"examples": [
							"Fridge"
						],
						"pattern": "^.*$"
					},
					"weighting": {
						"$id": "#root/appliances/items/weighting", 
						"title": "Weighting", 
						"type": "string",
						"default": "",
						"examples": [
							"1.0"
						],
						"pattern": "^.*$"
					}
				}
			}

		}
	}
}
```