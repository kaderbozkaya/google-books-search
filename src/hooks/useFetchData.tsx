import React, { useEffect, useState } from 'react' 

import { Book } from '../types/types' 

 

const useFetchData=()=> { 

    const [data,setData]=useState<Book[]>([]) 

    const [loading,setLoading]=useState<boolean>(false) //api çağrısının devam edip etmediğini takip eder 

    const [error,setError]=useState<any>(null) 

    const [term,setTerm]=useState<string>("") //arama terimini saklar 

    useEffect(()=> { 

        const fetchData=async()=>{ 

            if(term.length>3){ 

                try { 

                    setLoading(true) //veri çekmeden önce true yapıyoruz 

                    const value=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term} 

`) 

 if(!value.ok){ 

    throw new Error("an error occured") 

} 

const res=await value.json() //gelen veriyi jsona çeviyoruz 

setData(res.items) 

                }catch(error){ 

                    console.log(error) 

                    setError(error) 

                }finally{ 

                    setLoading(false) //işlem bitince yüklenme false olur 

 

                } 

            } 

        } 

        fetchData() 

    },[term]) //term değiştiğinde useeffect tekrar yüklenir 

  return { 

    data,loading,error,term,setTerm 

  } 

  

   

} 

 

export default useFetchData 