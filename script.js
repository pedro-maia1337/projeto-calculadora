function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
    
        inicia(){
            this.clickbutton()
            this.pressEnter()
        },

        clickbutton(){
            document.addEventListener('click', (e) => {
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                
                if(el.classList.contains('btn-eq')){
                    this.count()
                }   
                
                this.display.focus();      
            })
        },  

        pressEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.count()
                }
            })
        },
        
        btnToDisplay(valor){
            this.display.value += valor
        },
        
        clearDisplay(){
            this.display.value = ''
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        count(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if(conta === '' || Number.isNaN(conta)){
                    alert('Insira uma conta válida') 
                    return
                }
                this.display.value = conta
            }

            catch(e){
                alert('Insira uma conta válida')
                return
            }
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
