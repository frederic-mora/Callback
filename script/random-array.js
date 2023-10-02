        /** createRandomArray 
         *  paramètre size : taille du tableau d'entiers à générer
         *  paramètre max : les nombres du tableau généré seront compris entre 0 et max (exclus)
         *  > retourne un tableau de size entiers compris entre 0 et max.
        */
        let createRandomArray = function(size, max){
            let res = [];
            for(let i=0; i<size; i++){
                res.push( Math.floor(Math.random() * max) );
            }
            return res;
        }
