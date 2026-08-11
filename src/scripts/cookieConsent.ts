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
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: 'Wir verwenden Cookies',
            description: 'Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern und Besucherstatistiken zu analysieren. Du kannst deine Einstellungen jederzeit anpassen.',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Nur notwendige',
            showPreferencesBtn: 'Einstellungen',
            footer: '<a href="/privacy">Datenschutz</a> <a href="/imprint">Impressum</a>'
          },
          preferencesModal: {
            title: 'Cookie-Einstellungen',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Nur notwendige',
            savePreferencesBtn: 'Auswahl speichern',
            closeIconLabel: 'Schließen',
            serviceCounterLabel: 'Service|Services',
            sections: [
              {
                title: 'Cookie-Nutzung',
                description: 'Wir verwenden Cookies, um grundlegende Funktionen dieser Website zu ermöglichen und um dein Nutzungserlebnis zu verbessern.'
              },
              {
                title: 'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
                description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
                linkedCategory: 'necessary',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    desc: 'Beschreibung'
                  },
                  body: [
                    {
                      name: 'cc_cookie',
                      domain: 'squadtacs.com',
                      desc: 'Speichert deine Cookie-Einstellungen'
                    },
                    {
                      name: '__cf_bm',
                      domain: 'cloudflare.com',
                      desc: 'Cloudflare Bot-Schutz'
                    }
                  ]
                }
              },
              {
                title: 'Analyse Cookies',
                description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.',
                linkedCategory: 'analytics',
                cookieTable: {
                  headers: {
                    name: 'Cookie',
                    domain: 'Domain',
                    desc: 'Beschreibung'
                  },
                  body: [
                    {
                      name: '_ga',
                      domain: 'squadtacs.com',
                      desc: 'Google Analytics - Unterscheidet Benutzer'
                    },
                    {
                      name: '_ga_*',
                      domain: 'squadtacs.com',
                      desc: 'Google Analytics - Speichert Session-Daten'
                    }
                  ]
                }
              },
              {
                title: 'Weitere Informationen',
                description: 'Weitere Details findest du in unserer <a href="/privacy">Datenschutzerklärung</a> und im <a href="/imprint">Impressum</a>.'
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
