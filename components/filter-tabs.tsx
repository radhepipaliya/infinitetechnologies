"use client"

import { Button } from "@/components/ui/button"

interface FilterTabsProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterTabs({ categories, selectedCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`transition-all duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
              : "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
