import { ConvertFactory } from "../factories/abstract/ConvertFactory";  

export class ConverterService {
  private factory: ConvertFactory;

  constructor(factory: ConvertFactory) {
    this.factory = factory;
  }

  convert(jsonData: any): string {
    const heading = this.factory.createHeading();
    const paragraph = this.factory.createParagraph();
    const quote = this.factory.createQuote();
    const image = this.factory.createImage();

    let result = '';

    jsonData.content.forEach((element: any) => {
      switch (element.type) {
        case 'heading1':
          result += heading.render(element.text, 1) + '\n\n';
          break;
        case 'heading2':
          result += heading.render(element.text, 2) + '\n\n';
          break;
        case 'heading3':
          result += heading.render(element.text, 3) + '\n\n';
          break;
        case 'paragraph':
          result += paragraph.render(element.text) + '\n\n';
          break;
        case 'quote':
          result += quote.render(element.text) + '\n\n';
          break;
        case 'image':
          result += image.render(element.url, element.alt) + '\n\n';
          break;
      }
    });

    return result;
  }
}