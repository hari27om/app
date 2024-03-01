import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import Brand from "./models/brandModel.js";
import Card from "./models/cardModel.js";
import Divider from "./models/dividerModel.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

// Importing the necessary data after they are defined
import users from "./data/users.js";
import cards from "./data/cards.js";
import brands from "./data/brands.js";
import dividers from "./data/dividers.js";
import products from "./data/products.js";

const importData = async () => {
  try {
    await Brand.deleteMany();
    await Card.deleteMany();
    await Divider.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleBrands = brands.map((brand) => {
      return { ...brand, user: adminUser };
    });
    await Brand.insertMany(sampleBrands);

    const sampleCards = cards.map((card) => {
      return { ...card, user: adminUser };
    });
    await Card.insertMany(sampleCards);

    const sampleDividers = dividers.map((divider) => {
      return { ...divider, user: adminUser };
    });
    await Divider.insertMany(sampleDividers);

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Brand.deleteMany();
    await Card.deleteMany();
    await Divider.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
