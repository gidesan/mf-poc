import request from './request';

export const installModule = async(id) => {
  return request(`api/modules/install/${id}`);
}

export const uninstallModule = async(id) => {
  return request(`api/modules/uninstall/${id}`);
}

export const fetchModuleById = async(id) => {
  return request(`api/modules/id/${id}`);
}

export const fetchModules = async() => {
  return request('api/modules/all');
}

export const fetchInstalledModules = async() => {
  return request('api/modules/installed');
}
