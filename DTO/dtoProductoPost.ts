import { Expose, Transform, Type } from "class-transformer";

export default class dtoProductoPost{
    @Expose({name: "nombre_producto"})
    @Transform(({value}) => {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true}) 
    nombre:string;
    @Expose({name: "descripcion_producto"})
    @Transform(({value}) => {if(/^[A-Z-a-z\s]+$/.test(value)) return value;
    else throw {status:400, message:"Error en los parametros de entradas"};}, {toClassOnly:true}) 
    descripcion:string;
    @Expose({name:"estado_producto"})
    @Transform(({value}) => {if(Math.floor(value) && typeof value == "number") return Math.floor(value);
    else throw {status:400, message: "Error en los parametros de entrada"};}, {toClassOnly: true})
    estado:number;
    @Expose({name:"creado_por"})
    @Transform(({value}) => {
        if(value === null){
          return value;
        }else{
          if((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
          else throw {status:400, message:"Error en los parametros de entradas"};
        }
        }, {toClassOnly:true}) 
    created_by:number;
    @Expose({name:"modificado_por"})
    @Transform(({value}) => {
        if(value === null){
          return value;
        }else{
          if((Math.floor(value)) && typeof value == "number")
            return Math.floor(value);
          else throw {status:400, message:"Error en los parametros de entradas"};
        }
        }, {toClassOnly:true}) 
    update_by:number;
    constructor(nombre:string, descripcion:string, estado:number, created_by:number, update_by:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = estado;
        this.created_by = created_by;
        this.update_by = update_by;
    }
}