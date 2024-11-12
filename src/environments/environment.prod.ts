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
  getlistMechanic: `${apiUrl}user/listMechanic`, // Se puede usar paginacion /1
  

  postSvCreate: `${apiUrl}service/create-service`,
  getSv: `${apiUrl}service/services`,
  getSvRename: `${apiUrl}service/service`,
  putSvUpdate: `${apiUrl}service/upgrade-service`,
  delSvDelete: `${apiUrl}service/delete`,
  delSvHardDelete: `${apiUrl}service/permanent-erase`,
  putSvReactivate: `${apiUrl}service/reactivate`,
  
  postApptCreate: `${apiUrl}appointment/create-appointment`,
  getApptTest: `${apiUrl}`,
  getApptGet: `${apiUrl}service/get-appointment`,
  patchApptUpdate: `${apiUrl}service/update-appointment`,
  delApptDelete: `${apiUrl}service/delete-appointment`,
  getApptList: `${apiUrl}appointment/list-appointment`,
  
};  