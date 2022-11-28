import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Opinions = () => {
    const url = 'http://localhost:5000/opinion';
    const { data: comment = [] } = useQuery({
        queryKey: ['opinion',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>
            {
                comment.map(cmt => <div key={cmt._id}>
                    <div className="card w-96 bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{cmt.name}</h2>
                            <h2 className="card-title">{cmt.email}</h2>
                            <p>{cmt.opinion}</p>
                            
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Opinions;