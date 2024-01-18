// set a value to the hash table

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        const index= this.hash(key);
        this.table[index]=value;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const hastTable = new HashTable(50);

hastTable.set('name',"Anu");
hastTable.set('age',21);
hastTable.set('mane','hai')
hastTable.display();