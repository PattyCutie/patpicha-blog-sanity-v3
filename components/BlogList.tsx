import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  //console.log(posts.length);


  return (
    <div className="px-20">
      <div
        className="flex w-full h-[2px] items-center justify-center
      bg-gradient-to-r from-transparent via-pink-600 to-transparent m-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-12 p-20">
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div
              className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
            transition-transform duration-300 ease-out rounded-lg"
            >
              <Image
                className="object-cover object-left lg:object-center rounded-lg"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                sizes="50"
              />
              <div className="absolute flex justify-between bottom-0 w-full bg-opacity-20 bg-pink-600/20 backdrop-blur-lg rounded drop-shadow-lg text-pink-50 p-5">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className="bg-pink-600 text-center text-pink-50 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 flex-1 text-pink-600">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="line-clamp-2">{post.description}</p>
            </div>
            <div className="flex items-center p-4 gap-1 text-pink-600">
              <p className="">Read Post</p>
              <ArrowUpRightIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
