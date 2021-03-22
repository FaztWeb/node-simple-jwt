import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect("mongodb://localhost/simplejwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Database is connected to", db.connection.name);
})();
