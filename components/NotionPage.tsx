import { FC, lazy, Suspense } from 'react'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'

// Use React.lazy for client-side dynamic imports as next/dynamic is for Next.js
const Code = lazy(() =>
  import('react-notion-x/build/third-party/code').then((m) => ({ default: m.Code }))
)

const Collection = lazy(() =>
  import('react-notion-x/build/third-party/collection').then((m) => ({ default: m.Collection }))
)

const Equation = lazy(() =>
  import('react-notion-x/build/third-party/equation').then((m) => ({ default: m.Equation }))
)

interface NotionPageProps {
  recordMap: ExtendedRecordMap
}

export const NotionPage: FC<NotionPageProps> = ({ recordMap }) => {
  if (!recordMap) {
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<div>Loading components...</div>}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
        }}
      />
    </Suspense>
  )
}
