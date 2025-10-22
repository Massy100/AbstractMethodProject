import { ConvertFactory } from '../abstract/ConvertFactory';
import { MDHeading } from '../../products/concrete/MDHeading';
import { MDParagraph } from '../../products/concrete/MDParagraph';
import { MDQuote } from '../../products/concrete/MDQuote';
import { MDImage } from '../../products/concrete/MDImage';

export class MDFactory implements ConvertFactory {  
    createHeading(): MDHeading {
        return new MDHeading();
    }
    createParagraph(): MDParagraph {
        return new MDParagraph();
    }
    createQuote(): MDQuote {
        return new MDQuote();
    }
    createImage(): MDImage {
        return new MDImage();
    }   
}