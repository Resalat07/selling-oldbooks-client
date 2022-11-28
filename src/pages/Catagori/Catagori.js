import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import BooksCategory from '../BooksCategory/BooksCategory';
import { GridLoader } from 'react-spinners';




const Catagori = () => {

    const { data: booksCategories = [] ,isLoading } = useQuery({
        queryKey: ['booksCategories'],
        queryFn: () => fetch('http://localhost:5000/booksCategories')
            .then(res => res.json())
    });
   const handlecate=(e)=>{
    console.log(e);
    
    }
    if(isLoading){
        <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader 
        color="#0a7b64"
        size={52}></GridLoader>
        </div>
    }

    




    return (
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>
            {
                booksCategories.map(category => <div key={category._id}   className="card card-compact w-80 bg-base-200 shadow-xl">
                    <figure><img src={category.image} className=' h-72' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-900">{category.category_name}</h2>
                        
                        <div className="card-actions justify-end">
                        <button onClick={()=>handlecate(category.category_name)}> <Link className="btn bg-green-900" to={`/addbook/${category.category_name}`}>Show Items</Link></button>
                        
                            


                        </div>
                    </div>
                </div>
                )
            }



        </div>
    );
};

export default Catagori ;