// src/environments/environment.ts
const apiUrl = 'https://api-workshop-app.onrender.com/api/'

export const environment = {
    production: false,
    postUserLogin: `${apiUrl}user/login`,
    postUserRegister: `${apiUrl}user/register`,
    getUserProfile: `${apiUrl}user/profile`,
    putUserUpdate: `${apiUrl}user/updateUsers`,
    patchUserDelete: `${apiUrl}user/delete`,
    getUserList: `${apiUrl}user/listUsers`,
    getUserListCustomer: `${apiUrl}user/listClients`,
    patchUserActiveCustomer: `${apiUrl}user/activeClients`,
    putUpdateProfile: `${apiUrl}user/updateProfile`,

    postSvCreate: `${apiUrl}service/create-service`,
    getSv: `${apiUrl}service/services`,
    getSvRename: `${apiUrl}service/service`,
    putSvUpdate: `${apiUrl}service/upgrade-service`,
    delSvDelete: `${apiUrl}service/delete`,
    delSvHardDelete: `${apiUrl}service/permanent-erase`,
    putSvReactivate: `${apiUrl}service/reactivate`,
    
    postApptCreate: `${apiUrl}service/create-appointment`,
    getApptTest: `${apiUrl}`,
    getApptGet: `${apiUrl}service/get-appointment`,
    patchApptUpdate: `${apiUrl}service/update-appointment`,
    delApptDelete: `${apiUrl}service/delete-appointment`,
    
    getTecTest: `${apiUrl}mechanic/test-mechanic`,
    postTecCreate: `${apiUrl}mechanic/create-mechanic`,
    getTecList: `${apiUrl}mechanic/list-mechanics`,
    getTecGet: `${apiUrl}mechanic/get-mechanics`,
    patchTecUpdate: `${apiUrl}mechanic/update-mechanic`,
    patchTecDelete: `${apiUrl}mechanic/delete-mechanic`,
    patchTecHardDelete: `${apiUrl}mechanic/permanent-erase`,
    delTecLogin: `${apiUrl}mechanic/loginMechanic`,
  };  