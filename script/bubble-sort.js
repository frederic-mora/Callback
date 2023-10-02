
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

