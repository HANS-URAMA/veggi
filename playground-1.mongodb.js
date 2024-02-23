// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('comp2068g');

// Create a new document in the collection.
db.getCollection('media').insertOne({
    "title": "Grown-ish",
    "releaseYear": 2018,
    "provider": "Netflix",
    "status": "Done",
    "rating": 9,
    "username": "hans"
});
db.getCollection('media').insertOne({
    "title": "Stargirl",
    "releaseYear": 2022,
    "provider": "Hulu",
    "username": "hans"
});
