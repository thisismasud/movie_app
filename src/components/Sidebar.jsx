import CommingSoonSvg from "../assets/icons/commingSoon.svg";
import FavoritsSvg from "../assets/icons/favourite.svg";
import NewReleaseSVg from "../assets/icons/newRelease.svg";
import TrendingSVg from "../assets/icons/trending.svg";
import WatchLaterSvg from "../assets/icons/watchLater.svg";
export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={TrendingSVg} width="24" height="24" alt="Trending" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={NewReleaseSVg} width="24" height="24" alt="New Release" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img
              src={CommingSoonSvg}
              width="24"
              height="24"
              alt="Comming Soon"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={FavoritsSvg} width="24" height="24" alt="favourites " />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg "
            href="#"
          >
            <img src={WatchLaterSvg} width="24" height="24" alt="watch later" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
