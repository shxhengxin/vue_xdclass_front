import axios from '../request'

//注册接口
export const registerApi = (phone,pwd,name) => axios.post("/api/v1/pri/user/register",{
    "phone":phone,
    "pwd":pwd,
    "name":name
});

//登录接口
export const loginApi = (phone,pwd) => axios.post("/api/v1/pri/user/login",{
    "phone":phone,
    "pwd":pwd
});

//轮播图接口
export const getBanner = () => axios.get('/api/v1/pub/video/banner');

//视频列表接口
export const getVideoList = () => axios.get('/api/v1/pub/video/list');

//视频详情
export const getVideoDetail = (vid) => axios.get('/api/v1/pub/video/findDetailById',{
    params : {
        video_id:vid
    }
});

//下单接口

export const saveOrder = (token,vid) => axios.post('/api/v1/pri/order/saveOrder',{
    "video_id":vid
},{
    headers:{
        "token":token
    }

});

//订单列表
export const getOrderList = (token) => axios.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
});

//用户信息
export const getUserInfo = (token) => axios.get("/api/v1/pri/user/findUserInfoByToken",{
    params:{
        token:token
    }
});