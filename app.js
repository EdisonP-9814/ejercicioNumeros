const {createApp, ref} = Vue;
const numero = ref(0);
const binario = ref(numero.value.toString(2));
const texto = ref("cero");


const app = createApp({

    setup(){
       
        const cambioNumPos=()=>{
            numero.value++;
            binario.value = numero.value.toString(2);
            actulalizar();
        
            //texto.value = "numero positivo";
        }
        const cambioNumNeg=()=>{
            numero.value--;
            binario.value = numero.value.toString(2);
            actulalizar();
            //texto.value = "numero negativo";    
        }
        const actulalizar=()=>{
            if(numero.value>0){
                texto.value="numero positivo";
            }else if(numero.value<0){
                texto.value="numero negativo";
            }else{
                texto.value="cero";
            }
        }
        
        return {numero,binario,texto,cambioNumPos,cambioNumNeg,actulalizar};
    }
});
app.mount('#iden');
