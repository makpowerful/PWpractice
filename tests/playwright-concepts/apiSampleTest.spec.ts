import { test, expect } from '@playwright/test'
import Ajv from "ajv";
test('API test attempt', async ({ request }) => {
    let baseuri = 'https://rahulshettyacademy.com/'
    let path = "maps/api/place/add/json"
    const response1 =await request.get(baseuri+path, {
        params: {
            'key': 'qaclick123'
        },
        data: {
            "location": {
                "lat": -38.383494,
                "lng": 33.427362
            },
            "accuracy": 50,
            "name": "Frontline house",
            "phone_number": "(+91) 983 893 3937",
            "address": "29, side layout, cohen 09",
            "types": [
                "shoe park",
                "shop"
            ],
            "website": "http://google.com",
            "language": "French-IN"
        }

    }
    )


    const schemaValidate = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "status": {
      "type": "string"
    },
    "place_id": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "reference": {
      "type": "string"
    },
    "id": {
      "type": "string"
    }
  },
  "required": [
    "status",
    "place_id",
    "scope",
    "reference",
    "id"
  ]
}

    expect(response1.ok()).toBeTruthy()
    console.log(await response1.text())

    let js = await response1.json()
    console.log(await js.scope)

    const ajv1 = new Ajv()
    const validate = ajv1.compile(schemaValidate)
    const result = validate(js)

    expect(result,JSON.stringify(validate.errors)).toBe(true)


});