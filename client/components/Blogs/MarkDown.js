import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import remarkGfm from "remark-gfm"

export default function MarkDown({ content }) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      className="flex  flex-col w-4/5 md:w-full sm:w-full"
    >
      {content}
    </ReactMarkdown>
  )
}
