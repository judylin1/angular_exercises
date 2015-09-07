posts = [
  {
    title: "Dog House",
    author: "Judy",
    url: "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1782183_10100249158890418_8071414970052917254_n.jpg?oh=6357e5ca577757019750c498168d57b2&oe=56765F21",
    description: "My dogs in the dog house.",
    date: Date.now()-900000000,
    votes: 0,
    comments: [{name: "Bob", content: "Well ain't that something."}, {name: "Joe", content: "Awwwwwwww!"}],
  },
  {
    title: "Dogs At The Beach",
    author: "JL",
    url: "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11133856_10100367003523828_5361461301912841629_n.jpg?oh=9d2f399d79b628869d55424e0c93cbd9&oe=566A37D5",
    description: "Dogs at the Galveston beach.",
    date: Date.now(),
    votes: 2,
    comments: [],
  },
  {
    title: "Charlie Dawg Is Cooler Than Your Dog",
    author: "Judy L",
    url: "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1098370_954346260318_1152311749_n.jpg?oh=3ec3a8907e340fb6223d93824a181a43&oe=5637ED03",
    description: "Coolest. Dog. Ever.",
    date: Date.now()-400000000,
    votes: -1,
    comments: [{name: "Marley", content: "No, my dog is cooler."}, {name: "Mom", content: "Judy's dog is cooler."}],
  },
];

app.controller("nav", function ($scope) {
  $scope.createPost = function () {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.url = $scope.url;
    post.description = $scope.description;
    post.date = Date.now();
    post.votes = 0;
    post.comments = [];
    posts.push(post);
    $scope.postForm();
    $scope.title = '';
    $scope.author = '';
    $scope.url = '';
    $scope.description = '';
  }
  $scope.sortOrder = "Sort By Votes";
  $scope.newPost = false;
  $scope.comments = false;
  $scope.showCommentForm = false;
  $scope.postForm = function () {
    $scope.newPost = !$scope.newPost;
  }
  $scope.orderVotes = function () {
    $scope.sortOrder = "Sort By Votes";
    $scope.order = 'votes';
    $scope.orderDir = 'reverse';
  }
  $scope.orderDates = function () {
    $scope.sortOrder = "Sort By Dates";
    $scope.order = 'date';
    $scope.orderDir = 'reverse';
  }
  $scope.orderTitles = function () {
    $scope.sortOrder = "Sort By Titles";
    $scope.order = 'title';
    $scope.orderDir = '';
  }
  $scope.order = 'votes';
  $scope.orderDir = 'reverse';
  $scope.posts = posts;
  $scope.upVote = function () {
    this.post.votes += 1;
  }
  $scope.downVote = function () {
    this.post.votes -= 1;
  }
  $scope.postComment = function () {
    var comment = {};
    comment.name = this.comments.name;
    comment.content = this.comments.content;
    this.post.comments.push(comment);
    this.showCommentForm = !this.showCommentForm;
    this.comments.name = '';
    this.comments.content = '';
    this.comments = true;
  }
  $scope.commentShow = function () {
    this.comments = !this.comments;
  }
  $scope.commentFormShow = function () {
    this.showCommentForm = !this.showCommentForm;
  }
})
