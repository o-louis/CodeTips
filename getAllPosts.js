function importAll(r) {
  let folders = r.keys().map((post) => post.split("/")[1]);
  folders = [...new Set(folders)].map((folder) => ({
    name: folder,
    posts: [],
  }));

  const articles = r.keys().map((fileName) => {
    return {
      link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
      module: r(fileName),
    };
  });

  for (let a = 0; a < folders.length; a++) {
    for (let b = 0; b < articles.length; b++) {
      if (articles[b].link.indexOf(folders[a].name) !== -1) {
        folders[a].posts.push(articles[b]);
      }
    }
  }
  return folders;
}

export const folders = importAll(
  require.context("./pages/posts/", true, /\.mdx$/)
);
