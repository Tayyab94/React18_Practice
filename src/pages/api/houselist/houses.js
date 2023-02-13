// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'houses.json');
  
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
   
    res.status(200).json({housesList:objectData})

  }