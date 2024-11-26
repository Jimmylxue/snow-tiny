import { TSnowConfig } from 'src/types';
export declare function randomNum(min?: number, max?: number): number;
export declare function randomHeader(snowTinyConfig: TSnowConfig): {
    headers: {
        'Cache-Control': string;
        'Content-Type': string;
        'Postman-Token': number;
        'User-Agent': string;
        'X-Forwarded-For': string;
    };
    hostname: string;
    method: string;
    path: string;
    rejectUnauthorized: boolean;
};
export declare const tagBuf: Buffer;
