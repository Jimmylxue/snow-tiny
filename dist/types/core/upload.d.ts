import { DataUploadType, TSnowConfig } from '../types';
export declare function upload(file: Buffer, snowTinyConfig: TSnowConfig): Promise<DataUploadType>;
export declare function download(path: string): Promise<string>;
