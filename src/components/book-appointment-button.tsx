'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ButtonProps } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

interface BookAppointmentButtonProps extends ButtonProps {
  serviceSlug?: string;
  conditionSlug?: string;
  therapistId?: string;
  children: React.ReactNode;
}

const BookAppointmentButtonContent = dynamic(
  () => import('./book-appointment-button-content'),
  { ssr: false }
);

export default function BookAppointmentButton({
  serviceSlug,
  conditionSlug,
  therapistId,
  children,
  ...props
}: BookAppointmentButtonProps) {
  const pathname = usePathname();

  return (
    <BookAppointmentButtonContent
      serviceSlug={serviceSlug}
      conditionSlug={conditionSlug}
      therapistId={therapistId}
      pathname={pathname}
      {...props}
    >
      {children}
    </BookAppointmentButtonContent>
  );
}
