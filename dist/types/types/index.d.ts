export type TFileItem = {
    isImage: boolean;
    isAcceptImage: boolean;
    isDir: boolean;
    fileName: string;
    children?: TFileItem;
    fullRoute: string;
    outputRoute: string;
};
export type TFileObject = {
    dirname?: string;
    dirRoute?: string;
    fileChildren?: TFileItem[];
    dirChildren?: TFileObject[];
};
export type DataUploadType = {
    output: {
        url: string;
        size: number;
        ratio: number;
    };
    input: {
        size: number;
    };
    error: string;
};
export type TDetail = {
    input: number;
    output: number;
    ratio: number;
    path: string;
    file: Buffer;
    time?: number;
    msg?: string;
    fileName: string;
};
export type TSnowConfig = {
    /**
     * 压缩入口
     */
    entry: string;
    /**
     * 压缩出口
     */
    output: string;
    /**
     * 文件递归压缩
     */
    diffCompress?: boolean;
    /**
     * 平铺导出
     */
    flat?: boolean;
    /**
     * 保存其他类型文件
     */
    saveOther?: boolean;
    /**
     * 接受允许进行压缩的文件类型
     */
    acceptPictureType?: string[];
    /**
     * 文件压缩的 请求路径
     */
    uploadPath?: string;
    /**
     * 文件压缩接口的 host
     */
    hostname?: string[];
};
