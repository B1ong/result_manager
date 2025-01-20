import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URL;

function connectDB() {
  mongoose.connect(MONGO_URL);
  const db = mongoose.  console.log('Error connecting database', err);
connection;
db.on('error',(err)=> {
});
db.once('connected',()=> {
  console.log('Database connected');
});
}
export{ connectDB}

