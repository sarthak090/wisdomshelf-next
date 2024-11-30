 
import BreadCrumb from '@/components/shared/BreadCrumb'; 
import PeopleList from '@/components/pages/People/PeopleList';
export const metadata = {
  title: 'People',
}
function Page() {
  

  return (
    <div>
        <div className={'text-center text-4xl my-32 font-bold'}>People
        
        <p className='font-normal text-xl mt-2'>Here you'll find all our experts.
Feel free to browse around!</p>
        </div>
        <BreadCrumb loc={[{label:'People',href:'/peoples'}]}/>

      <PeopleList/>
    </div>
  );
}

export default Page;
