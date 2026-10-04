'use strict';

const { default: axios } = require("axios");
const { DynamoDBController } = require("./dynamodb.controller");

const dbController = new DynamoDBController();

class KittyController {
    constructor(){}

    async getCoolCat(){
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            const url = response.data[0].url;
            dbController.storeAnimal("cat", url);
            return url
        }catch (error){
            console.log(error);
        }
    }
}

module.exports = {KittyController};