import Link from 'next/link';
import { mbtiTypes, MbtiGroup } from '@/lib/mbti';

const groups: MbtiGroup[] = ['Analyst', 'Diplomat', 'Sentinel', 'Explorer'];

export default function MbtiGrid() {
  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <div key={group}>
          <h3 className="text-lg text-muted mb-4">{group}s</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mbtiTypes
              .filter((t) => t.group === group)
              .map((t) => (
                <Link
                  key={t.code}
                  href={`/types/${t.code.toLowerCase()}`}
                  className="group block rounded-lg overflow-hidden border border-border bg-surface"
                >
                  <div
                    className="aspect-[4/3]"
                    style={{
                      background: `linear-gradient(135deg, hsl(${t.hue} 45% 42%), hsl(${(t.hue + 20) % 360} 38% 24%))`,
                    }}
                  />
                  <div className="p-4">
                    <div className="text-xs text-muted mb-1">{t.code} · {t.colorName}</div>
                    <div className="text-sm font-medium group-hover:text-accent transition-colors">{t.name}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
