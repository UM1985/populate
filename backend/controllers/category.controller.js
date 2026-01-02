const Category = require("../models/category.model");
const { createModel, viewModel } = require("../utils/CommonModel");

exports.store = async (req, res) => {
  const { name, status } = req.body;
  const result = await createModel(
    Category,
    { name, status },
    "Category Added"
  );
  res.json(result)
};

exports.index = async (req,res)=>{
    const result = await viewModel(Category)
    res.json(result)
}
