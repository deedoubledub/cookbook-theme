// add search action to search form
id('search').setAttribute('action', 'javascript:search(id(\'query\').value);');

// helper function to quickly grab an element by id
function id(name) {
  return document.getElementById(name);
}

// fuse search
function search(query) {
  fetch('/index.json').then(response => response.json()).then(function(index) {
    var options = {
      threshold: 0.0,
      ignoreLocation: true,
      keys: ['title', 'description', 'tags', 'contents']
    }
    var fuse = new Fuse(index, options);

    var result = fuse.search(query);
    id('searchResults').innerHTML = result.length + "<br><br>" + JSON.stringify(result);
  });
}
