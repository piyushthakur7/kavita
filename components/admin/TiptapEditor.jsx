"use client";
import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '<p>Write your thoughts here...</p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[350px] p-5 text-white/80 prose prose-invert max-w-none text-[14.5px] leading-relaxed',
      },
    },
  });

  // Keep editor content in sync if value changes externally (e.g. on server fetch load)
  useEffect(() => {
    if (editor && value !== undefined && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="w-full h-[400px] rounded-2xl bg-[#121015] border border-white/5 animate-pulse flex items-center justify-center text-white/40 font-mono text-xs">
        LOADING RICH EDITOR CONSOLE...
      </div>
    );
  }

  const buttons = [
    { label: 'Bold', action: () => editor.chain().focus().toggleBold().run(), active: 'bold' },
    { label: 'Italic', action: () => editor.chain().focus().toggleItalic().run(), active: 'italic' },
    { label: 'Strike', action: () => editor.chain().focus().toggleStrike().run(), active: 'strike' },
    { label: 'Divider', type: 'separator' },
    { label: 'H1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: { name: 'heading', attrs: { level: 1 } } },
    { label: 'H2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: { name: 'heading', attrs: { level: 2 } } },
    { label: 'H3', action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: { name: 'heading', attrs: { level: 3 } } },
    { label: 'Paragraph', action: () => editor.chain().focus().setParagraph().run(), active: 'paragraph' },
    { label: 'Divider', type: 'separator' },
    { label: 'Bullet', action: () => editor.chain().focus().toggleBulletList().run(), active: 'bulletList' },
    { label: 'Ordered', action: () => editor.chain().focus().toggleOrderedList().run(), active: 'orderedList' },
    { label: 'Blockquote', action: () => editor.chain().focus().toggleBlockquote().run(), active: 'blockquote' },
    { label: 'Code', action: () => editor.chain().focus().toggleCodeBlock().run(), active: 'codeBlock' },
    { label: 'Divider', type: 'separator' },
    { label: 'Undo', action: () => editor.chain().focus().undo().run(), disabled: !editor.can().undo() },
    { label: 'Redo', action: () => editor.chain().focus().redo().run(), disabled: !editor.can().redo() },
  ];

  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#0a080c] shadow-2xl relative">
      {/* Toolbar console */}
      <div className="flex flex-wrap items-center gap-1.5 p-3 bg-[#121015] border-b border-white/5 sticky top-0 z-20">
        {buttons.map((b, idx) => {
          if (b.type === 'separator') {
            return <div key={`sep-${idx}`} className="w-px h-5 bg-white/10 mx-1" />;
          }

          let isActive = false;
          if (b.active) {
            if (typeof b.active === 'string') {
              isActive = editor.isActive(b.active);
            } else {
              isActive = editor.isActive(b.active.name, b.active.attrs);
            }
          }

          return (
            <button
              key={b.label}
              type="button"
              onClick={b.action}
              disabled={b.disabled}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all select-none uppercase tracking-wider ${
                isActive
                  ? 'bg-[#c5a880] text-black font-bold shadow-[0_0_8px_rgba(197,168,128,0.4)]'
                  : 'text-white/60 hover:bg-white/5 hover:text-white disabled:opacity-30'
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      {/* Editor Body */}
      <div className="editor-container max-h-[500px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
