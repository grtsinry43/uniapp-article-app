import request from "./request";

export const getLabelList = (data) => request({
    name: "getLabelList",
    data
})

export const getArticleList = (data) => request({
    name: "getArticleList",
    data
})