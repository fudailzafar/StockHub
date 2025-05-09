"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    thumbnailDescription: "",
    description: "",
    category: "Introduction",
    author: "Fudail Mohammed Zafar",
    authorImg: "/author_img.png",
    image: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file); // Save the file object
      setData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file), // Create a temporary URL for preview
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("thumbnailDescription", data.thumbnailDescription);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null);
        setData({
          title: "",
          thumbnailDescription: "",
          description: "",
          category: "Fundamental",
          image: "",
        });
      } else {
        toast.error("Error adding blog");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading blog");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={data.image || "/upload_area.png"}
            width={140}
            height={70}
            alt=""
          />
        </label>

        <input onChange={onImageChange} type="file" id="image" hidden />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="rounded-sm w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Your blog title here"
          required
        />
        <p className="text-xl mt-4">Thumbnail Description</p>
        <input
          name="thumbnailDescription"
          onChange={onChangeHandler}
          value={data.thumbnailDescription}
          className="rounded-sm w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          maxLength={120}
          placeholder="Your thumbnail description here"
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          {data.thumbnailDescription.length}/120 characters
        </p>
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="rounded-sm w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Your blog content here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="rounded-sm w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Introduction">Introduction</option>
          <option value="Technical">Technical</option>
          <option value="Fundamental">Fundamental</option>
          <option value="Personal">Personal</option>
        </select>
        <br />
        <button type="submit" className="my-8">
          <span className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            ADD BLOG
          </span>
        </button>
      </form>
    </>
  );
};

export default page;
