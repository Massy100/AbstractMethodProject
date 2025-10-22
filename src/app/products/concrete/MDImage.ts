import { Image } from "../abstract/Image";

export class MDImage implements Image {
    render(url: string, alt: string): string {
        return `![${alt}](${url})`;
    }
}