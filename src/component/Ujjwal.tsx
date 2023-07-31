
import { useSearchParams } from 'react-router-dom'
import { useQuery,gql } from '@apollo/client'

import { Store } from '../store';
import { useEffect } from 'react';
import { SuccessPage } from './SuccessPage';
import { ErrorPage } from './ErrorPage';


const GET_DATA =gql`
 query Query {
verify {
       isVerified
   }
 }
`;
export const Ujjwal = () => {
  const [searchParams]= useSearchParams()
  // const token =Store((state:any)=>state.token)
  const {setToken }=Store((state:any)=>state)
  console.log(searchParams.get("token"));

  useEffect(()=>{
    setToken(searchParams.get('token'))
  },[])

  const { loading,data,error}=useQuery(GET_DATA);
  
 if(loading)
 {
  return 'Loading..........';
 }

if(data){
console.log('data',data)
  return data.verify.isVerified?<SuccessPage/>:'Couldnot Verify';
}
if(error)
{
  console.log(error.message);
  return <ErrorPage error={error.message}/>;
}

}
