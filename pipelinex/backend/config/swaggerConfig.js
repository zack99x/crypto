const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Count of money',
            description: 'Crypto money information application',
            contact: {
                name: "Team"
            },
            servers: ["http://localhost:" + process.env.PORT || "8000"]
        }
    },
    apis: ['./docs/*.yaml'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}