import { TSnowConfig } from 'src/types';
declare class SnowTinyConfig {
    private _config;
    get config(): TSnowConfig;
    set config(__config: TSnowConfig);
}
export declare const snowTinyConfig: SnowTinyConfig;
export {};
