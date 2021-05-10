import request from './request';

export const installModule = async(id) => {
  return request(`/modules/install/${id}`);
}

export const uninstallModule = async(id) => {
  return request(`/modules/uninstall/${id}`);
}

export const fetchModules = async() => {
  return request('/modules/all');
}

export const fetchInstalledModules = async() => {
  return request('/modules/installed');
}