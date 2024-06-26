'use client'
import Link from 'next/link';
import React from 'react'
import Layout from '/src/components/admin/Layout';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from '@/components/Button';
import truncate from 'truncate';
import { Context } from '@/components/context/MyContext';

export default function page() {
    const {setIsUpdated} = useContext(Context);
    const [posts, setPosts] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        fetchPost()
    }, []);

    function fetchPost(){
        axios.get('/api/post').then(response => {
            setPosts(response.data)
        })
    }

    function deletePost(post){
      MySwal.fire({
        title: 'Are you sure?',
        text: `Do you want to delete '${post.title}'`,
        showCancelButton: true,
        confirmButtonText: 'Yes, Delete!',
        confirmButtonColor: '#d55',
        cancelButtonText: 'Cancel',
      }).then(async result => {
        if (result.isConfirmed) {
          const {_id} = post;
          await axios.delete('/api/post?id='+_id);
          fetchPost();
          setIsUpdated(true);
        }
      })
    }

    return (
        <Layout>
            <Link className='bg-[#028d94] text-white rounded-md p-3' href={'/dashboard/post/new'}>Add new post</Link>
            {posts.length === 0 ? '' : 
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="bg-teal-100">Title</th>
                                <th className="bg-teal-100">Description</th>
                                <th className="bg-teal-100">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                            <tr className="hover" key={post._id}>
                                <td className="">{post.title}</td>
                                <td className="">{truncate(`${post.description}`, 130)}</td>
                                <td>
                                    <Link href={'/dashboard/post/edit/'+post._id} className="bg-[#028d94] hover:bg-[#02b2bb] text-white inline-flex py-1 px-2 rounded-md gap-1 mr-1 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                        Edit
                                    </Link>
                                    <Button className="bg-[#028d94] hover:bg-[#02b2bb] w-20 min-h-[28px] h-7 text-white p-0 font-normal normal-case rounded-md gap-1 mr-1 text-sm" click={() => deletePost(post)} content={
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            Delete
                                        </>
                                    }/>
                                </td>
                            </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>}
        </Layout>
    )
}
