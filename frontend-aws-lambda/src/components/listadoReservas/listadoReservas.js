import axios from 'axios';

export default {

  name: 'listado-reservas',
  components: {
 
  },
  props: [],
  data () {
    return {

      reservas: [],

      fechaActual: new Date(),
      fechaReserva: new Date(),
      fechaConsultaReservaInicial: new Date(),
      fechaConsultaReservaFinal: new Date(),
      permisoRegistro: true,

      formRegistro:{
       "id":"",
       "nombre":"",
       "carrera":"",
       "laboratorio":"",
       "fechaReserva":""
     },
     
     formConsulta:{
      "fechaInicialReserva":"",
      "fechaFinalReserva":""
     },
     
    }
  },
  computed: {

  },
  mounted () {
      this.getReservas();   
      this.formatearFechaActual();

  },
  methods: {
    getReservas(){
      //mock server para testing
      axios.get("https://f905de0e-537a-43da-898b-b60be37fb530.mock.pstmn.io/reservas").then(response => {
        this.reservas = response.data.reservas
      })
    },

    getReservasByRangoFecha(){
      this.formConsulta.fechaInicialReserva = this.formatearFechaConsulta(this.fechaConsultaReservaInicial)
      this.formConsulta.fechaFinalReserva = this.formatearFechaConsulta(this.fechaConsultaReservaFinal)
      console.log(this.formConsulta)
    },
    
    agregarReserva(){
   
      this.formRegistro.fechaReserva = this.formatearFecha(this.fechaReserva)     
      console.log(this.formRegistro)
     
      /*axios.post("https://f905de0e-537a-43da-898b-b60be37fb530.mock.pstmn.io/reservas").then(response => {
        this.reservas = response.data.reservas
      })*/
    },

    formatearFecha(fecha)
    {
      let selectedDate = new Date(fecha);
      let day = (selectedDate.getDate() + 1), month = selectedDate.getMonth() + 1, year = selectedDate.getFullYear();
      let hour = selectedDate.getHours(), minutes = selectedDate.getMinutes()    
      return day+"-"+(month<10?"0":'')+month+"-"+year+" "+hour+":"+ (minutes < 10? '0':'')+minutes;  
    },

    formatearFechaConsulta(fecha)
    {
      let selectedDate = new Date(fecha);
      let day = (selectedDate.getDate() + 1), month = selectedDate.getMonth() + 1, year = selectedDate.getFullYear()
      return (day)+"-"+(month<10?"0":'')+month+"-"+year;
    },

    formatearFechaActual()
    {
      let selectedDate = new Date(this.fechaActual);
      let day = (selectedDate.getDate()), month = selectedDate.getMonth() + 1, year = selectedDate.getFullYear()
      this.fechaActual = year+"-"+(month<10?"0":'')+month+"-"+day;
    },
   
    checkHorasReserva(){
      let selectedDate = new Date(this.fechaReserva);
      let hour = selectedDate.getHours()
      if(hour >= 8 && hour <= 22){
        this.permisoRegistro = true
      }else
      {
        this.permisoRegistro = false;
      }
    }



  }
}


