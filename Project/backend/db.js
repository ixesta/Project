const neo4j = require('neo4j-driver');
const driver = neo4j.v1.driver("bolt://localhost:7687", neo4j.v1.auth.basic("neo4j", "123456"));

const session = driver.session();

session
    .run('LOAD CSV WITH HEADERS FROM "file:///home/lorelai/Desktop/NorthcodersWork/finalProject/data/comments.csv" AS row RETURN row')
    .then(result => console.log(result))
    .then(() => session.close())
    .catch(function (error) {
        console.log(error);
});
