import fs from 'node:fs/promises'

const databasePath = new URL('../db/db.json', import.meta.url)

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

    selectArticleById(table, id) {
        const data = this.#database[table] ? this.#database[table].find((article) => {
            return article.id === id
        })
        : []

        return data
    }
}

export const Database = new RetrieveDatabaseInformation()