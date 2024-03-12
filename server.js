const express = require("express");
const mongoose= require("mongoose")
const Student=require('./models/Students.model')
const app = express();
 app.use(express.json())
app.get("/", (req, res) => {
  res.send({ message: "all items " });
});
app.post("/", async (req, res) =>  {
        try {
            const student = await Student.create(req.body)
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json({ 'message': error.message })
        }

})

app.put("/:id", (req, res) => res.send({ message: "item  is updated " }));

app.delete("/:id", (req, res) => res.send({ message: "item  is deleted " }));
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.hl7ema0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not conneced");
  });
app.listen(3000, console.log("hii"));
