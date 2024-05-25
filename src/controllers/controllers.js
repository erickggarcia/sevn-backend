import fs from 'node:fs/promises'

class RetrieveDatabaseInformation {
    #database = {}

    constructor () {
        fs.readFile(databasePath, 'utf-8')
            .then(data => {
                this.#database = JSON.parse(data)
            })
    }

    selectAll(table) {
        const data = this.#database[table] ?? []
        return data
    }

}