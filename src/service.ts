import request from "./utils/request";

export async function getportDetails() {

  return request({
    url: "/static/get/port/details",
    method: "GET",
  });

}