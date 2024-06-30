import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { dataTypes } from "@/lib/dataGenerator"
import { Card, CardContent } from "@/components/ui/card"
import { ListIcon, HashIcon } from "lucide-react"

interface DataGeneratorFormProps {
  selectedTypes: string[]
  setSelectedTypes: (types: string[]) => void
  count: number
  setCount: (count: number) => void
}

export function DataGeneratorForm({ selectedTypes, setSelectedTypes, count, setCount }: DataGeneratorFormProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {dataTypes.map((type) => (
            <Tooltip key={type}>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedTypes([...selectedTypes, type])
                      } else {
                        setSelectedTypes(selectedTypes.filter(t => t !== type))
                      }
                    }}
                  />
                  <Label htmlFor={type} className="text-sm flex items-center">
                    <ListIcon className="mr-2 h-4 w-4" />
                    {type}
                  </Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{`Generate random ${type}`}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Label htmlFor="count" className="flex-shrink-0 flex items-center">
            <HashIcon className="mr-2 h-4 w-4" />
            Items:
          </Label>
          <Input
            id="count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="w-20"
          />
        </div>
      </CardContent>
    </Card>
  )
}