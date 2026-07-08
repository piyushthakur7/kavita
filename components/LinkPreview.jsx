"use client";
import React, { useState, useEffect } from 'react';
import { Link as LinkIcon, Video, BookOpen, User, PenTool, Stethoscope, Image as ImageIcon } from 'lucide-react';

const icons = {
  Video: Video,
  BookOpen: BookOpen,
  User: User,
  PenTool: PenTool,
  LinkIcon: LinkIcon,
  Stethoscope: Stethoscope,
  default: LinkIcon
};

const LinkPreview = ({ url, title, desc, fallbackIconName, customImage }) => {
  const [image, setImage] = useState(customImage || null);
  const [loading, setLoading] = useState(!customImage);

  const FallbackIcon = icons[fallbackIconName] || icons.default;

  useEffect(() => {
    if (customImage) return; // Don't fetch if custom image is provided
    // Check if it's a YouTube link, we can extract thumbnail directly without API call
    let ytVideoId = null;
    if (url.includes('youtube.com/watch?v=')) {
      ytVideoId = new URL(url).searchParams.get('v');
    } else if (url.includes('youtu.be/')) {
      ytVideoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    if (ytVideoId) {
      setImage(`https://img.youtube.com/vi/${ytVideoId}/hqdefault.jpg`);
      setLoading(false);
      return;
    }

    const fetchPreview = async () => {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        if (data.image) {
          setImage(data.image);
        }
      } catch (err) {
        console.error("Failed to load preview for", url);
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [url]);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#c5a48e] hover:shadow-md transition-all group bg-white w-full">
      <div className="w-full sm:w-32 h-32 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center relative border border-gray-100">
        {loading ? (
          <div className="animate-pulse w-full h-full bg-gray-200"></div>
        ) : image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <FallbackIcon size={32} className="text-gray-300" />
        )}
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h4 className="text-[16px] font-semibold text-gray-900 group-hover:text-[#c5a48e] transition-colors line-clamp-1">{title}</h4>
        {desc && <p className="text-[14px] text-gray-500 mt-1 line-clamp-2">{desc}</p>}
        <div className="flex items-center gap-1.5 mt-2 text-[12px] text-gray-400">
          <LinkIcon size={12} />
          <span className="truncate max-w-[200px]">
            {(() => {
              try {
                return new URL(url).hostname.replace('www.', '');
              } catch (e) {
                return url;
              }
            })()}
          </span>
        </div>
      </div>
    </a>
  );
};

export default LinkPreview;
