import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { countries } from 'countries-list';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, FileJson } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useTheme } from "next-themes"
import { FileIcon, defaultStyles } from 'react-file-icon'
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard } from 'react-icons/fa';
import { 
  SiJavascript, SiPython, SiCplusplus, 
  SiRuby, SiPhp, SiGo, SiRust, SiSwift, SiKotlin 
} from 'react-icons/si'
import { FaChrome, FaFirefox, FaSafari, FaEdge, FaInternetExplorer } from 'react-icons/fa'
import ReactCountryFlag from "react-country-flag"

interface GeneratedDataDisplayProps {
  data: Record<string, string[]>
  onExport: (format: 'csv' | 'json') => void
  count: number
  setCount: (count: number) => void
}
import { NumberInput } from "@/components/NumerInput";

export function GeneratedDataDisplay({ 
  data, 
  onExport, 
  count,
  setCount,
}: GeneratedDataDisplayProps) {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      style: {
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
      },
    });
  };

  const handleCopyAll = () => {
    const textToCopy = Object.entries(data).map(([type, values]) => `${type}\n${values.join('\n')}`).join('\n\n');
    handleCopy(textToCopy);
  };

  const maxItems = Math.min(count, Math.max(...Object.values(data).map(values => values.length), 0));

  const getCountryCode = (countryName: string): string => {
    const normalizedName = countryName.toLowerCase().trim();
    const countryEntry = Object.entries(countries).find(([code, country]) => 
      country.name.toLowerCase() === normalizedName
    );
    
    if (countryEntry) {
      return countryEntry[0];
    }

    // Fallback for special cases
    const specialCases: { [key: string]: string } = {
      'united states': 'US',
      'united kingdom': 'GB',
      'united arab emirates': 'AE',
      // Add more special cases as needed
    };

    return specialCases[normalizedName] || normalizedName.slice(0, 2).toUpperCase();
  };

  const renderValue = (type: string, value: string) => {
    const lowerType = type.toLowerCase();
    switch (lowerType) {
      case 'hex color':
      case 'rgb color':
      case 'cmyk color':
      case 'hsl color':
      case 'hsv color':
        return (
          <span className="flex items-center">
            <span 
              className="inline-block w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: value }}
            ></span>
            {value}
          </span>
        );
      case 'avatar url':
      case 'image url':
        return (
          <span className="flex items-center">
            <img 
              src={value}
              alt="Avatar"
              className="w-6 h-6 rounded-full object-cover"
            />
          </span>
        );
      case 'age':
        const agePercent = Math.min((parseInt(value) / 100) * 100, 100);
        return (
          <span className="flex items-center">
            <div className="w-20 bg-gray-200 rounded-full h-2.5 mr-2">
              <div className="h-2.5 rounded-full" style={{ width: `${agePercent}%`, backgroundColor: 'red' }}></div>
            </div>
            {value}
          </span>
        );
      case 'gpa':
        const gpaStars = '★'.repeat(Math.round(parseFloat(value))) + '☆'.repeat(4 - Math.round(parseFloat(value)));
        return (
          <span className="flex items-center">
            <span className="text-yellow-400 mr-2">{gpaStars}</span>
            {value}
          </span>
        );
      case 'gender':
        const GenderIcon = value.toLowerCase() === 'male' ? FaMars : value.toLowerCase() === 'female' ? FaVenus : FaGenderless;
        return (
          <span className="flex items-center">
            <GenderIcon className="mr-2" />
            {value}
          </span>
        );
      case 'file extension':
        return (
          <span className="flex items-center">
            <span className="w-4 h-4 mr-2">
              <FileIcon 
                extension={value} 
                {...defaultStyles[value as keyof typeof defaultStyles]} 
              />
            </span>
            {value}
          </span>
        );
      case 'programming language':
        const LanguageIcon = {
          'javascript': SiJavascript,
          'python': SiPython,
          'c++': SiCplusplus,
          'ruby': SiRuby,
          'php': SiPhp,
          'go': SiGo,
          'rust': SiRust,
          'swift': SiSwift,
          'kotlin': SiKotlin
        }[value.toLowerCase()] || null;
        return LanguageIcon ? (
          <span className="flex items-center">
            <LanguageIcon className="mr-2" />
            {value}
          </span>
        ) : value;
        case 'country':
          case 'nationality':
            const countryCode = getCountryCode(value);
            return (
              <span className="flex items-center">
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '0.5em'
                  }}
                  title={value}
                />
                {value}
              </span>
            );
          default:
            return value;
        }
      };
    
      return (
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-hidden">
            <ScrollArea className="h-full w-full">
              <div className="inline-block min-w-full align-middle">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      {Object.keys(data).map((type) => (
                        <TableHead key={type} className="px-4 py-2 font-medium whitespace-nowrap">{type}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: maxItems }, (_, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {Object.entries(data).map(([type, values]) => (
                          <TableCell key={type} className="px-4 py-2 whitespace-nowrap">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span 
                                  className="truncate block cursor-pointer hover:text-[#ff5533] hover:cursor-copy"
                                  onClick={() => handleCopy(values[rowIndex] || '')}
                                >
                                  {renderValue(type, values[rowIndex] || '')}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy to clipboard</p>
                              </TooltipContent>
                            </Tooltip>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="mt-4 px-4 text-sm text-muted-foreground flex items-center space-x-4">
            <span>Total Rows: </span>
            <NumberInput
              value={count}
              onChange={(newCount) => {
                setCount(newCount);
       
              }}
              min={1}
              step={1}
              className="w-20"
            />
          </div>
          <div className="flex items-center mt-4 px-4 space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={handleCopyAll}>
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy All</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => onExport('csv')}>
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export as CSV</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => onExport('json')}>
                  <FileJson className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export as JSON</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      );
    }
     