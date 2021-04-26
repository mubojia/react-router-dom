import service from "../utils/service";

const api = {
  Login: (data) => {
    return service.request({
      url: "/login/",
      method: "post",
      data,
    });
  },

  GetSms: (data) => {
    return service.request({
      url: "/getSms/",
      method: "post",
      data,
    });
  },
};

export default api;
