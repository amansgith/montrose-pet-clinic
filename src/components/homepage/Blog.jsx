import Image from "next/image";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Tips for Pet Care",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn how to keep your pet healthy and happy with these simple tips.",
  },
  {
    id: 2,
    title: "Why Regular Vet Visits Matter",
    image: "https://plus.unsplash.com/premium_photo-1661961347317-41f7a010a441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover the importance of regular check-ups for your furry friends.",
  },
  {
    id: 3,
    title: "Best Foods for Your Pet",
    image: "https://images.unsplash.com/photo-1596854331442-3cf47265cefb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A guide to nutritious food options for cats and dogs.",
  },
];

const BlogSection = () => {
  return (
    <div className="px-6 bg-gray-100 md:px-16 py-12">
      <h2 className="text-3xl text-primary font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
