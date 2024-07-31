import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food items

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res,json({success:false,message:"Error adding food"})
    }
}


// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error fetching lists of foods"})
    }
}

// remove food items
const removeFood = async (req,res) => {
    try {
        // find the food item
        const food = await foodModel.findById(req.body.id);
        // delete the image from upload folder
        fs.unlink(`uploads/${food.image}`, ()=>{})
        // delete the data from mongodb database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        consol.log(error)
        res.json({success:false, message:"Failed Deleting Food"})
    }
}


export {addFood, listFood, removeFood}