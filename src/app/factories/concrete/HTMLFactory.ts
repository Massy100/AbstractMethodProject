import { ConvertFactory } from '../abstract/ConvertFactory';
import { HTMLHeading } from '../../products/concrete/HTMLHeading';
import { HTMLParagraph } from '../../products/concrete/HTMLParagraph';
import { HTMLQuote } from '../../products/concrete/HTMLQuote';
import { HTMLImage } from '../../products/concrete/HTMLImage';

export class HTMLFactory implements ConvertFactory {  
    createHeading(): HTMLHeading {  
        return new HTMLHeading();
    }
    createParagraph(): HTMLParagraph {  
        return new HTMLParagraph();
    }
    createQuote(): HTMLQuote {  
        return new HTMLQuote();
    }
    createImage(): HTMLImage {  
        return new HTMLImage();
    }
}