require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("car doctor server runnig");
});

const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.2umnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const servicesListCollection = client
      .db("carDoctorDB")
      .collection("servicesList");

    //auth related api
    app.post("/jwt", (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.secret, { expiresIn: "1h" });
      console.log("generated token:", token);
      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
        })
        .send("successfully generated token");
    });

    app.post("/logout", (req, res) => {
      console.log("logout request received");
      res
        .status(200)
        .clearCookie("token", { httpOnly: true })
        .send("cookie cleared");
    });

    //services related apis
    app.get("/services", async (req, res) => {
      const options = {
        projection: { title: 1, price: 1, img: 1, _id: 0, service_id: 1 },
      };
      const result = await servicesListCollection.find({}, options).toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { service_id: id };
      const result = await servicesListCollection.findOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(process.env.PORT, () => {
  console.log(`car doctor server running on port ${process.env.PORT}`);
});
