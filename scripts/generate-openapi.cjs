const fs = require('fs');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Monorepo API',
      version: '1.0.0',
    },
  },
  apis: [
    'apps/web/src/app/api/**/*.ts',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const outputPath = path.resolve(__dirname, '../apps/web/public/openapi.json');

fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log('OpenAPI spec generated at:', outputPath);
