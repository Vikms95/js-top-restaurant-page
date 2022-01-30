import appendHeader from "./appendHeader";
import appendButtonMenu from "./appendButtonMenu";

const divReference = document.getElementById('content');
divReference.appendChild(appendButtonMenu());
divReference.appendChild(appendHeader());
