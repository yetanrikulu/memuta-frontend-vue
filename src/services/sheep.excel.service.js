import {api} from '@/api';

const sheepExcelUrl = 'sheep-excel/'

export default {
    async download(url) {
        return api.download(sheepExcelUrl + url);
    },
    async upload(url, payload) {
        return api.postAndDownload(sheepExcelUrl + url, payload);
    },
}