const listItems = document.getElementsByTagName("li");
for (const listItem of listItems) {
  const childCount = listItem.getElementsByTagName("li").length;
  if (childCount) {
    listItem.firstChild.data += ` [${childCount}]`;
  } else {
    continue;
  }
}
