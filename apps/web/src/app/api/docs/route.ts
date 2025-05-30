import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const openApiPath = path.join(process.cwd(), `public`, `openapi.json`);
  const swaggerSpec = JSON.parse(fs.readFileSync(openApiPath, `utf8`));
  return NextResponse.json(swaggerSpec);
}
