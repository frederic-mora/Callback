
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