'use client';

import { useEffect } from 'react';

export function AttributionCapture() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');

      if (utmSource || utmMedium || utmCampaign) {
        sessionStorage.setItem('uk_utm_source', utmSource || '');
        sessionStorage.setItem('uk_utm_medium', utmMedium || '');
        sessionStorage.setItem('uk_utm_campaign', utmCampaign || '');
      }
    } catch {}
  }, []);

  return null;
}
