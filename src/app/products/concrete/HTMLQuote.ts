import { Quote } from "../abstract/Quote"; 

export class HTMLQuote implements Quote {
    render(content: string): string {
        return `<blockquote>${content}</blockquote>`;
    }
}