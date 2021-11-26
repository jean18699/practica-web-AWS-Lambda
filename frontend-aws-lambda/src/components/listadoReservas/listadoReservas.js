
export default {
  name: 'listado-reservas',
  components: {},
  props: [],
  data () {
    return {
      reservas: [
      {id:1, nombre:"Estudiante 1", laboratorio: "REDES", fecha: new Date()},
      {id:2, nombre:"Estudiante 2", laboratorio: "Computacion", fecha: new Date()}
      ],

     
     
      showModal: false
      
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}

var mindate = new Date().toLocaleDateString("en-US");
console.log(mindate)

