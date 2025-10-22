import { Heading } from "../abstract/Heading";

export class HTMLHeading implements Heading {
    render(content: string, level: number): string {
        return `<h${level}>${content}</h${level}>`;
    }  
}