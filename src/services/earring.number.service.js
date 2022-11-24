import {api} from '@/api';

const earringNumberUrl = 'earring-numbers/'

export default {
    async download(url) {
        return api.download(earringNumberUrl + url);
    },
}