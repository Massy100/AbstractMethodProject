import { Paragraph } from "../abstract/Paragraph";

export class MDParagraph implements Paragraph {
    render(content: string): string {
        return `${content}`;
    }
}