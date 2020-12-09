var { buildSchema } = require('graphql');

class Schema {

    createSchema() {
        return buildSchema(`
            input Outbreak {
                city: String!
                dayRecorded: String
                numInfected: Int
            }

            type OutbreakOutput {
                city: String!
                dayRecorded: String
                numInfected: Int
            }

            type Query {
                health: String
                listOutbreaks: [OutbreakOutput]
            }

            type Mutation {
                addOutbreak(outbreak: Outbreak): OutbreakOutput
            }
        `);
    }
}

module.exports = Schema;
