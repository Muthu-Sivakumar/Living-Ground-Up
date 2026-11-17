import { MongoClient, ServerApiVersion } from 'mongodb';

// Replace the placeholder with your Atlas connection string
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri)
