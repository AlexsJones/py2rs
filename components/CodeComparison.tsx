'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-rust'

interface CodeComparisonProps {
  pythonCode: string
  rustCode: string
  title?: string
  description?: string
}

export default function CodeComparison({ 
  pythonCode, 
  rustCode, 
  title, 
  description 
}: CodeComparisonProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [pythonCode, rustCode])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-0">
        {/* Python Code */}
        <div className="border-r border-gray-200 dark:border-gray-700">
          <div className="bg-python-blue text-white px-4 py-2 text-sm font-medium flex items-center">
            <div className="w-3 h-3 bg-python-yellow rounded-full mr-2"></div>
            Python
          </div>
          <div className="p-4">
            <pre className="!bg-gray-100 dark:!bg-gray-900 !text-gray-900 dark:!text-gray-100 !p-4 rounded-lg overflow-x-auto !border !border-gray-300 dark:!border-gray-700">
              <code className="language-python">{pythonCode}</code>
            </pre>
          </div>
        </div>

        {/* Rust Code */}
        <div>
          <div className="bg-rust-orange text-white px-4 py-2 text-sm font-medium flex items-center">
            <div className="w-3 h-3 bg-orange-300 rounded-full mr-2"></div>
            Rust
          </div>
          <div className="p-4">
            <pre className="!bg-gray-100 dark:!bg-gray-900 !text-gray-900 dark:!text-gray-100 !p-4 rounded-lg overflow-x-auto !border !border-gray-300 dark:!border-gray-700">
              <code className="language-rust">{rustCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
