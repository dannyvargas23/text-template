import { TextTemplateOptions } from './interfaces/options';
export declare class TextTemplate {
    private text;
    options: TextTemplateOptions;
    constructor(text: string, options?: TextTemplateOptions);
    render(data: Record<string, any>): string;
}
