export default class Parallax
{
    constructor(container, opts={}) {
        if(container.Parallax) return;
        container.Parallax = this
        this.container = container
        this.opts = Object.assign({
            pivot: "center"
        }, opts)
        this._updateRect()
        this._update()
        this._bind()
    }

    _bind(){
        this.scrollY = window.scrollY
        window.addEventListener('scroll', (e)=>{
            this._scheduleUpdate()
        }, {passive: true})
    }

    _updateRect(){
        this.rect = this.cont
        ainer.getBoundingClientRect()
    }
    
    _update(){
        this.container.style.setProperty("--parallax", (-this.pivot / this.rect.height).toFixed(4));
    }

    _scheduleUpdate(){
        if(this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(()=> {
            this._updateRect()
            this._update()
        }, this.opts.timeout)
    }

    get pivot(){
        switch(this.opts.pivot){
            case "top":
                return this.rect.top;
            case "middle":
            case "center":
                return this.rect.top + this.rect.height / 2 - window.innerHeight / 2;
            case "bottom":
                return this.rect.bottom - window.innerHeight;
        }
        return 0
    }

    static bind(selector, opts={}){
        return [...document.querySelectorAll(selector)].map(el => new this(el, opts))
    }

}