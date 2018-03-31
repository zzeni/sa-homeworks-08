/* jslint esnext: true */
/* jslint jquery:true */
(function () {
  "use strict";



  var url = 'https://api.github.com/users/Georgi94';
  var successCallback = function successCallback(data) {
    console.log(data);
    var gitHubImg = `<img src="${data.avatar_url}">`;
    var gitHubLogIn = `${data.login}`;
    var gitHubId = `${data.id}`;
    var gitHubType = `${data.type}`;
    var gitHubsiteAdmin = `${data.site_admin}`;
    var gitHubName = `${data.name}`;
    var gitHubLocation = `${data.location}`;
    var gitHubBio = `${data.bio}`;
    var gitHubBlog = `${data.blog}`;
    var gitHubUpdatedAt = `${data.updated_at}`;
    var gitHubCreatedAt = `${data.created_at}`;

    var login = $('.login');
    var avatarUrl = $('#avatarUrl');
    var gitHubIdInput = $('#ID');
    var gitHubTypeInput = $('#type');
    var gitHubsiteAdminInput = $('#siteAdmin');
    var gitHubNameInput = $('#name');
    var gitHubLocationInput = $('#location');
    var gitHubBioInput = $('#bio');
    var gitHubBlogInput = $('#blog');
    var gitHubUpdatedAtInput = $('#updatedAt');
    var gitHubCreatedAtInput = $('#createdAt');

    avatarUrl.append(gitHubImg);
    login.val(gitHubLogIn);
    gitHubIdInput.val(gitHubId);
    gitHubTypeInput.val(gitHubType);
    gitHubsiteAdminInput.val(gitHubsiteAdmin);
    gitHubNameInput.val(gitHubName);
    gitHubLocationInput.val(gitHubLocation);
    gitHubBioInput.val(gitHubBio);
    gitHubBlogInput.val(gitHubBlog);
    gitHubUpdatedAtInput.val(gitHubUpdatedAt);
    gitHubCreatedAtInput.val(gitHubCreatedAt);

  };

  var errorCallback = function errorCallback(error) {
    console.log(error);
  };


  $.getJSON(url, successCallback).catch(errorCallback);
}());