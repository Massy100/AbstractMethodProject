import { Image } from "../abstract/Image";

export class HTMLImage implements Image {
    render(url: string, alt: string): string {
        return `<img src="${url}" alt="${alt}"/>`;
    }
}