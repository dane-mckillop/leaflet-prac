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
    const {articles} = props;

    return (
        <div className="newsbar">
          <h1> Title </h1>
          <p> Description </p>
          <p> Link </p>
        </div>
      );
}