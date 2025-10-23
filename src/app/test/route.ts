import { NextRequest, NextResponse } from 'next/server';
import { HTMLFactory } from '../factories/concrete/HTMLFactory';
import { MDFactory } from '../factories/concrete/MDFactory';
import { ConverterService } from '../services/ConverterService';
import type { ConvertFactory } from '../factories/abstract/ConvertFactory';

export async function POST(request: NextRequest) {
  try {
    const { content, format } = await request.json();

    let factory: ConvertFactory;
    
    if (format === 'html') {
      factory = new HTMLFactory();
    } else if (format === 'markdown') {
      factory = new MDFactory();
    } else {
      return NextResponse.json(
        { error: 'Invalid format. Use "html" or "markdown"' },
        { status: 400 }
      );
    }

    const converter = new ConverterService(factory);
    const result = converter.convert(content);

    return NextResponse.json({ converted: result });
  } catch (error) {
    return NextResponse.json(
      { error: 'Conversion error', details: (error as Error).message },
      { status: 500 }
    );
  }
}