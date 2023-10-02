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

       
        /** bubbleSort
         *  paramètre T : un tableau d'entiers
         *  La fonction trie T selon l'algorithme du tri bulle
         *  Elle retourne le nombre d'échanges effectués
         */
        let bubbleSort = function(T){
            let count = 0;
            let sorted = false;
            while(!sorted){
                sorted=true;
                for(let i=0; i<T.length-1; i++)
                {
                    if ( T[i]>T[i+1] ){
                        ++count;
                        let tmp = T[i];
                        T[i] = T[i+1];
                        T[i+1] = tmp;
                        sorted=false;
                    }
                }
            }
            return count;
        }


         /** combsort
         *  paramètre T : un tableau d'entiers
         *  La fonction trie T selon l'algorithme du tri à peigne
         *  Elle retourne le nombre d'échanges effectués
         */
         let combsort = function(T){
            let count=0;
          
            let interval = T.length;

            while (interval > 1)
            {
                interval = Math.floor(interval*0.77);

                for(let i=0; i<T.length-interval; i++)
                {
                    if ( T[i]>T[i+interval] ){
                        ++count;
                        let tmp = T[i];
                        T[i] = T[i+interval];
                        T[i+interval] = tmp;
                    }
                }
            }
    
            return bubbleSort(T) + count;
        }