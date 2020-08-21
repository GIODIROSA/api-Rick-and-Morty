import axios from 'axios';

//clase constructora
class Personajes {
        constructor (id, name, status, species, type, image, gender){
                this.id = id;
                this.name = name;
                this.status = status;
                this.species = species;
                this.type = type;
                this.image = image;
                this.gender = gender;
        }
        

}


//function IIFE llamado de la api
const apiRickandMorty= (()=>{
        return new Promise(async (resolve,reject)=>{
                try {
                        const baseUrl= await axios.get("https://rickandmortyapi.com/api/character");
                        let datos = baseUrl.data.results
                        let personajes= [];

                        datos.forEach(el => {

                                personajes.push(new Personajes (el.id, el.name, el.status,el.species, el.type, el.image, el.gender));
                                
                        });
                        resolve(personajes);
                        reject(`Lo sentimos algo salio mal`);
     
                } catch (error) {
                        console.log(`No lo sé rick: ${error}`);
                        
                }
        })
      
})();

export default apiRickandMorty



   





   






