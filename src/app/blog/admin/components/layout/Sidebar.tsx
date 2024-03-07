'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { IoAlbums, IoCogOutline, IoFolderOutline, IoHomeOutline, IoLogOut, IoPeopleOutline, IoPricetag } from "react-icons/io5";

const Sidebar:FC = () => {

    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/blog/auth/login'
        })
    }

    return ( 
        <div className="w-[80px] bg-gray-700 h-screen flex flex-col align-middle">
            <Link href={'/blog/admin'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoHomeOutline className="text-white" size={20} />
            </Link>
            <hr />

            <Link href={'/blog/admin/posts'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoAlbums size={20} />
                <p className="text-xs">Posts</p>
            </Link>
            <hr />
            <Link href={'/blog/admin/categories'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoFolderOutline size={20} />
                <p className="text-xs">Categories</p>
            </Link>
            <hr />
            <Link href={'/blog/admin/tags'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoPricetag size={20} />
                <p className="text-xs">Tags</p>
            </Link>
            <hr />
            <Link href={'/blog/admin/users'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoPeopleOutline size={20} />
                <p className="text-xs">Users</p>
            </Link>
            <hr className="mt-auto"/>
            <Link href={'/blog/admin/settings'} className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3">
                <IoCogOutline size={20} />
                <p className="text-xs">Settings</p>
            </Link>
            <hr />
            <button 
                className="flex items-center align-middle flex-col text-white hover:bg-white hover:bg-opacity-25 py-3"
                onClick={() =>  handleSignOut() }
            >
                <IoLogOut size={20} />
                <p className="text-xs">Logout</p>
            </button>
        </div> 
    );
}
 
export default Sidebar;