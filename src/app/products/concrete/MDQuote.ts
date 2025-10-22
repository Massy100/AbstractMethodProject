import { Quote } from "../abstract/Quote";

export class MDQuote implements Quote {
    render(content: string): string {
        return `> ${content}`;
    }
}