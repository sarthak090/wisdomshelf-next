

export default function PageHeader({title,subTitle}) {
  return (
    <div className={"text-center text-4xl my-32 font-bold"}>{title}
    
    <p className='font-normal text-xl  mt-2'> {subTitle}</p>
    </div>
    )
}
