const WhoToFollowListItem = (who) => {
  return `
  <li class="list-group-item d-flex justify-content-between  ">
    <div class="d-flex">
    <img style="height: 48px;width: 48px" class="m-2" src="${who.avatarIcon}" />
    <div class="d-flex flex-column justify-content-center">
      <h5 class="mb-0">${who.userName}</h5>
      <h5 class="mb-0 mt-2">@${who.handle}</h5>
    </div>
    </div>
    <button type="button" class="m-2 btn btn-primary">Follow</button>
  </li>
      `;
};
export default WhoToFollowListItem;
