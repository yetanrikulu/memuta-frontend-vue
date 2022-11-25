import {api} from '@/api';

const sheepUrl = 'sheep/'

export default {
    async get(url, params) {
        return api.get(sheepUrl + url, params);
    },
}