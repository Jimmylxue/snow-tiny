export declare function filterFile(fileList: string[], path: string): string[];
export declare function isImage(fileName: string): boolean;
export declare function isDir(pathName: string): boolean;
export declare function isInvalidFile(fileName: string): boolean;
export declare function isAcceptFile(fileName: string, acceptList?: string[]): boolean;
export declare function byteSize(byte?: number): string;
export declare function copyFile(entry: string, output: string, callback?: () => void): void;
export declare function readDir(path: string): Promise<string[]>;
export declare function mkDir(path: string): Promise<unknown>;
