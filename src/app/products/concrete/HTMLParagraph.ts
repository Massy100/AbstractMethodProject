import { Paragraph } from "../abstract/Paragraph";

export class HTMLParagraph implements Paragraph {
    render(content: string): string {
        return `<p>${content}</p>`;
    }
}