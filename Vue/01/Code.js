const app = new Vue({
       el: '#APP', 
       data: {
         h1: 'Vue.js UX',
         h2: 'Que tal',
         Frutas:[
             'Pera',
             'Manzana',
             'Melon',
             'Sandia',
             'Banana'
         ],
         Obj: [
             {nombre: 'Ricardo', apellido: 'Almonte', edad:0},
             {nombre: 'Jose', apellido: 'Ramiez', edad: 52},
             {nombre: 'Annie', apellido: 'Taveras', edad:26},
             {nombre: 'Santos', apellido: 'Sosa', edad: 23},
             {nombre: 'Alfonsa', apellido: 'Aquino', edad: 53},
             {nombre: 'Alverti', apellido: 'Veras', edad: 53},
             {nombre: 'Antonio', apellido: 'Lopez', edad: 53},
             {nombre: 'Francisco', apellido: 'Sanchez', edad: 52},
             {nombre: 'Juan', apellido: 'Gomez', edad: 81},
             {nombre: 'Manuel', apellido: 'Fernandez', edad: 20},
             {nombre: 'Pedro', apellido: 'Moreno', edad: 24},
             {nombre: 'Jesus', apellido: 'Jimenez', edad: 36},
             {nombre: 'Angel', apellido: 'Perez', edad: 45},
             {nombre: 'Miguel', apellido: 'Rodriguez', edad: 82},
             {nombre: 'Javier', apellido: 'Navarro', edad: 75},
             {nombre: 'Jose Antonio', apellido: 'Ruiz', edad: 16},
             {nombre: 'David', apellido: 'Diaz', edad: 20},
             {nombre: 'Jose Luis', apellido: 'Serrrano', edad: 28},
             {nombre: 'Carlos', apellido: 'Muños', edad: 23},
             {nombre: 'Rafael', apellido: 'Saez', edad: 46},
             {nombre: 'Daniel', apellido: 'Rubio', edad: 58},
             {nombre: 'Juan Jose', apellido: 'Alfaro', edad: 13},
             {nombre: 'Luis', apellido: 'Molina', edad: 16},
             {nombre: 'Pablo', apellido: 'Castillo', edad: 12},
             {nombre: 'Alejandro', apellido: 'Picazo', edad: 54}
         ],
         name: '',
         errMsjLabel: '',
        

       },
       methods:{

            BlockDIV(){
                const smooth = app.$refs.window; 
                setTimeout(() => smooth.style.display = 'block');
            },

           

            beforeMount(){
               this.BlockDIV();
            }, 

           AgregarObj(){
                this.Obj.push({
                    nombre: this.name, apellido: this.last, edad: this.year
               });

               this.name =  '';
               this.last = '';
               this.year = '';
               setTimeout(() => this.OnLI(), 100)
               this.ShowDIV();
               this.closeAdd();
            },
            
           errMsj(){
            this.errMsjLabel = 'Error TEST'
           },
           
           DOMUSE(){
               const div = app.$refs.op;
               var num = 0;
               if (num == 0){
                   div.style.backgroundColor = '#66bb6a';
                   num = num + 1;                  
                }
                else{
                    div.style.backgroundColor = '#f2f2f2';
                }         
                num = num - 1;
                console.log(num);
           },
            //TOAST CSS3  DISIGN BASED VUE.JS
           Net(){
                const smooth = app.$refs.window;
                smooth.style.top = '750px';
                smooth.style.opacity = '100';
                // smooth.style.transform = 'scale(1.0)';
            },

           ShowDIV(){
                const smooth = app.$refs.window;
                smooth.style.display = 'block'
                setTimeout(() => this.Net(), 100);
                setTimeout(() => this.CloseDIV(), 5000);
           },           

           CloseDIV(){
                const smooth = app.$refs.window;
                smooth.style.top = '800px';
                smooth.style.opacity = '0';
                // smooth.style.transform = 'scale(0.0)';
            },
            

            NetAdd(){
                const add = app.$refs.add;
                add.style.opacity='100';
                add.style.transform = 'scale(1.0)';
            },
            
            showAdd(){
                const add = app.$refs.add;
                const blur = app.$refs.blur;


                add.style.display = 'block';
                blur.style.display = 'block';
                setTimeout(() => this.NetAdd(), 100);
             },

            closeAdd(){
                const add = app.$refs.add;
                const blur = app.$refs.blur;

                blur.style.display = 'none';
                add.style.transform = 'scale(0.0)';
            }
       }
})