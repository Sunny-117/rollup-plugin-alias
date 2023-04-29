export declare class Entry {
    private find;
    private replacement;
    constructor(find: string | RegExp, replacement: string);
    match(filePath: string): boolean;
    replace(filePath: string): string;
}
