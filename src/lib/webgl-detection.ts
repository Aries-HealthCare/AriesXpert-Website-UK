/**
 * WebGL Detection, Device Capability Tiering, and Accessibility State
 */

export interface DeviceCapability {
  hasWebGL: boolean;
  hasWebGL2: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  tier: 'high' | 'medium' | 'low' | 'fallback';
}

export function detectDeviceCapabilities(): DeviceCapability {
  if (typeof window === 'undefined') {
    return {
      hasWebGL: true,
      hasWebGL2: true,
      isMobile: false,
      prefersReducedMotion: false,
      tier: 'high',
    };
  }

  let hasWebGL = false;
  let hasWebGL2 = false;

  try {
    const canvas = document.createElement('canvas');
    hasWebGL2 = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    hasWebGL = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    hasWebGL = false;
    hasWebGL2 = false;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

  let tier: 'high' | 'medium' | 'low' | 'fallback' = 'high';

  if (!hasWebGL || prefersReducedMotion) {
    tier = 'fallback';
  } else if (isMobile) {
    tier = 'medium';
  } else if (!hasWebGL2) {
    tier = 'low';
  }

  return {
    hasWebGL,
    hasWebGL2,
    isMobile,
    prefersReducedMotion,
    tier,
  };
}
