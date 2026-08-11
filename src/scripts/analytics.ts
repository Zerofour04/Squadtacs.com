const GA_MEASUREMENT_ID = 'G-HVM9S6VWTV';
let gtagInitialized = false;
let gtagScriptLoaded = false;

function loadGtagScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (gtagScriptLoaded) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: any[]) {
        window.dataLayer.push(args);
      };

      window.gtag('consent', 'default', {
        'analytics_storage': 'denied'
      });

      window.gtag('js', new Date());
      gtagScriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error('Failed to load gtag script'));
    document.head.appendChild(script);
  });
}

export async function enableAnalytics(): Promise<void> {
  if (gtagInitialized) return;

  try {
    await loadGtagScript();

    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });

    window.gtag('config', GA_MEASUREMENT_ID, {
      'page_path': window.location.pathname,
      'anonymize_ip': true,
      'send_page_view': true
    });

    gtagInitialized = true;
  } catch (error) {
    console.error('Failed to load Google Analytics:', error);
  }
}

export function disableAnalytics(): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    gtagInitialized = false;

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
  return gtagInitialized;
}

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
