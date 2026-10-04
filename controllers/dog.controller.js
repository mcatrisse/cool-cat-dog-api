'use strict';

const { default: axios } = require("axios");
const { DynamoDBController } = require("./dynamodb.controller");

const dbController = new DynamoDBController();

class DogController {
    constructor(){
    }

    async getCoolDog(){
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const url = response.data.message;
            dbController.storeAnimal("dog", url);
            return url;
        }catch (error){
            console.log(error);
        }
    }
}

module.exports = {DogController};