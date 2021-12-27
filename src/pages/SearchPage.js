import React from "react";
import "./SearchPage.css";
import MiniSearch from "../components/MiniSearch";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";
import useSearch from "../myHook/useSearch";
import Weather from "../components/Weather";
import CurrencyUSD from "../components/currency/CurrencyUSD";
import CurrencyEU from "../components/currency/CurrencyEU";
import { LinearProgress, Box } from "@material-ui/core";
export default function SearchPage() {
  const [{ term, user }, dispatch] = useStateValue();
  const { data } = useSearch(term);


  return (
    <div className="searchpage">
      <div className="searchpage__top">
        <div className="searchpage__topAll">
          <div className="searchpage__nav">
            <Link to="/" exact>
              <img
                src="https://i.ibb.co/yQKZ88s/panda.png"
                alt=""
                className="searchpage__navLogo"
              />
            </Link>
            <MiniSearch term={term} dispatch={dispatch} />
          </div>
          <div className=" home__topRight searchPage__navRight">
          <p>{user?.displayName}</p>
          <Avatar className="searchPage__avatar"  src={user?.photoURL}/>
          </div>
        </div>
        <div className="searchpage__topAPI">
          <div className="searchpage__topCurrecy">
            <CurrencyEU />
            <CurrencyUSD />
          </div>
          <div className="searchpage__topWeather">
            <Weather />
          </div>
        </div>
      </div>
      <div className="searchpage__main">
        {data?.items.length ? (
          <>
            <p className="searchpage__mainInformation">
              {data?.searchInformation.formattedTotalResults} results in{" "}
              {data?.searchInformation.searchTime}sec
            </p>
            {data?.items.map((item) => (
              <div className="searchpage__mainContent">
                <a href={item.link} className="searchpage__mainLink">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                        className="searchPage__image"
                      />
                    )}
                  {item.displayLink}
                </a>
                <a className="searchpage__mainParagraph" href={item.link}>
                  {item.title}
                </a>
                <p className="searchpage__mainText">{item.snippet}</p>
              </div>
            ))}
          </>
        ) : (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
      <div className="searchpage__footer">
        <h2>{`Nimadir  Yoziladi :)`}</h2>
      </div>
    </div>
  );
}
