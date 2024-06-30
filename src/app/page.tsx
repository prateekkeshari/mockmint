"use client"

import { useState, useEffect, useCallback } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { generateRandomData, dataTypeCategories } from "@/lib/dataGenerator"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MultiSelect } from "@/components/MultiSelect"
import { GeneratedDataDisplay } from "@/components/GeneratedDataDisplay"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, Minimize2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Name', 'Email', 'Avatar URL', 'Hex Color'])
  const [count, setCount] = useState<number>(7)
  const [generatedData, setGeneratedData] = useState<Record<string, string[]>>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true)
  const [isMaximized, setIsMaximized] = useState<boolean>(false)
  const { theme } = useTheme()

  const handleGenerate = useCallback(() => {
    setIsLoading(true)
    const newData = Object.fromEntries(
      selectedTypes.map(type => [type, generateRandomData(type, count)])
    )
    setGeneratedData(newData)
    setIsLoading(false)
    setIsInitialLoad(false)
  }, [selectedTypes, count])

  useEffect(() => {
    handleGenerate()
  }, [handleGenerate, selectedTypes, count])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault()
        handleGenerate()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleGenerate])

  const availableTypes = Object.values(dataTypeCategories).flat().map(type => ({ value: type, label: type }))

  const handleExport = (format: 'csv' | 'json') => {
    let content = ''
    let mimeType = ''
    let fileExtension = ''

    if (format === 'csv') {
      const headers = Object.keys(generatedData).join(',') + '\n'
      const maxLength = Math.max(...Object.values(generatedData).map(arr => arr.length))
      const rows = Array.from({ length: maxLength }, (_, i) => 
        Object.keys(generatedData).map(type => generatedData[type][i] || '').join(',')
      ).join('\n')
      content = headers + rows
      mimeType = 'text/csv'
      fileExtension = 'csv'
    } else if (format === 'json') {
      content = JSON.stringify(generatedData, null, 2)
      mimeType = 'application/json'
      fileExtension = 'json'
    }

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `export.${fileExtension}`
    a.click()
    URL.revokeObjectURL(url)
  }

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  return (
    <TooltipProvider>
      <motion.main
        className={`flex flex-col h-screen overflow-hidden bg-background text-foreground justify-center items-center ${isMaximized ? 'p-0' : 'p-4 sm:p-10'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className={`${isMaximized ? 'w-full h-full' : 'w-full max-w-3xl'} flex flex-col ${isMaximized ? 'p-4' : 'p-4 sm:p-10'}`}
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {!isMaximized && (
            <Card className="shadow-xs">
              <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center mb-2">
                  <div className="flex flex-col">
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl sm:text-2xl font-bold mb-2 flex items-center"
                    >
                      <img src="/mockmint.svg" alt="Mockmint Logo" className="h-6 w-6 mr-2" />
                      <span className="drop-shadow-[0_1px_12px_rgba(255,255,255,0.5)]">Mockmint</span>
                    </motion.h1>  
                    <p className="text-sm text-muted-foreground font-normal">
                      Generate mock data for your projects.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThemeToggle />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={toggleMaximize}
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Maximize table</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          )}
          <motion.div 
            className={`flex-1 overflow-hidden flex flex-col ${isMaximized ? 'py-0' : 'py-6'}`}
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {!isMaximized && (
              <div className="space-y-6 mb-4">
                <div className="flex items-center space-x-4 justify-center">
                  <MultiSelect
                    options={availableTypes}
                    selectedValues={selectedTypes}
                    onChange={(newSelectedTypes) => {
                      setSelectedTypes(newSelectedTypes)
                      setIsInitialLoad(false)
                    }}
                  />
                
                  <Button onClick={() => {
                    setIsInitialLoad(false)
                    handleGenerate()
                  }}>
                    Randomize <span className="ml-2 text-muted-foreground">⌘↵</span>
                  </Button>
                </div>
              </div>
            )}
  

            <AnimatePresence mode="wait">
              <motion.div 
                className="flex-1 overflow-y-auto relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut"
                }}
                style={{ 
                  width: '100%', 
                  height: isMaximized ? '100vh' : '60vh',
                  maxHeight: isMaximized ? '100vh' : '60vh',
                  backdropFilter: 'blur(50px)',
                }}
              >
                {isLoading ? (
                  <GeneratedDataDisplay
                    data={{
                      ...generatedData,
                      ...Object.fromEntries(selectedTypes.map(type => [type, ['']]))
                    }}
                    onExport={handleExport as (format: "csv" | "json" | "excel") => void}
                    count={count}
                    setCount={setCount}
                  />
                ) : (
                  <GeneratedDataDisplay
                    data={generatedData}
                    onExport={handleExport as (format: "csv" | "json" | "excel") => void}
                    count={count}
                    setCount={setCount}
                  />
                )}
                {isMaximized && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={toggleMaximize}
                      >
                        <Minimize2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Minimize table</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        {!isMaximized && (
          <footer className="fixed bottom-0 left-0 right-0 p-4 text-sm text-muted-foreground text-center bg-background">
            Made by <a href="https://prateekkeshari.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FE6228] transition-colors duration-200">Prateek Keshari</a> in Berlin.
          </footer>
        )}
        <Toaster />
      </motion.main>
    </TooltipProvider>
  )
}
