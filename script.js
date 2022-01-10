replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
        }
        else if(element.nodeType === Text.TEXT_NODE){
            if (element.textContent.match(/\b(?:Covid-19|Coronavirus|SARS-CoV-2)\b/gi)){
            element.parentElement.remove()
            }
        }
    }