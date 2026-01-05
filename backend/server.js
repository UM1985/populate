const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT ||3000;  


app.use(express.json())
app.use(express.urlencoded())

require("./config/db")()

// import routing 

const categoryRoute= require('./routes/category.route')
const subCategoryRoute= require('./routes/subcategory.route')
const productRoute= require('./routes/product.route')
const userRoute= require('./routes/user.route')


// api routing  

app.use('/api/category',categoryRoute)
app.use('/api/subcategory',subCategoryRoute)
app.use('/api/product',productRoute)
app.use('/api/user',userRoute)



app.get("/", (req, res) => {
  res.send("API is working properly");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
