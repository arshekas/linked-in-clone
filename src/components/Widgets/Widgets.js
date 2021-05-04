import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) =>
    (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets"> 
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Clone inspried from sonySangha youtuber","Top news - 2012 readers")}
            {newsArticle("Practise LinkedIn Clone project","Login, Posting, Redux, firebase")}
            {newsArticle("Coronavirus: UK updates","Top news - 886")}
            {newsArticle("Tesla hits new highs","Cars $ auto - 320")}
            {newsArticle("Bitcoin Breaks $22k","Crypto - 8000 readers")}
            {newsArticle("Is redux too good!","Code - 123 readers")}
        </div>
    )
}

export default Widgets
