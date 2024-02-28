'use client'

import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {

    const [content, setContent] = useState('');

    const editor = useEditor({ 
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                    HTMLAttributes: {
                        font: 'bold',
                    }
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-8',
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: 'mb-2',
                    },
                },
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'p-5 min-h-[200px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            },

        },
        
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
    });

  return (
    <>
    
    {
            editor && (
                <div className="border m-10">
                    <div className="flex gap-5 border">
                        {/* Hedings */}
                        <button 
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
                        >H1</button>
                        <button 
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
                        >H2</button>
                        <button 
                            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
                        >H3</button>
                        {/* Bold */}
                        <button 
                            onClick={() => editor.chain().focus().toggleBold().run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('bold') ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleBold().run()}
                        >Bold</button>
                        {/* Italic */}
                        <button 
                            onClick={() => editor.chain().focus().toggleItalic().run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('italic') ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleItalic().run()}
                        >Italic</button>
                        {/* Bullet List */}
                        <button 
                            onClick={() => editor.chain().focus().toggleBulletList().run()} 
                            className={`text-gray-500 p-2 rounded-md ${ editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
                            disabled={!editor.can().chain().focus().toggleBulletList().run()}
                        >Bullet List</button>
                        
                    </div>

                    <EditorContent editor={editor} />
                </div>
                )
           }

        {
            content && (
                <>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className="p-10">
                    {content}
                </div>
                </>
            )
        }
        </>
  )
}
