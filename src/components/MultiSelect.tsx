import { useState, useEffect, useRef } from "react"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"
import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from "@/components/ui/command"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MultiSelectProps {
  options: { value: string, label: string }[]
  selectedValues: string[]
  onChange: (selected: string[]) => void
}

export function MultiSelect({ options, selectedValues, onChange }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const commandInputRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setIsOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      commandInputRef.current?.focus()
    }
  }, [isOpen])

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value])
    } else {
      onChange(selectedValues.filter(v => v !== value))
    }
  }

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && filteredOptions.length > 0) {
      const firstOption = filteredOptions[0]
      handleCheckboxChange(firstOption.value, !selectedValues.includes(firstOption.value))
    }
  }

  const sortedOptions = [
    ...options.filter(option => selectedValues.includes(option.value)),
    ...options.filter(option => !selectedValues.includes(option.value))
  ]

  const removeSelectedValue = (value: string) => {
    onChange(selectedValues.filter(v => v !== value))
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <Input
          ref={inputRef}
          placeholder={selectedValues.length > 0 ? "Add data..." : "Add data..."}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyPress={handleKeyPress}
          className="w-full pr-16"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm hidden sm:inline-block">⌘ K</span>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <div tabIndex={-1} />
        </DrawerTrigger>
        <DrawerContent className="fixed inset-x-0 bottom-0 mt-24 rounded-t-[10px]">
          <div className="h-full px-4 pb-4 flex justify-center">
            <div className="w-full max-w-sm mt-5">
              <Command className="rounded-lg border shadow-md">
                <div className="relative">
                  <CommandInput
                    ref={commandInputRef}
                    placeholder="Search..."
                    value={searchTerm}
                    onValueChange={setSearchTerm}
                    className="border-none focus:ring-0 pr-10"
                  />
                </div>
                <CommandList className="p-2 space-y-2 max-h-[300px] overflow-y-auto">
                  <CommandGroup>
                    {sortedOptions.map(option => (
                      <CommandItem 
                        key={option.value} 
                        onSelect={() => handleCheckboxChange(option.value, !selectedValues.includes(option.value))}
                        className="flex items-center space-x-4 px-2 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      >
                        <div className="flex items-center space-x-3 flex-grow">
                          <Checkbox
                            id={option.value}
                            checked={selectedValues.includes(option.value)}
                            onCheckedChange={(checked) => handleCheckboxChange(option.value, checked as boolean)}
                          />
                          <Label htmlFor={option.value} className="flex-grow cursor-pointer">{option.label}</Label>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}