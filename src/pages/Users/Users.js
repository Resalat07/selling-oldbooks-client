import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(' Make Admin')
                }
            })

    }

    const handleDelete =(id)=>{
  
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(' User Deleted')
                }
            })
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>admin</th>
                            <th>delete</th>
                        </tr>
                    </thead>


                    {
                        users.map((user, i) => <tbody>

                            <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.select}</td>
                                <td> {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className=' btn btn-xs bg-green-900 text-warning'>Make Admin</button>}</td>
                                <td><button onClick={() => handleDelete(user._id)} className=' btn btn-xs bg-green-900 text-white'>delete</button></td>
                            </tr>

                        </tbody>)
                    }

                </table>
            </div>




        </div>
    );
};

export default Users;