import axios from "axios";
// const baseUrl ="http://192.168.1.210:26910/experiencemanagerframe/api/110/"
const baseUrl = process.env.urls.experienceUrl;
const leadUrl = process.env.urls.leadUrl;
    // "http://localhost:26910/experiencemanagerframe/api/110";
export const getHttpService = async (resourceUrl, actionTag) => {
    
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + process.env.marketplaceKey,
        actiontag: actionTag,
        responseFlag: "on",
        apiType: "G",
    };
    return await axios.get(baseUrl + resourceUrl, { headers });
};
export const postHttpService = async (resourceUrl, params, actionTag) => {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + process.env.marketplaceKey,
        actiontag: actionTag,
        responseFlag: "on",
        apiType: "G",
    };
    // debugger
    return await axios.post(baseUrl + resourceUrl, params, { headers });
};