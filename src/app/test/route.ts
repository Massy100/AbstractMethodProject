import { NextRequest, NextResponse } from 'next/server';
import { HTMLFactory } from '../factories/concrete/HTMLFactory';
import { MDFactory } from '../factories/concrete/MDFactory';
import { ConverterService } from '../services/ConverterService';
import type { ConvertFactory } from '../factories/abstract/ConvertFactory';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, format } = body;

    let factory: ConvertFactory;
    let contentType: string;
    
    if (format === 'html') {
      factory = new HTMLFactory();
      contentType = 'text/html; charset=utf-8';
    } else if (format === 'markdown') {
      contentType = 'text/plain; charset=utf-8';
      factory = new MDFactory();
    } else {
      return NextResponse.json(
        { error: 'Invalid format. Use "html" or "markdown"' },
        { status: 400 }
      );
    }

    const converter = new ConverterService(factory);
    const result = converter.convert(body).trim();

    return new Response(result, {
      headers: { 'Content-Type': contentType },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Conversion error', details: (error as Error).message },
      { status: 500 }
    );
  }
}