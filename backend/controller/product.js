const productModel = require("../model/product");

const createProduct = async (req, res) => {
  //getting the text from user
  const { name, brand, category, price, description, img } =
    req.body;

  //validating the text data
  if (
    !name ||
    !brand ||
    !category ||
    !price ||
    !description ||
    !img
  ) {
    return res.status(401).json({
      message: "please fill the required field",
    });
  }
  try {
    //creating and saving the new paste in the db.
    const paste = await productModel.create({
      name,
      brand,
      category,
      price,
      description,
      img,
    });

    return res.status(201).json({
      message: "Product saved successfully in database!",
      paste,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const getProduct = async (req, res) => {
  const id = req.params._id.toString();
  try {
    const product_data = await productModel.find({
      _id: id,
    });
    if (!product_data) {
      return res.status(400).json({
        message: "product not found",
      });
    }
    return product_data;
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};
const updateProduct = async (req, res) => {
  const id = req.params._id.toString();
  const { name, brand, category, price, description, img } =
    req.body;
  try {
    const product_data = await productModel.find({
      _id: id,
    });
    if (!product_data) {
      return res.status(400).json({
        message: "product not found",
      });
    }
    const updated_data = await productModel.update({
      name,
      brand,
      category,
      price,
      description,
      img,
    });

    return res.status(200).json({
      data: updated_data,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const deleteProduct = async (req, res) => {
  //get the id from request params
  const id = req.params._id.toString();

  try {
    //if it's a valid ObjectId, proceed with `findByIdAndDelete` call.
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      //check whether the id is exist or not
      const Idexist = await productModel.findById(id);
      if (!Idexist) {
        return res.status(404).json({
          error: "Id doesn't exist",
        });
      }

      //find and delete the document according to the id
      const deletedDoc =
        await productModel.findByIdAndDelete(id);

      return res.status(204).json({
        message: "Document Deleted Successfully.",
        deletedDoc,
      });
    } else {
      return res.status(404).json({
        message: "invalid id ,please enter correct id!!",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
