import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Subtle romantic chord progressions (F# minor, D major, A major, E major arpeggio frequencies)
  const notes = [
    261.63, 329.63, 392.00, 523.25, // C Major
    220.00, 261.63, 329.63, 440.00, // A minor
    174.61, 220.00, 261.63, 349.23, // F Major
    196.00, 246.94, 293.66, 392.00  // G Major
  ];

  const playGentleChime = (freq: number) => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.6);
    } catch {
      // Audio context error guard
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      let noteIdx = 0;
      // Play immediately
      playGentleChime(notes[0]);

      // Loop slow arpeggio every 800ms
      intervalRef.current = window.setInterval(() => {
        noteIdx = (noteIdx + 1) % notes.length;
        playGentleChime(notes[noteIdx]);
      }, 950);

      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
      <button
        type="button"
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all text-xs font-medium cursor-pointer ${
          isPlaying
            ? 'bg-[#76263F] text-white border-[#76263F] shadow-[#76263F]/25'
            : 'bg-white/90 dark:bg-[#201018]/90 text-[#633C4A] dark:text-[#D5C2CB] border-[#E8DDE8] dark:border-[#381B28] hover:border-[#76263F]'
        }`}
        title={isPlaying ? 'Mute ambient melody' : 'Play romantic ambient chords'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#EBB6BF]" />
            <span className="hidden sm:inline">Melody Playing</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
            <span className="hidden sm:inline flex items-center gap-1">
              <Music className="w-3 h-3 text-[#76263F]" />
              <span>Ambient Sound</span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};
