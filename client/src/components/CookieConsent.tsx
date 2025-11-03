import { useState } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Shield, X } from "lucide-react";
import { Link } from "wouter";

export default function CookieConsent() {
  const { hasConsent, preferences, acceptAll, acceptNecessary, savePreferences } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [tempPrefs, setTempPrefs] = useState(preferences);

  if (hasConsent) return null;

  const handleSaveSettings = () => {
    savePreferences(tempPrefs);
    setShowSettings(false);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <Card className="max-w-5xl mx-auto border-t-4 border-t-primary shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  Cookies & Datenschutz
                </CardTitle>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Wir, <strong>Sven Jaeger - Allianz Versicherung</strong> (Firmensitz: Deutschland), verarbeiten zum Betrieb 
                  dieser Website personenbezogene Daten nur im technisch unbedingt notwendigen Umfang. Für erweiterte 
                  Funktionen wie Bewertungen und Analysen verwenden wir Cookies und Dienste von Drittanbietern.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Alle Details dazu in unserer{" "}
                  <Link href="https://vertretung.allianz.de/agentur.svenjaeger/datenschutz/" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setTempPrefs(preferences);
                  setShowSettings(true);
                }}
                className="order-1 md:order-1"
              >
                Einstellungen
              </Button>
              <Button
                variant="outline"
                onClick={acceptNecessary}
                className="order-2 md:order-2 border-primary text-primary hover:bg-primary/10"
              >
                Nur Notwendige
              </Button>
              <Button
                onClick={acceptAll}
                className="order-3 md:order-3 bg-primary hover:bg-primary/90"
              >
                Alle akzeptieren
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Cookie-Einstellungen</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Notwendige Cookies */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Notwendige Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>

            {/* Analyse Cookies */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Analyse & Statistiken</h3>
                <p className="text-sm text-muted-foreground">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Alle Informationen sind anonymisiert.
                </p>
              </div>
              <Switch
                checked={tempPrefs.analytics}
                onCheckedChange={(checked) => setTempPrefs({ ...tempPrefs, analytics: checked })}
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Marketing & Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen anzuzeigen.
                </p>
              </div>
              <Switch
                checked={tempPrefs.marketing}
                onCheckedChange={(checked) => setTempPrefs({ ...tempPrefs, marketing: checked })}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Abbrechen
            </Button>
            <Button onClick={handleSaveSettings} className="bg-primary hover:bg-primary/90">
              Einstellungen speichern
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

