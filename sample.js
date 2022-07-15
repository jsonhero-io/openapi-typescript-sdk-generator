const OpenAPI = require('./dist/index');

OpenAPI.generate({
    input: 'https://raw.githubusercontent.com/stefanwille/openapi-generator-typescript-example/master/json-placeholder-api.yaml',
    output: './generated',
});
