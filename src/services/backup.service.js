import {api} from '@/api';

const backupUrl = 'backup/'

export default {
    get(url) {
        return api.get(backupUrl + url);
    },
    upload(url, payload) {
        return api.postAndDownload(backupUrl + url, payload);
    },
    download(url) {
        return api.download(backupUrl + url);
    },
    delete(url) {
        return api.delete(backupUrl + url);
    }
}