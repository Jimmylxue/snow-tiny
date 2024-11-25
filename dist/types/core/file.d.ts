import { TFileItem, TFileObject, TSnowConfig } from 'src/types';
export declare function diffFile(path: string, obj: TFileObject, entry: string, snowConfig: TSnowConfig): void;
export declare function outputFile(fileStruct: TFileObject, output: string, uploadList: TFileItem[], snowTinyConfig: TSnowConfig): void;
