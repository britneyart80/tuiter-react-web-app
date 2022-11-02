import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
     <div class="row">
        <div class="d-flex align-items-center">
          <input
            id="wd-tuiter-search-bar"
            type="text"
            placeholder="Search Tuiter"
          />
          <i class="fas fa-cog fa-2x" style="color: #3388ff"></i>
        </div>
        <ul class="nav nav-tabs m-2">
          <li class="nav-item">
            <a class="nav-link active" href="#"><h5>For You</h5></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><h5>Trending</h5></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><h5>News</h5></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><h5>Sports</h5></a>
          </li>
          <li class="nav-item wd-last-item">
            <a class="nav-link" href="#"><h5>Entertainment</h5></a>
          </li>
        </ul>
        <img
          src="../../tuiter/imgs/starship.jpeg"
          class="card-img-top"
          alt="..."
        />
        <h1 class="wd-card-title">SpaceX's Starship</h1>
    </div>
    ${PostSummaryList()}
    `;
};
export default ExploreComponent;
