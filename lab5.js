class CenterHtml extends HTMLElement{
    conectedCallback(){
        this.innerHTML ='<div style"text-align:center">${this.innerHTML}</div>'

    }

}

customElements.define="(x-center,CenterHtml)";


class BlueHtml extends HTMLElement{
    conectedCallback(){
        this.innerHTML ='<div style"color:blue">${this.innerHTML}</div>'

    }

}

customElements.define="(x-blue,Blue.Html)";