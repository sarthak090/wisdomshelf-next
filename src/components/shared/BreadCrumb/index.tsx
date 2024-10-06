import React from "react";
import style from './style.module.css'
import Link from "next/link";
export default function BreadCrumb(props:any) {
    const {loc}= props
  return (
    <div className="my-8">
      <ol
        itemType="http://schema.org/BreadcrumbList"
        className={style.breadcrumbs}
      >
        <li itemProp="itemListElement" itemType="http://schema.org/ListItem">
          <Link itemType="http://schema.org/Thing" itemProp="item" href="/">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="0" />
        </li>
        {loc.map((l,i)=>(
             <li itemProp="itemListElement" itemType="http://schema.org/ListItem">
             <Link itemType="http://schema.org/Thing" itemProp="item" href={l.href}>
               <span itemProp="name"> <span dangerouslySetInnerHTML={{__html:l.label}}/> </span>
             </Link>
             <meta itemProp="position" content={i+1} />
           </li>
        )
        )}
       
       
      </ol>
    </div>
  );
}
