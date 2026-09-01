'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';

export default function CountrySelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-2.5 gap-1.5 rounded-xl text-xs font-mono font-medium hover:bg-muted/80">
          <span>🇬🇧 UK</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="premium-card p-1.5 min-w-[170px]">
        <DropdownMenuItem asChild>
          <a href="https://www.ariesxpert.co.uk" className="flex items-center gap-2 px-2.5 py-2 text-xs font-bold text-primary cursor-pointer rounded-lg bg-primary/10">
            <span>🇬🇧 United Kingdom</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="https://www.ariesxpert.ca" className="flex items-center gap-2 px-2.5 py-2 text-xs text-foreground hover:bg-muted cursor-pointer rounded-lg">
            <span>🇨🇦 Canada</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="https://www.ariesphysiocare.com" className="flex items-center gap-2 px-2.5 py-2 text-xs text-foreground hover:bg-muted cursor-pointer rounded-lg">
            <span>🇮🇳 India</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
