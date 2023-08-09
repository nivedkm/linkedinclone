import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";
 

function Widgets() {
  const newsArticle = (heading,subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleleft">
      <FibreManualRecordIcon/>
      </div>
      <div className="widgets-articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
        <div className="widgets-header">
        <h2>LinkedIn news</h2>
        <InfoIcon />            
        </div>
        {newsArticle("hello","hi")}
        {newsArticle("hello","hi")}
        {newsArticle("hello","hi")}
        {newsArticle("hello","hi")}
        {newsArticle("hello","hi")}
        {newsArticle("hello","hi")}
    </div>
  );
}

export default Widgets;