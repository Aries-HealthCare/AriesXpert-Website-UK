'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight } from 'lucide-react';

export default function CountryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only check once per session
    const seen = sessionStorage.getItem('uk_country_popup_dismissed');
    if (!seen) {
      // Small delay before showing
      const timer = setTimeout(() => {
        // Optional location detection can be added
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
