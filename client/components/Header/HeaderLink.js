import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function HeaderLink({ href, text }) {
  const router = useRouter()
  return (
    <div className="basis-1/6">
      <Link href={href}>
        <a
          href={href}
          className={`menu-link ${
            router.pathname === href ? "text-link-yellow" : "text-link-gray"
          }`}
        >
          {text}
        </a>
      </Link>
    </div>
  )
}
