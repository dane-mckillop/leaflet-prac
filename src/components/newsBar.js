import { useState, useRef, useEffect } from 'react';
import data from "../data/locations.json";
import NewsStory from "./newsStory.js";

/**
 * Component for containing stories that a user can search.
 * Each individual story should be an object, which a user can
 * click to navigate to the story.url.
 * 
 * @param {*} props articles from news.api to populate component
 * @returns 
 */

export default function NewsBar(props) {
    const {badgesData} = props;

    return (
        <div className="newsbar">
          <div className="badge-list">
            {badgesData.map((badge, index) => (
              <NewsStory
                key={index}
                image={badge.image}
                description={badge.description}
                author={badge.author}
                date={badge.date}
              />
            ))}
          </div>
        </div>
      );
}