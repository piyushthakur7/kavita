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
        class: 'focus:outline-none min-h-[350px] p-5 text-slate-800 prose max-w-none text-[15px] leading-relaxed',
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
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-500">
        Loading editor…
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
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-white">
      <div className="sticky top-0 z-20 flex flex-wrap items-center gap-1.5 border-b border-slate-200 bg-slate-50 p-3">
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
              className={`rounded px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? 'bg-fuchsia-700 text-white'
                  : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 disabled:opacity-30'
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      <div className="editor-container max-h-[500px] overflow-y-auto bg-white">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
