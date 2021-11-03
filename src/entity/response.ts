export interface Response<T> {
    /**
     * 状态码
     */
    code: string;
    /**
     * 返回信息
     */
    message: string;
    /**
     * 返回值
     */
    data: T;
}
