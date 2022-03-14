
const path = require('path');

const express = require('express');
const bcrypt = require('bcrypt');

const app = new express();
const initDB = require('./db');
const UsuarioCliente = require('./Modelos/UsuarioCliente');
const UsuarioEmpleado = require('./Modelos/UsuarioEmpleado');
const Cliente = require('./Modelos/Cliente');
const Medicamento = require('./Modelos/Medicamento');

const bodyParser = require('body-parser');
const req = require('express/lib/request');

/*app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmPrincipal.html'));
});

app.get('/frmELogin.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmELogin.html'));
});
app.get('/frmCLogin.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmCLogin.html'));
});
app.get('/frmPrincipal.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmPrincipal.html'));
});
app.get('/frmERegistroEmpleado.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmERegistroEmpleado.html'));
});
app.get('/frmCRegistroCliente.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmCRegistroCliente.html'));
});
app.get('/frmCompraMed.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmCompraMed.html'));
});
app.get('/frmEMenu.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmEMenu.html'));
});
app.get('/frmERegistroClientes.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmERegistroClientes.html'));
});
app.get('/frmERegistroMedicamentos.html',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/frmERegistroMedicamentos.html'));
});*/

// METODOS GET PARA IMAGENES 
app.get('/img/1.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/1.png'));
});
app.get('/img/2.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/2.png'));
});
app.get('/img/3.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/3.png'));
});
app.get('/img/4.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/4.png'));
});
app.get('/img/5.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/5.png'));
});
app.get('/img/6.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/6.png'));
});
app.get('/img/adelante.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/adelante.png'));
});
app.get('/img/atras.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/atras.png'));
});
app.get('/img/enviar.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/enviar.png'));
});
app.get('/img/cruzAzul.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/cruzAzul.png'));
});
app.get('/img/password.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/password.png'));
});
app.get('/img/trash.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/trash.png'));
});
app.get('/img/Usuario.png',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'Paginas/img/Usuario.png'));
});

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Metodos POST para envio de datos 
/*app.post('/registarCliente',(req,res)=>{
    UsuarioCliente.create(req.body,(error,usuario)=>{
       res.redirect('/frmCLogin.html')
       console.log(req.body);
    })
})*/

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');

const medicamentos = require('./routes/medicamentos')
app.use(medicamentos);
const clientes = require('./routes/clientes');
app.use(clientes);
const principal = require('./routes/principal');
app.use(principal);
const loginEmpleado = require('./routes/loginEmpleado');
app.use(loginEmpleado);
const loginCliente = require('./routes/loginCliente');
app.use(loginCliente);
const RegistroUsuarioCliente = require('./routes/registroUsuarioCliente');
app.use(RegistroUsuarioCliente);
const RegistroUsuarioEmpleado = require('./routes/registroUsuarioEmpleado');
app.use(RegistroUsuarioEmpleado);
const RegistroDeCliente = require('./routes/registroClientes');
app.use(RegistroDeCliente);
const RegistroDeMedicmaentos = require('./routes/registroMedicamento');
app.use(RegistroDeMedicmaentos);
const menu = require('./routes/menu');
app.use(menu);



/*app.post('/registarEmpleado',(req,res)=>{
    const {nombre, password, confirmacionpasswd, txtCodigoActivacionfrmRegistroEmpleado} = req.body;
    console.log(req.body);
    console.log(password);
    console.log(confirmacionpasswd);
    console.log(txtCodigoActivacionfrmRegistroEmpleado);
    if(password == confirmacionpasswd && txtCodigoActivacionfrmRegistroEmpleado == 'MedicalApp$Admin$2022'){
    UsuarioEmpleado.create(req.body,(error,usuario)=>{
       res.redirect('/frmELogin.html')
       console.log(req.body);
        }); 
    }
    else if(txtCodigoActivacionfrmRegistroEmpleado != 'MedicalApp$Admin$2022'){
        res.status(500).send('Código de Validación Incorrecto');
    }
    else{
        res.status(500).send('Contraseñas deben Coincidir');
    }
})

app.post('/loginCliente',async(req, res)=>{
    try{
        const {nombre, password} = req.body;

        const user = await UsuarioCliente.findOne({nombre:nombre});

        if(password == user.password){
            res.redirect('/frmCompraMed.html');
        } 
        else{
            res.send("Contraseña Invalida");
        }
 
    } catch (error){
        res.status(400).send("Login Inválido");
    }
});

app.post('/loginEmpleado', async (req,res)=>{
    try{
        const {nombre, password} = req.body;

        const user = await UsuarioEmpleado.findOne({nombre:nombre});

        if(password == user.password){
            res.redirect('/frmEMenu.html');
        } 
        else{
            res.send("Contraseña Invalida");
        }
 
    } catch (error){
        res.status(400).send("Login Inválido");
    }

});

app.post('/registerClient', (req,res)=>{
    Cliente.create(req.body,(error,usuario)=>{
        res.redirect('frmERegistroClientes.html');
        console.log(req.body);
     });
});

app.post('/registerMedicine', (req,res)=>{
    Medicamento.create(req.body,(error,usuario)=>{
        res.redirect('frmERegistroMedicamentos.html');
        console.log(req.body);
     });
});*/
 
app.listen(4000,()=>{
    console.log('Aplicacion corriendo en el puerto 4000');

});
initDB();