# generate-it-asyncapi-rabbitmq

It is expected that this set of templates will be used with the openapi-nodegen-typescript-server templates.

It assumes only a RabbitMQ fanout exchange will be used.

It assumes that you will only be listening to publish event operation ids.

## Example
Within an existing server add a new script (point it to your own entry yml file):
```
    "generate:rabbitmq": "generate-it ../ms_rabbitmq_d/build/rabbitmq_asyncapi_1.0.1.yml -t https://github.com/acrontum/generate-it-asyncapi-rabbitmq.git -o src/events"
```

Read and change the example `.nodegenrc` generated:
```json
{
  "nodegenDir": "rabbitMQ",
  "nodegenMockDir": "/__mocks__",
  "nodegenType": "server",
  "helpers": {
    "subscribeOpIds": ["msAuthCacheConnection"],
    "publishOpIds": ["msImageCacheUser"]
  }
}
```

It is expected that your asyncapi yaml file's channels follow a path like feel eg: https://github.com/acrontum/generate-it/blob/master/test_asyncapi.yml

The `.nodegenrc` file's helpers.subscribeOpIds|publishOpIds, each should contain a list of operation IDs you wish to eiterh subscribe to or publish to.

Change the default values to whatever best fits your asyncapi file.

Add to the global.d.ts file:
```
/**
 * IMPORTANT - do not use imports in this file!
 * Use this file to declare attribute for the global, if you must.
 */
// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
  export interface Global {
    qWrapper: any;
  }
}
```

## Logging
You can increase the amount of logging via the nodegenrc file:

```
```json
{
  "nodegenDir": "rabbitMQ",
  "nodegenMockDir": "/__mocks__",
  "nodegenType": "server",
  "helpers": {
    "subscribeOpIds": ["msAuthCacheConnection"],
    "publishOpIds": ["msImageCacheUser"],
    "verboseLogging": true
  }
}
```
