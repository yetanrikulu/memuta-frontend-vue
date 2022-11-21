import {api} from '@/api';

const backupUrl = 'backup/'

export default {
    async get(url) {
        return api.get(backupUrl + url);
    },
    async upload(url, payload) {
        return api.postAndDownload(backupUrl + url, payload);
    },
    async download(url) {
        return api.download(backupUrl + url);
    },
    async delete(url) {
        return api.delete(backupUrl + url);
    }
}