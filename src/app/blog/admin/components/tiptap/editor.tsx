'use client'

import { useCallback, useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import { BsBlockquoteLeft, BsImage, BsType, BsTypeBold, BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeItalic } from "react-icons/bs";
import { MdFormatListBulleted, MdOutlineRedo, MdOutlineUndo } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import Image from "@tiptap/extension-image";

export const Editor = ({register, watch, setValue}:any) => {

    const content = watch('content', '');

    const editor = useEditor({ 
        extensions: [
            Image.configure({
                allowBase64: true,
                HTMLAttributes: {
                    class: 'w-full h-auto',
                },
            }),
            TextStyle,
            StarterKit.configure({
                heading: {
                    levels: [2, 3, 4, 5],
                },
                paragraph: {

                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-8',
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-8',
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: 'mb-2',
                    },
                },
                blockquote: {
                    HTMLAttributes: {
                        class: 'border-l-4 border-gray-300 pl-2',
                    },
                },
                history: {
                    depth: 100,
                    newGroupDelay: 300,
                }

            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'p-5 min-h-[200px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rich-text',
            },
        },
        
        onUpdate: ({ editor }) => {
            setValue('content', editor.getHTML());
        },
    });

    const addImage = useCallback(() => {
        const url = window.prompt('URL');
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);
    

    useEffect(() => {
        setValue('content', content);
    }, [content, setValue]);

  return (
    <>
    
        <input type="hidden" {...register('content')} />
    {
            editor && (
                <div className="">
                    <div className="border">
                        <div className="flex gap-5 border items-center py-1">
                                <button 
                                    title="Heading 1"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
                                ><BsTypeH1 /></button>
                                <button 
                                    title="Heading 2"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
                                ><BsTypeH2 /></button>
                                <button 
                                    title="Heading 3"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('heading', { level: 4 }) ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleHeading({ level: 4 }).run()}
                                ><BsTypeH3 /></button>
                                <button 
                                    title="Heading 4"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('heading', { level: 5 }) ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleHeading({ level: 5 }).run()}
                                ><BsTypeH4 /></button>
                                <button 
                                    title="Paragraph"
                                    type="button"
                                    onClick={() => editor.chain().focus().setParagraph().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().setParagraph().run()}
                                ><BsType /></button>

                                <div className="border-l-2 border-gray-300 border h-10 border-r-0"></div>

                                {/* Bold */}
                                <button 
                                    title="Bold"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleBold().run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('bold') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleBold().run()}
                                ><BsTypeBold /></button>
                                {/* Italic */}
                                <button 
                                    title="Italic"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleItalic().run()} 
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('italic') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                                ><BsTypeItalic /></button>
                                <div className="border-l-2 border-gray-300 border h-10 border-r-0"></div>

                                {/* Bullet List */}
                                <button 
                                    title="Bullet List"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleBulletList().run()}
                                ><MdFormatListBulleted /></button>

                                <button 
                                    title="Ordered List"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleOrderedList().run()}
                                ><GoListOrdered /></button>


                                <div className="border-l-2 border-gray-300 border h-10 border-r-0"></div>

                                {/* Blockquote */}
                                <button 
                                    title="Blockquote"
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md ${ editor.isActive('blockquote') ? 'bg-gray-200' : ''}`}
                                    disabled={!editor.can().chain().focus().toggleBlockquote().run()}
                                ><BsBlockquoteLeft /></button>

                                <div className="border-l-2 border-gray-300 border h-10 border-r-0"></div>  

                                {/* Undo */}
                                <button 
                                    title="Undo"
                                    type="button"
                                    onClick={() => editor.chain().focus().undo().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md`}
                                    disabled={!editor.can().chain().focus().undo().run()}
                                ><MdOutlineUndo /></button>

                                {/* Redo */}

                                <button 
                                    title="Redo"
                                    type="button"
                                    onClick={() => editor.chain().focus().redo().run()}
                                    className={`text-gray-500 px-2 py-1 rounded-md`}
                                    disabled={!editor.can().chain().focus().redo().run()}
                                ><MdOutlineRedo /></button>

                                <div className="border-l-2 border-gray-300 border h-10 border-r-0"></div>

                                {/* Add Image */}
                                {/* <button 
                                    title="Add Image"
                                    type="button"
                                    onClick={addImage}
                                    className={`text-gray-500 px-2 py-1 rounded-md`}
                                ><BsImage /></button> */}
                            </div>

                            <EditorContent editor={editor} />
                    </div>
                    <div className="min-h-60 py-5">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Previsualización</h2>
                        <div className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                    <div className="min-h-60 py-5">
                        <h2 className="block text-gray-700 text-sm font-bold mb-2">Previsualización Code</h2>
                        <div>
                            {content}
                        </div>
                    </div>
                </div>
                )
           }
        </>
  )
}
