import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import cloudinary from "@/lib/config/cloudinary";

const { NextResponse } = require("next/server");
const fs = require("fs");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API endpoint to get all blogs

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API endpoint for Cloudinary to store images
export async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { image } = req.body; // Base64 image string or file URL

      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: "uploads", // Optional: Organize images in a folder
      });

      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

// API endpoint for uploading blogs

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ success: false, msg: "No image uploaded" });
    }

    // Convert File to Buffer
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(
      `data:${image.type};base64,${buffer.toString("base64")}`,
      { folder: "blogs" }
    );

    // Blog Data with Cloudinary URL
    const blogData = {
      title: formData.get("title"),
      thumbnailDescription: formData.get("thumbnailDescription"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      authorImg: formData.get("authorImg"),
      image: uploadResponse.secure_url, // Cloudinary Image URL
    };

    await BlogModel.create(blogData);

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, msg: "Error adding blog" });
  }
}

// Creating API Endpoint to delete Blog

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
