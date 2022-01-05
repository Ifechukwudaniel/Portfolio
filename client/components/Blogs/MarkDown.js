import React from "react"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import remarkGfm from "remark-gfm"

export default function MarkDown({ content }) {
  return (
    <ReactMarkdown
      className="flex  flex-col w-4/5 md:w-full sm:w-full"
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ node, children }) => {
          if (node.children[0].tagName === "img") {
            const image = node.children[0]
            return (
              <div className="image">
                <Image
                  src={`/images/${image.properties.src}`}
                  alt={image.properties.alt}
                  width="600"
                  height="300"
                />
              </div>
            )
          }
          // Return default child if it's not an image
          return <p>{children}</p>
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
