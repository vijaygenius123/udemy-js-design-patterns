const fs = require('fs')

class Journal{

    constructor() {
        this.entries = []
        this.count = 0
    }

    addEntry(text){
        const entry = `${this.count++}: ${text}`
        this.entries[this.count] = entry
        return entry
    }

    removeEntry(idx){
        delete this.entries[idx]
    }

    toString(){
        return Object.values(this.entries).join('\n')
    }

    saveToFile(fileName){
        fs.writeFileSync(fileName, this.toString());
    }
}

const j = new Journal()
j.addEntry('I wrote this')
j.addEntry('i had dinner')

console.log(j.toString())

j.saveToFile("Journal.txt")
