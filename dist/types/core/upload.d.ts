import { DataUploadType } from '../types';
export declare function upload(file: Buffer): Promise<DataUploadType>;
export declare function download(path: string): Promise<string>;
