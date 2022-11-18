import axios from 'axios';
import {startDownload} from "@/utils/httpClientUtils";

class HttpService {

    constructor(options) {
        this.instance = axios.create(options);
    }

    async get(url, config) {
        const {data} = await this.instance.get(url, config);
        return data;
    }

    async post(url, payload) {
        return this.instance
            .post(url, payload)
            .then(({data}) => data)
            .catch((err) => {
                return Promise.reject(err.data ?? err);
            })
    }

    async delete(url) {
        return this.instance
            .delete(url)
            .then(({data}) => data)
            .catch((err) => {
                return Promise.reject(err.data ?? err);
            })
    }

    async postAndDownload(url, payload) {
        try {
            const formData = new FormData();
            formData.append("files", payload);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "content-disposition": "attachment; filename=hatali.xlsx"
                }
            }
            const {data} = await this.instance.post(url, formData, config);
            return data;
        } catch (err) {
            throw {...err, message: err.data?.message ?? 'An error occured.'};
        }
    }

    async download(url, payload) {
        let response;
        response = await this.instance.get(url, {
            responseType: 'arraybuffer',
        });
        return startDownload(response, payload);
    }

    async upload(url, data, config) {
        return await this.instance.post(url, data, config);
    }

}

export default HttpService;