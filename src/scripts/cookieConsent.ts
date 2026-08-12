import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export function initCookieConsent(onAccept: () => void, onReject: () => void) {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'box inline',
        position: 'bottom left',
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    onConsent: ({ cookie }) => {
      if (cookie.categories.includes('analytics')) {
        onAccept();
      } else {
        onReject();
      }
    },

    onChange: ({ cookie, changedCategories }) => {
      if (changedCategories.includes('analytics')) {
        if (cookie.categories.includes('analytics')) {
          onAccept();
        } else {
          onReject();
        }
      }
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        enabled: false,
        readOnly: false,
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' }
          ]
        }
      }
    },

    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'We use cookies',
            description: 'This website uses cookies to improve user experience and analyze visitor statistics. You can adjust your settings at any time.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Necessary only',
            showPreferencesBtn: 'Settings',
            footer: '<a href="/privacy">Privacy Policy</a> <a href="/imprint">Imprint</a>'
          },
          preferencesModal: {
            title: 'Cookie Settings',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Necessary only',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'Cookie Usage',
                description: 'We use cookies to enable basic functionality of this website and to improve your user experience.'
              },
              {
                title: 'Necessary Cookies <span class="pm__badge">Always active</span>',
                description: 'These cookies are required for the basic functions of the website and cannot be disabled.',
                linkedCategory: 'necessary',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    desc: 'Description'
                  },
                  body: [
                    {
                      name: 'cc_cookie',
                      domain: 'squadtacs.com',
                      desc: 'Stores your cookie preferences'
                    },
                    {
                      name: '__cf_bm',
                      domain: 'cloudflare.com',
                      desc: 'Cloudflare bot protection'
                    }
                  ]
                }
              },
              {
                title: 'Analytics Cookies',
                description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
                linkedCategory: 'analytics',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    desc: 'Description'
                  },
                  body: [
                    {
                      name: '_ga',
                      domain: 'squadtacs.com',
                      desc: 'Google Analytics - Distinguishes users'
                    },
                    {
                      name: '_ga_*',
                      domain: 'squadtacs.com',
                      desc: 'Google Analytics - Stores session data'
                    }
                  ]
                }
              },
              {
                title: 'More Information',
                description: 'For more details, please see our <a href="/privacy">Privacy Policy</a> and <a href="/imprint">Imprint</a>.'
              }
            ]
          }
        }
      }
    }
  });
}

export function hasAnalyticsConsent(): boolean {
  return CookieConsent.acceptedCategory('analytics');
}

export function showCookiePreferences(): void {
  CookieConsent.showPreferences();
}
