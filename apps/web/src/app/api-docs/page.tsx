'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Documentation</h1>
      <SwaggerUI
        url="/api/docs"
        docExpansion="list"
        defaultModelsExpandDepth={-1}
        supportedSubmitMethods={[`get`, `post`, `put`, `delete`, `patch`]}
        deepLinking={true}
        displayRequestDuration={true}
        filter={true}
        showExtensions={true}
        showCommonExtensions={true}
      />
    </div>
  );
}
