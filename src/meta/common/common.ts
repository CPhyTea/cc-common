import { UltMeta, Meta } from '../meta';

// http请求状态码
class HttpStatus extends UltMeta {
    public SUCCESS = new Meta(0, '成功');
    public PARAMETER_ERROR = new Meta(112, '参数错误');
    public BAD_REQUEST = new Meta(400, 'Bad Request');
    public UNAUTHORIZED = new Meta(401, 'Unauthorized');
    public FORBIDDEN = new Meta(403, 'Forbidden');
    public NOT_FOUND = new Meta(404, 'Not Found');
    public LOCKED = new Meta(423, 'Locked');
    public SERVER_ERROR = new Meta(500, 'Internal Server Error');
}
export const HTTP_STATUS = new HttpStatus();

// 实体通用状态
class BaseEntityState extends UltMeta {
    public ACHIEVED = new Meta(0, '删除');
    public ACTIVE = new Meta(1, '激活');
    public NO_ACTIVE = new Meta(10, '未激活');
}

export const BASE_ENTITY_STATE = new BaseEntityState();
// 实体通用状态
class PersonSex extends UltMeta {
    public FEMALE = new Meta(0, '女');
    public MALE = new Meta(1, '男');
}
export const PERSON_SEX = new PersonSex();

// 实体通用状态
class HasState extends UltMeta {
    public YES = new Meta(1, '是', 'yes');
    public NO = new Meta(2, '否', 'no');
}
export const HAS_STATE = new HasState();

// 开关量
class OpenState extends UltMeta {
    public YES = new Meta(1, '是', 'yes');
    public NO = new Meta(2, '否', 'no');
}
export const OPEN_STATE = new OpenState();
