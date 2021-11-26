import axios from 'axios';

export default {

  name: 'listado-reservas',
  components: {},
  props: [],
  data () {
    return {

      reserva: {id:1, nombre:"Estudiante 1", laboratorio: "REDES", fecha: "01-01-2001"},

      reservas: [],

     /* id: "0",
      nombre: "string",
      carrera: "string",
      laboratorio: "string",
      fecha: "string",*/
      fechaReserva: new Date(),
     
      formRegistro:{
       "id":"",
       "nombre":"",
       "carrera":"",
       "laboratorio":"",
       "fechaReserva":""
     },
     
      showModal: false
      
    }
  },
  computed: {

  },
  mounted () {
      this.getReservas()
  },
  methods: {
    getReservas(){
     
      //mock server para testing
      axios.get("https://f905de0e-537a-43da-898b-b60be37fb530.mock.pstmn.io/reservas").then(response => {
        this.reservas = response.data.reservas
      })
    },
    agregarReserva(){
    /* var dformat = [this.fechaReserva.getMonth()+1,
      this.fechaReserva.getDate(),
      this.fechaReserva.getFullYear()].join('/')+' '+
       [this.fechaReserva.getHours(),
        this.fechaReserva.getMinutes()].join(':');*/
      
      let selectedDate = new Date(this.fechaReserva);
 
      let day = selectedDate.getDate()
      let month = selectedDate.getMonth() + 1
      let year = selectedDate.getFullYear()
      let hour = selectedDate.getHours()
      let minutes = selectedDate.getMinutes()

      if(month < 10){
        
        console.log(day+"-"+"0"+month+"-"+year+" "+hour+":"+minutes)
        this.formRegistro.fechaReserva = day+"-"+"0"+month+"-"+year+" "+hour+":"+minutes;
        
        
      }else{
        
        console.log(day+"-"+month+"-"+year+" "+hour+":"+minutes)
        this.formRegistro.fechaReserva = day+"-"+month+"-"+year+" "+hour+":"+minutes;
     
      }

      console.log(this.formRegistro)
     
      /*axios.post("https://f905de0e-537a-43da-898b-b60be37fb530.mock.pstmn.io/reservas").then(response => {
        this.reservas = response.data.reservas
      })*/
    }
  }
}

var mindate = new Date().toLocaleDateString("en-US");
console.log(mindate)

