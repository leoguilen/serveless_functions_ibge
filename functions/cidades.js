import api from '../config/api';

exports.handler = async (event, context) => {
    try {
        const { uf } = event.queryStringParameters;

        const cidades = await api.get(`/estados/${uf}/municipios`);
        const cidadeNomes = cidades.data.map(
            cidade => { return { nome: cidade.nome } });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cidadeNomes)
        }
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