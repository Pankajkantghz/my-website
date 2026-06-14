import { JSX, ReactNode } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from './counter'

type CodeProps =
  React.HTMLAttributes<HTMLElement> & {
    children?: ReactNode
  }

function Code({
  children,
  ...props
}: CodeProps) {
  const code =
    typeof children === 'string'
      ? children
      : Array.isArray(children)
        ? children.join('')
        : ''

  const codeHTML =
    highlight(code)

  return (
    <code
      {...props}
      dangerouslySetInnerHTML={{
        __html:
          codeHTML
      }}
    />
  )
}

const components = {
  code: Code,
  Counter
}

export default function MDXContent(
  props:
    JSX.IntrinsicAttributes &
    MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...components,
        ...(props.components ||
          {})
      }}
    />
  )
}