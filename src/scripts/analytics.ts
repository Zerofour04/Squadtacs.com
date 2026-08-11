let analyticsEnabled = false;

export function enableAnalytics(): void {
  if (analyticsEnabled) return;

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    analyticsEnabled = true;
  }
}

export function disableAnalytics(): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    analyticsEnabled = false;

    // Delete GA cookies
    document.cookie.split(';').forEach((c) => {
      if (c.trim().startsWith('_ga')) {
        const cookieName = c.split('=')[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
  }
}

export function isAnalyticsEnabled(): boolean {
  return analyticsEnabled;
}

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
