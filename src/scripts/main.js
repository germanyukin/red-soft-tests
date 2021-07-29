/* eslint-disable quote-props */
/* eslint-disable quotes */
import { init as initSelectedList } from './components/SelectedList.js';
import { TreeView } from './components/TreeView.js';


const json1 = `{
  "Folder1": [
    {
      "Folder2": "text_from_folder2",
      "Folder3": [
        {
          "Folder4": "text_from_folder4.txt",
          "Folder5": ""
        }
      ]
    }
  ]
}`;

const json2 = `{
  "Folder6": [
    {
      "Folder7": "",
      "Folder3": "text_from_folder4.txt"
    }
  ]
}`;


const treeViewInstances = new Map();


function initTreeView() {
  let data1;
  let data2;

  try {
    data1 = JSON.parse(json1);
    data2 = JSON.parse(json2);
  } catch (err) {
    console.log(err);
  }

  const tree1 = document.getElementById('TreeView1');
  const tree2 = document.getElementById('TreeView2');
  const button = document.querySelector('Button');

  tree1 && treeViewInstances.set(tree1, new TreeView(tree1, data1));
  tree2 && treeViewInstances.set(tree2, new TreeView(tree2, data2));
  button && button.addEventListener('click', () => {
    for (const treeView of treeViewInstances.values()) {
      console.log(JSON.stringify(treeView.getData()));
    }
  });
}

function main() {
  initSelectedList();
  initTreeView();
}

main();
