const PostSummaryItem = (post) => {
  const { topic, userName, time, title, tweets, image } = post;

  return `<li class="p-4 list-group-item d-flex wd-post wd-post-with-image">
    <div class="wd-post-text">
      <h5 class="wd-text-gray">${topic}</h5>
      ${userName ? `<h3 class="d-inline">${userName}</h3>` : ""}
      <i class="fa-solid fa-circle-check"></i>
      <h5 class="d-inline wd-text-gray">- ${time}</h5>
      <p>
        ${title}
      </p>
      ${tweets ? `<h5 class="mt-2">${tweets}</h5>` : ""}
    </div>
    <img class="wd-post-img" src=${image} />

  </li>`;
};

export default PostSummaryItem;
