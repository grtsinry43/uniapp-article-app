import request from "./request";

export const getLabelList = (data) => request({
    name: "getLabelList",
    data
})