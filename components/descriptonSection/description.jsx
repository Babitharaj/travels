
import React, { useState } from 'react';
import styles from "./description.module.scss"
// import { BiChevronDown } from 'react-icons/bi';

export default function Description({ data, maxItems }) {
  const [showAll, setShowAll] = useState(false);
  
  const handleClick = () => {
    setShowAll(!showAll);
  };
  
  const renderedItems = showAll ? data : data.slice(0, maxItems);

  return (
    <div className={styles['content']}>
      {renderedItems.map((item, index) => (
        <div key={index}>
        {item?.headingText?.value ? <h2>{item?.headingText?.value}</h2> : ""}
           <p>{item?.descText?.value}</p><br/><br/>
          </div>
      ))}
      {data.length > maxItems && (
        <span onClick={handleClick} className={styles["show_more"]}>
          {showAll ? 'Show Less' : 'Show More'}
          {/* <span><BiChevronDown/></span> */}
        </span>

        
      )}
    </div>
  );
};


// {
//   "displayName": "Link Name",
//   "fieldName": "linkName",
//   "fieldValue": "<p><a href=\"https://www.clubmahindra.com/resorts/resorts-in-east\">Resorts in East |</a>&nbsp;<a href=\"https://www.clubmahindra.com/resorts/resorts-in-north\">Resorts in North |</a>&nbsp;<a href=\"https://www.clubmahindra.com/resorts/resorts-in-south\">Resorts in South |</a>&nbsp;<a href=\"https://www.clubmahindra.com/resorts/resorts-in-west\">Resort in West |</a>&nbsp;<a href=\"https://www.clubmahindra.com/resorts/international-resorts/asia\">Resorts in Asia |</a>&nbsp;<a href=\"https://www.clubmahindra.com/our-resorts/club-mahindra-varca-beach-resort-in-goa\">Club Mahindra Goa |</a>&nbsp;<a href=\"https://www.clubmahindra.com/our-resorts/club-mahindra-madikeri-resort-in-coorg-karnataka\">Club Mahindra Madikeri |</a>&nbsp;<a href=\"https://www.clubmahindra.com/our-resorts/club-mahindra-kandaghat-resort-in-shimla-himachal-pradesh\">Club Mahindra Kandaghat |</a>&nbsp;<a href=\"https://www.clubmahindra.com/memberships/club-mahindra-membership-reviews\">Club Mahindra Resort Reviews |</a>&nbsp;<a href=\"https://www.travellersofindia.com/category/club-mahindra-membership-reviews/\">Club Mahindra Reviews |</a>&nbsp;<a href=\"https://timesofindia.indiatimes.com/spotlight/club-mahindra-membership-is-a-smarter-option-for-the-financially-savvy-traveller/articleshow/69923610.cms\">Club Mahindra Membership Reviews</a></p>\n",
//   "contentId": "",
//   "inputType": "TEXT",
//   "contentType": "TEXT",
//   "allowedContent": "",
//   "richTextEnabled": "1",
//   "allowedContents": [],
//   "styleConfig": [],
//   "animationConfig": [],
//   "styleValue": [],
//   "animationValue": [],
//   "description": "Icon Name"
// }