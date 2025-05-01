import Image from "next/image";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Best Pet Care at Montrose Pet Clinic",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to keep your pet healthy and happy with these simple tips.",
    href: "/blogs/blog1",
  },
  {
    id: 2,
    title: "Understanding and Managing Your Pet’s Anal Gland Health",
    image: "https://plus.unsplash.com/premium_photo-1661961347317-41f7a010a441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the importance of regular check-ups for your furry friends.",
    href: "/blogs/blog2",
  },
  {
    id: 3,
    title: "Protect your pets and family with regular deworming.",
    image: "https://images.unsplash.com/photo-1596854331442-3cf47265cefb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Imperative of Regular Deworming for Dogs and Cats",
    href: "/blogs/blog3",
  },
];

const BlogSection = () => {
  return (
    <div className="px-6 md:px-16 py-20">
      <h2 className="text-3xl text-primary font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
            <Link href={blog.href}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
