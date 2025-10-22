import { Heading } from "../abstract/Heading";

export class MDHeading implements Heading {
    render(content: string, level: number): string {
        return `${'#'.repeat(level)} ${content}`;
    }  
}