/**
 * 此状态常量未经许可,不可变更。
 * 注意事项：值不可重复
 */
export enum COMMON_STATUS {
    /**
     * 未归档
     */
    UNARCHIVED = -1,
    /**
     * 已归档
     */
    ARCHIVED,
    /**
     * 启用中
     */
    ACTIVE,

    /**
     * 草稿/未激活
     */
    UN_ACTIVE = 10,

    /**
     * 初始化
     */
    INITIALIZE,

    /**
     * 暂停中
     */
    SUSPEND = 20,

    /**
     * 未投放 未达到投放时间
     */
    INACTIVE,

    /**
     * 审核中
     */
    APPROVING = 30,

    /**
     * 审核拒绝
     */
    DENIED = 40,
    /**
     * 已完成
     */
    COMPLETE = 80,

    /**
     * 已过期
     */
    EXPIRED = 81,

    /**
     * 冻结
     */
    FROZEN = 91,

    /**
     * 对方平台无对应信息
     */
    NO_MATCH = 92,

    /**
     * 尚未下发
     */
    API_WAITING = 100,

    /**
     * 下发成功
     */
    API_SUCCESS,

    /**
     * 下发失败
     */
    API_FAILED,
}
