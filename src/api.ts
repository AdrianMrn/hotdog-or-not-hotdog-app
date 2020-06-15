import Axios from 'axios';

export default {
    getModel: () => {
        const cancelToken = Axios.CancelToken.source();

        const response = Axios.get('', { cancelToken: cancelToken.token });

        return { cancel: cancelToken.cancel, response };
    },

    classifyPicture: (image: string, modelId: number) => {
        const cancelToken = Axios.CancelToken.source();

        const response = Axios.post('', { image, modelId }, { cancelToken: cancelToken.token });

        return { cancel: cancelToken.cancel, response };
    },
};
