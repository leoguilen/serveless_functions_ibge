import api from '../config/api';

exports.handler = async () => {
    try {
        const estados = await api.get('/estados');

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(estados.data)
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    error: {
                        name: err.name,
                        message: err.message,
                    }
                })
        };
    }
};