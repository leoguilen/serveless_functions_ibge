import api from '../config/api';

exports.handler = async () => {
    try {
        const estados = await api.get('/estados');
        return {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':
                    'Origin, X-Requested-With, Content-Type, Accept',
            },
            statusCode: 200,
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