import React from "react"
import Link from "next/link"

export function CategoryItem({ categoryName }) {
  return (
    <div className="flex flex-row mr-10 mt-10 ml-10 mb-6">
      <h1 className=" basis-1/5 navTitle text-4xl text-link-yellow">
        {categoryName}
      </h1>
    </div>
  )
}

function Category({ category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <a className="ml-10">
        <h1 className="navTitle text-xl Poppins-Bold">{category.name}</h1>
      </a>
    </Link>
  )
}

export default function Categories({ categories }) {
  return (
    <div className="flex flex-row mr-10 mt-10 ml-10 mb-6">
      <h1 className=" basis-1/5 navTitle text-5xl text-link-yellow">Blogs</h1>
      <div className="flex flex-row basis-4/5 justify-end text-white">
        {categories.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </div>
  )
}
