import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UseFetch from '../../../hooks/UseFetch';
import SearchResult from '../../searchResult/SearchResult';
import { useSelector } from 'react-redux';
import { ContentWrapper } from '../../../components/contentWrapper/ContentWrapper';
import { Img } from '../../../components/lazyLoadImage/Img';
import './style.scss';


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const {url} = useSelector((state) => state.home);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      <SearchResult />
    }
  }

  const {data, loading} = UseFetch("/movie/upcoming");
  //console.log(data);

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 30)]?.backdrop_path;
    setBackground(bg);
  }, [data]); 

  return (
    <div className="heroBanner">
      {!loading && (
          <div className="backdrop-img">
              <Img src={background} />
          </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
          <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subTitle">
                  Millions of movies, TV shows and people to discover.
                  Explore now.
              </span>
              <div className="searchInput">
                  <input
                      type="text"
                      placeholder="Search for a movie or tv show...."
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyUp={searchQueryHandler}
                  />
                  <button>Search</button>
              </div>
          </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
