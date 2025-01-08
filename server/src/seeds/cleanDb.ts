import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const ref = models[modelName].db.db;

    if (ref) {
      let modelExists = await ref.listCollections({
        name: collectionName
      }).toArray()
  
      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    }

  } catch (err) {
    throw err;
  }
}
