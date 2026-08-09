import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { useAuth } from "@/lib/AuthContext";
import ExtensionIcon from "@/components/landing/ExtensionIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, ShieldAlert, Loader2, Lock } from "lucide-react";

export default function AdminTools() {
  const { user, isAuthenticated, isLoadingAuth } = useAuth();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (isLoadingAuth || !isAuthenticated) return;
    base44.entities.DownloadLink.list("order", 50)
      .then((rows) => setLinks(rows || []))
      .catch(() => setMsg("Failed to load links."))
      .finally(() => setLoading(false));
  }, [isLoadingAuth, isAuthenticated]);

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-[hsl(var(--wsp-accent))]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-sm w-full text-center rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-10">
          <Lock className="w-8 h-8 mx-auto text-[hsl(var(--wsp-accent))]" />
          <h1 className="mt-5 font-heading font-bold text-xl text-[hsl(var(--wsp-navy))]">
            Admin access required
          </h1>
          <p className="mt-2 text-sm text-[hsl(var(--wsp-navy)/0.6)]">
            Sign in with an admin account to manage download links.
          </p>
          <Button
            className="mt-6 w-full"
            onClick={() => base44.auth.redirectToLogin(window.location.href)}
          >
            Sign in
          </Button>
          <Link
            to="/"
            className="mt-4 inline-block text-xs text-[hsl(var(--wsp-navy)/0.5)] hover:text-[hsl(var(--wsp-accent))]"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-sm w-full text-center rounded-3xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-10">
          <ShieldAlert className="w-8 h-8 mx-auto text-red-500" />
          <h1 className="mt-5 font-heading font-bold text-xl text-[hsl(var(--wsp-navy))]">
            Not authorized
          </h1>
          <p className="mt-2 text-sm text-[hsl(var(--wsp-navy)/0.6)]">
            Your account doesn't have admin access to this page.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block text-xs text-[hsl(var(--wsp-navy)/0.5)] hover:text-[hsl(var(--wsp-accent))]"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  const updateField = (id, field, value) =>
    setLinks((ls) => ls.map((l) => (l.id === id ? { ...l, [field]: value } : l)));

  const saveAll = async () => {
    setSaving(true);
    setMsg("");
    try {
      await base44.entities.DownloadLink.bulkUpdate(
        links.map((l) => ({ id: l.id, label: l.label, href: l.href }))
      );
      setMsg("Saved ✓");
    } catch (e) {
      setMsg("Save failed — please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center gap-3">
          <ExtensionIcon className="w-10 h-10" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[hsl(var(--wsp-accent))]">
            Admin Tools
          </span>
        </div>
        <h1 className="mt-6 font-heading font-extrabold tracking-tight text-[hsl(var(--wsp-navy))]" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
          Download links
        </h1>
        <p className="mt-3 text-sm text-[hsl(var(--wsp-navy)/0.6)]">
          Edit the label and download URL for each browser button. Changes go live
          on the landing page immediately after saving.
        </p>

        {loading ? (
          <div className="mt-12 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-[hsl(var(--wsp-accent))]" />
          </div>
        ) : links.length === 0 ? (
          <p className="mt-12 text-sm text-[hsl(var(--wsp-navy)/0.6)]">
            No download links found.
          </p>
        ) : (
          <div className="mt-10 space-y-6">
            {links.map((l) => (
              <div
                key={l.id}
                className="rounded-2xl border border-[hsl(var(--wsp-navy)/0.08)] bg-white p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ExtensionIcon className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[hsl(var(--wsp-navy)/0.5)]">
                    {l.key}
                  </span>
                  {l.primary && (
                    <span className="ml-auto rounded-full bg-[hsl(var(--wsp-accent)/0.12)] px-2 py-0.5 text-[10px] font-mono font-semibold text-[hsl(var(--wsp-accent))]">
                      primary
                    </span>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`label-${l.id}`}>Label</Label>
                    <Input
                      id={`label-${l.id}`}
                      className="mt-1.5"
                      value={l.label || ""}
                      onChange={(e) => updateField(l.id, "label", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`href-${l.id}`}>Download URL</Label>
                    <Input
                      id={`href-${l.id}`}
                      className="mt-1.5 font-mono text-xs"
                      value={l.href || ""}
                      onChange={(e) => updateField(l.id, "href", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4">
              <Button onClick={saveAll} disabled={saving}>
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving…" : "Save changes"}
              </Button>
              {msg && (
                <span
                  className={
                    msg.startsWith("Saved")
                      ? "text-sm font-medium text-[hsl(var(--wsp-accent))]"
                      : "text-sm font-medium text-red-500"
                  }
                >
                  {msg}
                </span>
              )}
            </div>
          </div>
        )}

        <Link
          to="/"
          className="mt-12 inline-block text-xs text-[hsl(var(--wsp-navy)/0.5)] hover:text-[hsl(var(--wsp-accent))]"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}