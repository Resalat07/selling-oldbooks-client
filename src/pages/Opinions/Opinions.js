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
        <div>
            {
                comment.map(cmt => <div key={cmt._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{cmt.name}</h2>
                            <h2 className="card-title">{cmt.email}</h2>
                            <p>{cmt.opinion}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Opinions;