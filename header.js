var tabContent = [
    { path: 'home', title: 'Home' },
    { path: 'computational-ethics', title: 'Computational Ethics' },
    { path: 'blog-posts', title: 'Blog Posts' },
    { path: 'resume', title: 'Resume' }
];

var tabs = "";
tabContent.forEach(function(content) {
    var path = content.path;
    var title = content.title;

    var classes = 'tab';
    if (window.location.pathname.indexOf(path) >= 0) {
        classes = 'tab tab-selected';
    }

    tabs += '<a class="' + classes + '" href="../' + path + '">' + title + '</a>';
});

var element =
    '<div class="header">' +
        '<div class="title">Alex Crist</div>' +
        '<div class="subtitle">Writing Portfolio</div>' +
        '<div class="tabs">' + tabs + '</div>' +
        '<hr/>' +
    '</div>';

$('#header').append(element);