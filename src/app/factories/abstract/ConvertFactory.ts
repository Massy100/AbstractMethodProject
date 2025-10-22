import { Heading } from '../../products/abstract/Heading';
import { Paragraph } from '../../products/abstract/Paragraph';
import { Quote } from '../../products/abstract/Quote';
import { Image } from '../../products/abstract/Image';

export interface ConvertFactory {
  createHeading(): Heading;
  createParagraph(): Paragraph;
  createQuote(): Quote;
  createImage(): Image;
}