import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm animate-pulse flex flex-col justify-between">
      <div>
        <div className="aspect-[4/5] w-full bg-zinc-200/70" />
        <div className="p-5 space-y-2.5">
          <div className="h-3 w-20 bg-zinc-200 rounded" />
          <div className="h-5 w-3/4 bg-zinc-200 rounded" />
        </div>
      </div>
      <div className="px-5 pb-5 flex gap-2">
        <div className="h-5 w-16 bg-zinc-200/80 rounded-md" />
        <div className="h-5 w-14 bg-zinc-200/80 rounded-md" />
        <div className="h-5 w-16 bg-zinc-200/80 rounded-md" />
      </div>
    </div>
  );
}
