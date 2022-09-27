import React from "react"
import Link from "next/link"

export function CategoryItem({ category }) {
  return (
    <div className=" text-2xl py-4 px-4 ml-0 mr-4 m-3 bg-white  text-dark border border-dark itim">
      {category.name}
    </div>
  )
}

export function CategoryButton({ category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className=" text-2xl py-4 px-4 ml-0 mr-4 m-3 bg-white drop-shadow-md hover:drop-shadow-2xl text-dark border border-dark itim">
        {category.name}
      </div>
    </Link>
  )
}
