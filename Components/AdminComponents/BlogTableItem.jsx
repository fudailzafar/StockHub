import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : "/author_img.png"}
          alt=""
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="text-xs sm:text-sm px-2 sm:px-6 py-4">
        {title ? title : ""}
      </td>
      <td className="px-2 sm:px-6 py-4 hidden sm:flex">
        {BlogDate.toDateString()}
      </td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-2 sm:px-6 text-center py-4 cursor-pointer"
      >
        <X />
      </td>
    </tr>
  );
};

export default BlogTableItem;
