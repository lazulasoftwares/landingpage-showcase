import { cn } from "@/lib/utils";

type Version = "roupas" | "industrial" | "automotivo";

interface VersionSwitchProps {
  currentVersion: Version;
  onVersionChange: (version: Version) => void;
}

const versions: { key: Version; label: string }[] = [
  { key: "roupas", label: "Roupas" },
  { key: "industrial", label: "Industrial" },
  { key: "automotivo", label: "Automotivo" },
];

export function VersionSwitch({ currentVersion, onVersionChange }: VersionSwitchProps) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-muted p-1">
      {versions.map((version) => (
        <button
          key={version.key}
          onClick={() => onVersionChange(version.key)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            currentVersion === version.key
              ? "bg-primary text-primary-foreground shadow-lg"
              : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
          )}
        >
          {version.label}
        </button>
      ))}
    </div>
  );
}
